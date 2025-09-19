import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const Saloon = () => {
  const [salons, setSalons] = useState([]);

  useEffect(() => {
    const fetchSalons = async () => {
      try {
        const res = await axios.get(
          "https://smart-salon-server-new.onrender.com/api/saloon/get-all-salons"
        );
        setSalons(res.data.data); // API থেকে data state এ set
      } catch (err) {
        console.log("Error fetching salons:", err);
      }
    };

    fetchSalons();
  }, []);

  return (
    <section className="py-20 bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {salons.map((salon) => (
          <div
            key={salon._id}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:border-pink-500 transition"
          >
            {/* Image */}
            <img
              src={salon.image}
              alt={salon.name}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-5 space-y-2">
              <h2 className="text-xl font-bold text-white">{salon.name}</h2>
              <p className="text-gray-400 text-sm">{salon.address}</p>
              <p className="text-gray-400 text-sm">{salon.city}</p>
              <p className="text-gray-400 text-sm">{salon.email}</p>
              <p className="text-gray-400 text-sm">{salon.phone}</p>
              <div className="flex justify-between items-center cursor-pointer">
                <p
                className={`text-sm font-semibold ${
                  salon.status === "Active" ? "text-green-400" : "text-red-400"
                }`}
              >
                {salon.status}
              </p>
              <Link to={`/saloon/${salon._id}`} className="hover:underline text-sm cursor-pointer text-green-300">Booking</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Saloon;
