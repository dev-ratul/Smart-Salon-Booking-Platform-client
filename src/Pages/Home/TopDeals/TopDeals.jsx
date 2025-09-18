import React from "react";
import { motion } from "framer-motion";


const TopDeals = () => {
  const deals = [
    { service: "Trim your Beard", price: "$10.00" },
    { service: "Trim your Hair", price: "$10.00" },
    { service: "Color your Beard", price: "$10.00" },
    { service: "Wax your Beard", price: "$10.00" },
  ];

  return (
    <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-gray-200 py-16 overflow-hidden">
      {/* overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800/20 via-transparent to-pink-700/10 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white mb-12"
        >
          TOP <span className="text-purple-400">DEALS</span>
        </motion.h2>

        {/* Deals List */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-lg"
        >
          {/* প্রথম কলাম */}
          <div className="space-y-4">
            {deals.map((deal, index) => (
              <div
                key={index}
                className="flex justify-between border-b border-dotted border-gray-600 pb-2"
              >
                <span>{deal.service}</span>
                <span className="text-purple-400">{deal.price}</span>
              </div>
            ))}
          </div>

          {/* দ্বিতীয় কলাম */}
          <div className="space-y-4">
            {deals.map((deal, index) => (
              <div
                key={index}
                className="flex justify-between border-b border-dotted border-gray-600 pb-2"
              >
                <span>{deal.service}</span>
                <span className="text-purple-400">{deal.price}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12"
        >
        <button className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-xl shadow-lg">
            CONTACT US
        </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TopDeals;
