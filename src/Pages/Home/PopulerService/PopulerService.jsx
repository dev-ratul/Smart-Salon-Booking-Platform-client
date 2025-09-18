import React from "react";
import { motion } from "framer-motion";

const PopularService = () => {
  const services = [
    {
      img: "https://i.ibb.co.com/PvvYFFMk/handsome-man-barber-shop-styling-hair.jpg",
      title: "Haircut",
      description: "Trendy cuts & styles by professional barbers.",
      size: "small",
    },
    {
      img: "https://i.postimg.cc/3wXzvBk5/woman-getting-her-hair-washed-beauty-salon.jpg",
      title: "Hair Coloring",
      description: "Premium coloring services for all hair types.",
      size: "small",
    },
    {
      img: "https://i.postimg.cc/k4j1Qh9Z/young-man-getting-his-beard-styled-barber.jpg",
      title: "Beard & Grooming",
      description: "Classic shaves and beard grooming services.",
      size: "large",
    },
    {
      img: "https://i.postimg.cc/cCgmQxFg/preparation-hairdresser-makeup-artist.jpg",
      title: "Makeup & Styling",
      description: "Get party or bridal makeup with expert stylists.",
      size: "large",
    },
    {
      img: "https://i.postimg.cc/Ls80JpFf/woman-relaxing-spa.jpg",
      title: "Spa & Relaxation",
      description: "Rejuvenate your body and mind with our spa.",
      size: "small",
    },
    {
      img: "https://i.postimg.cc/MpKYDm3J/girl-trying-artificial-nails-tips-with-flower-nail-design.jpg",
      title: "Nail Art",
      description: "Trendy nail art and premium manicure services.",
      size: "small",
    },
  ]

  return (
    <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white pb-24 overflow-hidden">
      {/* Animated overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-800/10 via-transparent to-purple-700/10 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl lg:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500"
        >
          Popular Services
        </motion.h2>

        {/* Masonry-like grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* first row: 2 small + 1 large */}
          <div className="grid grid-cols-1 gap-8">
            {services
              .filter((s) => s.size === "small")
              .slice(0, 2)
              .map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="bg-gray-900/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer"
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* middle: 1 large card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gray-900/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer flex flex-col"
          >
            <img
              src={services[2].img}
              alt={services[2].title}
              className="w-full h-[450px] object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{services[2].title}</h3>
              <p className="text-gray-300">{services[2].description}</p>
            </div>
          </motion.div>

          {/* right side: 1 large + 2 small */}
          <div className="grid grid-rows-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-900/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer"
            >
              <img
                src={services[3].img}
                alt={services[3].title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{services[3].title}</h3>
                <p className="text-gray-300">{services[3].description}</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {services.slice(4).map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="bg-gray-900/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer"
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularService;
