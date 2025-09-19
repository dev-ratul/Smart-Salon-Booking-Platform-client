import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { imageUpload } from "../../utilities/imageUpload";

const RegisterPremium = () => {
  const { signUp, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const [previewImage, setPreviewImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  // ✅ React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // ✅ handle image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setPreviewImage(previewURL);
    }
  };

  // ✅ onSubmit handler
  const onSubmit = async (data) => {
    const finalData = { ...data, role: "user" };
    console.log(finalData);
    const image = data?.photo[0];
    const imageUrl = await imageUpload(image);
    console.log(imageUrl);

    try {
      const result = await signUp(finalData.email, finalData.password);
      console.log(result.user);

      // ✅ update profile
      const profileInfo = {
        displayName: finalData.name,
        photoURL: imageUrl || previewImage,
      };

      await updateUserProfile(profileInfo);

      reset();
      setPreviewImage(null);

      toast.success("Registration successful!");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Registration failed! Try again.");
    }
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
              onSubmit={handleSubmit(onSubmit)}
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
                    {...register("name", { required: "Full name is required" })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <span className="text-red-400 text-sm">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">
                    Contact number
                  </label>
                  <input
                    {...register("contact", {
                      required: "Contact number is required",
                      pattern: {
                        value: /^\+8801[3-9]\d{8}$/,
                        message: "Enter a valid BD phone number (+8801XXXXXXX)",
                      },
                    })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="+8801XXXXXXXXX"
                  />
                  {errors.contact && (
                    <span className="text-red-400 text-sm">
                      {errors.contact.message}
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
                  {...register("email", { required: "Email is required" })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <span className="text-red-400 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Upload Photo */}
              <div className="form-control flex flex-col  mb-4">
                <label className="label font-semibold mb-2 text-gray-300">
                  Upload Photo
                </label>
                <div className="flex gap-2 flex-col">
                  <input
                    type="file"
                    accept="image/*"
                    {...register("photo", {
                      required: "Photo is required",
                      onChange: (e) => handleImageChange(e),
                    })}
                    className="file-input file-input-bordered w-fit px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.photo && (
                    <p className="text-red-500 text-sm">
                      {errors.photo.message}
                    </p>
                  )}
                  {previewImage && (
                    <img
                      className="w-[50px] h-[50px] object-cover rounded-sm"
                      src={previewImage}
                      alt="preview"
                    />
                  )}
                </div>
              </div>

              {/* Address */}
              <div className="mb-4">
                <label className="block text-sm text-gray-300 mb-2">
                  Address
                </label>
                <textarea
                  rows="2"
                  {...register("address", { required: "Address is required" })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Your address"
                />
                {errors.address && (
                  <span className="text-red-400 text-sm">
                    {errors.address.message}
                  </span>
                )}
              </div>

              {/* Password */}
              <div className="mb-6 relative">
                <label className="block text-sm text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Choose a strong password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute top-11 cursor-pointer right-3 text-xs text-gray-400"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
                {errors.password && (
                  <span className="text-red-400 text-sm">
                    {errors.password.message}
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
