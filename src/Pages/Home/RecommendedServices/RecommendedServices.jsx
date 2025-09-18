import React from "react";
import { motion } from "framer-motion";

const RecommendedServicesPremium2 = () => {
  const services = [
    {
      title: "Premium Haircut",
      description: "Experience a stylish premium haircut by expert barbers.",
      image: "https://i.postimg.cc/fbz7s1JP/side-view-man-getting-new-hairdo.jpg",
    },
    {
      title: "Hair Coloring Special",
      description: "Get vibrant hair coloring with top quality products.",
      image: "https://i.postimg.cc/Lsxt8vP8/high-angle-little-girl-getting-her-hair-dyed.jpg",
    },
    {
      title: "Styling & Blow Dry",
      description: "Professional styling & blow dry for any occasion.",
      image: "https://i.postimg.cc/RhHKGBDW/beautiful-hair-process-keratin-treatment.jpg",
    },
    {
      title: "Beard Grooming",
      description: "Premium beard care and shaving services for men.",
      image: "https://i.postimg.cc/76cSg6mv/professional-hairdresser-modeling-beard-barbershop-close-up-photo.jpg",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-28">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl lg:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500"
      >
        Recommended Services
      </motion.h2>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative rounded-3xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-transform"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-80 object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

            {/* Text */}
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedServicesPremium2;
