import React from "react";
import { motion } from "framer-motion";

const SpecialOfferZigzag = () => {
  const offers = [
    {
      title: "20% Off on Haircuts",
      description: "Get a stylish haircut with 20% discount this month only!",
      image: "https://i.postimg.cc/XJ58JdkG/Gemini-Generated-Image-fhx14rfhx14rfhx1.png", // তুই পরে replace করতে পারবি
      side: "left",
    },
    {
      title: "50% Off on Hair Coloring",
      description: "Brighten your look with 35% discount on hair coloring.",
      image: "https://i.postimg.cc/44YdKGqg/Gemini-Generated-Image-pile87pile87pile.png",
      side: "right",
    },
    {
      title: "70% Off on Spa Package",
      description: "Relax and rejuvenate with 50% discount on spa services.",
      image: "https://i.postimg.cc/cHPfgv52/8249747.jpg",
      side: "left",
    },
  ];

  return (
    <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white py-28 overflow-hidden">
      {/* Animated vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-purple-700/50 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 space-y-20">
        {offers.map((offer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className={`flex flex-col lg:flex-row items-center gap-10 ${
              offer.side === "right" ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="lg:w-1/2">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full rounded-2xl shadow-lg object-cover"
              />
            </div>

            {/* Text */}
            <div className="lg:w-1/2 space-y-4">
              <h3 className="text-3xl font-extrabold">{offer.title}</h3>
              <p className="text-gray-300">{offer.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOfferZigzag;
