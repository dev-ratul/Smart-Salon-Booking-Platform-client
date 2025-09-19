import { motion } from "framer-motion";
import { Scissors, Sparkles } from "lucide-react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white overflow-hidden min-h-screen flex items-center">
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-800/20 via-transparent to-pink-700/10 animate-pulse"></div>

      <div className="relative container mx-auto px-12 py-36 flex flex-col lg:flex-row items-center max-w-7xl justify-between">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center lg:text-left space-y-8 max-w-xl"
        >
          <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 bg-clip-text text-transparent">
              SmartSalon
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300">
            Revolutionize your grooming experience. Book appointments instantly,
            skip waiting lines, and step into a{" "}
            <span className="text-purple-400 font-semibold">premium</span> world
            of style & comfort.
          </p>

          <div className="flex gap-5 justify-center lg:justify-start">
            <button className="px-8   cursor-pointer py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-[0_0_20px_rgba(236,72,153,0.7)] hover:scale-105 transition transform">
              Book Now
            </button>
            <Link to={'/chic-blog'} className="px-8 cursor-pointer py-4 rounded-xl border border-purple-400 text-purple-300 font-semibold hover:bg-purple-600/20 hover:text-white transition">
              Explore Blog
            </Link>
          </div>
        </motion.div>

        {/* Right Image / Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1 }}
          className="mt-14 lg:mt-0"
        >
          <div className="relative">
            <img
              src="https://i.ibb.co/mVMwmNp7/young-man-barbershop-trimming-hair.jpg"
              alt="Smart Salon"
              className="rounded-3xl shadow-[0_0_30px_rgba(168,85,247,0.6)] w-[420px] lg:w-[520px] border border-purple-700/50"
            />
            {/* <Sparkles className="absolute top-[-25px] right-[-25px] text-yellow-400 w-14 h-14 animate-ping" /> */}
            {/* <Scissors className="absolute bottom-[-25px] left-[-25px] text-pink-500 w-14 h-14 animate-bounce" /> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
