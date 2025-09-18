import React from "react";

const ContactSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/mVMwmNp7/young-man-barbershop-trimming-hair.jpg')", // এখানে তোর salon background বসাবি
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/90"></div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Side - Info */}
        <div className=" text-white p-8 rounded-2xl shadow-lg space-y-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-400">
            We usually reply within 24 hours
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-300 leading-relaxed">
            Have a question? Contact us. <br />
            Tell us a bit about your question. Our support team will reach out
            as soon as possible. For urgent matters, consider using the phone
            field.
          </p>

          {/* Contact Details */}
          <div className="space-y-2">
            <p className="text-gray-400 hover:text-purple-300 transition">
              📧 supportsalon@gmail.com
            </p>
            <p className="text-gray-400 hover:text-purple-300 transition">
              💬 Live chat: 10am–6pm (GMT+6)
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-gray-900/70 p-8 rounded-2xl shadow-lg">
          <form className="space-y-6">
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-pink-500 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </div>

            {/* Contact + Topic */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Contact Number"
                className="w-full p-4 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-pink-500 outline-none"
              />
              <input
                type="text"
                placeholder="Topic"
                className="w-full p-4 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-pink-500 outline-none"
            />

            {/* Message */}
            <textarea
              rows="6"
              placeholder="Message"
              className="w-full p-4 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-pink-500 outline-none resize-none"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
