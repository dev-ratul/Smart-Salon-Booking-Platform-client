import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-black via-gray-900 to-black text-gray-300 py-16 overflow-hidden">
      {/* Animated overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-800/20 via-transparent to-pink-700/10 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Smart<span className="text-purple-400">Salon</span>
          </h2>
          <p className="text-gray-400">
            Revolutionize your grooming experience with premium services & modern style.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-purple-400 cursor-pointer">Home</li>
            <li className="hover:text-purple-400 cursor-pointer">Our Map</li>
            <li className="hover:text-purple-400 cursor-pointer">Shop</li>
            <li className="hover:text-purple-400 cursor-pointer">Dashboard</li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-purple-400" /> Dhaka, Bangladesh
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-purple-400" /> +880 123 456 789
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-purple-400" /> info@smartsalon.com
            </li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center lg:text-left"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4 justify-center lg:justify-start">
            <FaFacebookF className="w-8 h-8 p-2 bg-purple-600 rounded-full cursor-pointer hover:bg-purple-500 transition" />
            <FaInstagram className="w-8 h-8 p-2 bg-purple-600 rounded-full cursor-pointer hover:bg-purple-500 transition" />
            <FaTwitter className="w-8 h-8 p-2 bg-purple-600 rounded-full cursor-pointer hover:bg-purple-500 transition" />
          </div>
        </motion.div>
      </div>

      {/* Bottom line */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} SmartSalon. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
