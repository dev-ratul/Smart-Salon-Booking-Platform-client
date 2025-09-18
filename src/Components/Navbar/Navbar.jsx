import React, { useState } from "react";
import { Link, useNavigate } from "react-router"; // react-router-dom ব্যবহার করবি
import { Menu, X } from "lucide-react";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const {user, logout}= useAuth()
  console.log(user)
  const navigate= useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  // Logout
  const handleLogout = () => {
    logout()
      .then(() => {
        navigate("/");
        
      })
      .catch((error) => console.error("Sign out error:", error));
  };

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-black via-gray-900 to-black text-gray-200 shadow-[0_0_20px_rgba(236,72,153,0.4)] border-b border-purple-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 bg-clip-text text-transparent"
          >
            Smart<span className="text-white">Salon</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center font-medium">
            <Link
              to="/map"
              className="hover:text-pink-400 transition duration-200"
            >
              OurMap
            </Link>
            <Link
              to="/shop"
              className="hover:text-pink-400 transition duration-200"
            >
              Shop
            </Link>
            <Link
              to="/dashboard"
              className="hover:text-pink-400 transition duration-200"
            >
              Dashboard
            </Link>

            {user ? (
              <button
                onClick={handleLogout}
                className="px-5 cursor-pointer py-2 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg shadow-[0_0_10px_rgba(220,38,38,0.6)] hover:scale-105 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg shadow-[0_0_10px_rgba(236,72,153,0.6)] hover:scale-105 transition"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-200 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-black via-gray-900 to-black text-gray-200 shadow-lg border-t border-purple-700/30">
          <div className="px-4 pt-3 pb-5 space-y-4">
            <Link
              to="/map"
              className="block hover:text-pink-400 transition duration-200"
            >
              OurMap
            </Link>
            <Link
              to="/shop"
              className="block hover:text-pink-400 transition duration-200"
            >
              Shop
            </Link>
            <Link
              to="/dashboard"
              className="block hover:text-pink-400 transition duration-200"
            >
              Dashboard
            </Link>

            {user ? (
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg shadow-[0_0_10px_rgba(220,38,38,0.6)] hover:scale-105 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg shadow-[0_0_10px_rgba(236,72,153,0.6)] hover:scale-105 transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
