import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import Chatbot from "../Chatbot/Chatbot";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isOpenChat, setIsOpenChat] = useState(false);
  console.log(user);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpenChat);

  // ✅ Logout
  const handleLogout = () => {
    logout()
      .then(() => navigate("/"))
      .catch((error) => console.error("Sign out error:", error));
  };

  // ✅ Active link style
  const activeClass = "text-pink-400 font-semibold border-b-2 border-pink-500";
  const normalClass = "hover:text-pink-400 transition duration-200";

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-black via-gray-900 to-black text-gray-200 shadow-[0_0_20px_rgba(236,72,153,0.4)] border-b border-purple-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 bg-clip-text text-transparent"
          >
            Smart<span className="text-white">Salon</span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center font-medium">
            <button
              onClick={() => setIsOpenChat((prev) => !prev)}
              className="cursor-pointer"
            >
              Elegance AI
            </button>
            <NavLink
              to="/chic-blog"
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              ChicBlog
            </NavLink>
            <NavLink
              to="/our-map"
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              OurMap
            </NavLink>
            <NavLink
              to="/saloon"
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              Saloon
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              Dashboard
            </NavLink>

            {user ? (
              <button
                onClick={handleLogout}
                className="px-5 cursor-pointer py-2 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg shadow-[0_0_10px_rgba(220,38,38,0.6)] hover:scale-105 transition"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className="px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg shadow-[0_0_10px_rgba(236,72,153,0.6)] hover:scale-105 transition"
              >
                Login
              </NavLink>
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
        <div className="md:hidden fixed top-16 left-0 w-full h-screen bg-gradient-to-b from-black via-gray-900 to-black text-gray-200 shadow-lg z-50 overflow-y-auto">
          <div className="flex flex-col items-center justify-start px-6 pt-6 space-y-6">
            <NavLink
              to="/elegance-ai"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-400 font-semibold text-lg border-b-2 border-pink-500"
                  : "text-gray-200 hover:text-pink-400 text-lg transition duration-200"
              }
              onClick={() => setIsOpen(false)}
            >
              Elegance AI
            </NavLink>

            <NavLink
              to="/ChicBlog"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-400 font-semibold text-lg border-b-2 border-pink-500"
                  : "text-gray-200 hover:text-pink-400 text-lg transition duration-200"
              }
              onClick={() => setIsOpen(false)}
            >
              ChicBlog
            </NavLink>

            <NavLink
              to="/map"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-400 font-semibold text-lg border-b-2 border-pink-500"
                  : "text-gray-200 hover:text-pink-400 text-lg transition duration-200"
              }
              onClick={() => setIsOpen(false)}
            >
              OurMap
            </NavLink>

            <NavLink
              to="/saloon"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-400 font-semibold text-lg border-b-2 border-pink-500"
                  : "text-gray-200 hover:text-pink-400 text-lg transition duration-200"
              }
              onClick={() => setIsOpen(false)}
            >
              Saloon
            </NavLink>

            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-400 font-semibold text-lg border-b-2 border-pink-500"
                  : "text-gray-200 hover:text-pink-400 text-lg transition duration-200"
              }
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </NavLink>

            {user ? (
              <button
                onClick={handleLogout}
                className="w-full text-center px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg shadow-lg hover:scale-105 transition"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className="w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg shadow-lg hover:scale-105 transition"
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      )}
      <div>{isOpenChat && <Chatbot setIsOpenChat={isOpenChat} />}</div>
    </nav>
  );
};

export default Navbar;
