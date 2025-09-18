import React, { useState } from "react";
import { motion } from "framer-motion";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const RegisterPremium = () => {
  const { signUp, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    image: "",
    address: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key} is required`;
      }
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const finalData = { ...formData, role: "user" };

    signUp(finalData.email, finalData.password)
      .then((result) => {
        console.log(result.user);

        // success হলে form reset
        setFormData({
          name: "",
          contact: "",
          email: "",
          image: "",
          address: "",
          password: "",
        });
        setErrors({});


        const profileInfo = {
          displayName: finalData.name,
          photoURL: finalData.image
        };

        updateUserProfile(profileInfo)
          .then(() => {
            //console.log("update profile");
          })
          .catch((error) => {
            //console.log(error);
          });



        navigate("/");

        // toast দেখানো
        toast.success("Registration successful!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Registration failed! Try again.");
      });
  };

  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-black min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.995 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-black/60 via-gray-900/60 to-black/60 rounded-3xl shadow-2xl overflow-hidden "
        >
          <div className="w-full">
            <form
              onSubmit={handleSubmit}
              className="w-full bg-gray-900/60 backdrop-blur-md p-6 rounded-2xl shadow-[0_10px_40px_rgba(99,102,241,0.08)]"
            >
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-2">
                Create an account
              </h2>
              <p className="text-sm text-gray-400 mb-6">
                Sign up — role will be set to{" "}
                <span className="text-pink-400 font-semibold">user</span>.
              </p>

              {/* Name & Contact */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Full name
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <span className="text-red-400 text-sm">{errors.name}</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Contact number
                  </label>
                  <input
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="+8801XXXXXXXXX"
                  />
                  {errors.contact && (
                    <span className="text-red-400 text-sm">
                      {errors.contact}
                    </span>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-sm text-gray-300 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <span className="text-red-400 text-sm">{errors.email}</span>
                )}
              </div>

              {/* Image URL */}
              <div className="mb-4">
                <label className="block text-sm text-gray-300 mb-2">
                  Profile Image URL
                </label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="https://example.com/image.jpg"
                />
                {errors.image && (
                  <span className="text-red-400 text-sm">{errors.image}</span>
                )}
              </div>

              {/* Address */}
              <div className="mb-4">
                <label className="block text-sm text-gray-300 mb-2">
                  Address
                </label>
                <textarea
                  rows="2"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Your address"
                />
                {errors.address && (
                  <span className="text-red-400 text-sm">{errors.address}</span>
                )}
              </div>

              {/* Password */}
              <div className="mb-6 relative">
                <label className="block text-sm text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Choose a strong password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute  top-11 cursor-pointer right-3 text-xs text-gray-400"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
                {errors.password && (
                  <span className="text-red-400 text-sm">
                    {errors.password}
                  </span>
                )}
              </div>

              {/* Submit */}
              <div className="mb-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full cursor-pointer py-3 rounded-lg font-semibold text-lg bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 shadow-md"
                >
                  Create account
                </motion.button>
              </div>

              

              <p className="text-sm text-gray-400 mt-4 text-center">
                Already have an account?{" "}
                <a href="/login" className="text-pink-400 font-medium">
                  Login
                </a>
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterPremium;
