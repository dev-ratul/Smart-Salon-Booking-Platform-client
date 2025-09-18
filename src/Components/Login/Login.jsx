import React, { useState } from "react";
import { motion } from "framer-motion";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const { login, googleLogin } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);

    login(formData.email, formData.password)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(async (result) => {
        console.log(result)
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white py-28 overflow-hidden">
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-800/20 via-transparent to-pink-700/10 animate-pulse"></div>

      <div className="relative max-w-md mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500"
        >
          Login
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900/50 backdrop-blur-md p-8 rounded-3xl shadow-[0_0_30px_rgba(168,85,247,0.5)]"
        >
          {/* Email */}
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-xl font-bold text-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:opacity-90 transition"
          >
            Login
          </motion.button>
          {/* Google Button */}
          <div className="flex items-center gap-3 mt-5">
            <div className="flex-1 h-px bg-gray-700" />
            <div className="text-xs text-gray-400">or continue with</div>
            <div className="flex-1 h-px bg-gray-700" />
          </div>

          <div className="mt-4">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full cursor-pointer py-3 rounded-lg bg-white text-gray-900 font-semibold hover:brightness-95 transition"
            >
              Continue with Google
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4 text-center">
            Already have an account?{" "}
            <a href="/register" className="text-pink-400 font-medium">
              Register
            </a>
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default Login;
