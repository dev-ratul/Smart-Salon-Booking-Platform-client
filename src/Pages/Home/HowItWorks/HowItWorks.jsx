import React from "react";
import { motion } from "framer-motion";
import { Calendar, Scissors, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Calendar className="w-12 h-12 text-pink-500" />,
      title: "Book Appointment",
      description:
        "Choose your preferred salon, select the service and schedule your time instantly online.",
    },
    {
      icon: <Scissors className="w-12 h-12 text-purple-500" />,
      title: "Get Groomed",
      description:
        "Visit the salon at your booked slot and enjoy a premium grooming experience.",
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-blue-500" />,
      title: "Confirm & Review",
      description:
        "Confirm your service, make payment if required, and leave a review for the salon.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white py-16 overflow-hidden">
      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-800/20 via-transparent to-pink-700/10 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl lg:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500"
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="bg-gray-900/50 backdrop-blur-md p-8 rounded-3xl shadow-[0_0_30px_rgba(168,85,247,0.5)] text-center hover:scale-105 transition-transform"
            >
              <div className="mb-6 flex justify-center">{step.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
