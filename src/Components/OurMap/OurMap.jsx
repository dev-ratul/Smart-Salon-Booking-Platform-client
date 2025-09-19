import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Swal from "sweetalert2";
import mapData from "../../.././public/ourServies.json";

const blueIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [30, 45],
  iconAnchor: [15, 45],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

//  Bangladesh Center
const centerOfBangladesh = [23.685, 90.3563];

//  Fly to District
const FlyToLocation = ({ lat, lng }) => {
  const map = useMap();
  map.flyTo([lat, lng], 9, { animate: true, duration: 1.5 });
  return null;
};

const BangladeshMap = () => {
  const data = mapData || [];
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Search Function
  const handleSearch = () => {
    if (!Array.isArray(data) || data.length === 0) {
      Swal.fire({
        title: "No Data Available",
        text: "District data is missing!",
        icon: "error",
        background: "#1a1a1a",
        color: "#fff",
      });
      return;
    }

    const found = data.find(
      (d) => d.district.toLowerCase() === searchTerm.toLowerCase()
    );

    if (found) {
      setSelectedLocation({ lat: found.latitude, lng: found.longitude });
      Swal.fire({
        title: found.district,
        text: "Location found on map!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
        background: "#111",
        color: "#fff",
      });
    } else {
      Swal.fire({
        title: "District Not Found",
        text: "Please check spelling or try another district.",
        icon: "warning",
        confirmButtonText: "Okay",
        background: "#1a1a1a",
        color: "#fff",
      });
    }
  };

  // ✅ যদি data নাই
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="flex justify-center items-center h-[400px] bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-red-400 mb-3">
            No district data found!
          </h2>
          <p className="text-gray-400">
            Please check your <code>ourServies.json</code> file.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="relative px-4 py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* ✅ Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
          We are available in all 64 districts
        </h2>
        <p className="text-gray-400 mt-3 text-sm">
          Search your district or explore the interactive map below
        </p>
      </div>

      {/* ✅ Search Bar */}
      <div className="flex justify-center gap-2 mb-10">
        <input
          type="text"
          placeholder="🔍 Search your district..."
          className="w-full max-w-md px-4 py-3 rounded-xl bg-white/10 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md backdrop-blur-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="px-6 py-3 cursor-pointer rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:from-purple-500 hover:to-pink-500 transition"
        >
          Search
        </button>
      </div>

      {/* ✅ Map */}
      <div className="flex justify-center relative z-0">
        <MapContainer
          center={centerOfBangladesh}
          zoom={7}
          scrollWheelZoom={false}
          className="h-[600px] w-full max-w-[1200px] rounded-2xl shadow-2xl border border-gray-700 overflow-hidden"
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {selectedLocation && (
            <FlyToLocation
              lat={selectedLocation.lat}
              lng={selectedLocation.lng}
            />
          )}

          {/* ✅ All District Markers */}
          {data.map((district, index) => (
            <Marker
              key={index}
              position={[district.latitude, district.longitude]}
              icon={blueIcon}
            >
              <Popup>
                <div className="text-center">
                  <strong className="text-lg">{district.district}</strong>
                  <br />
                  {district.covered_area?.length > 0 ? (
                    <span className="text-sm text-gray-700">
                      Covered: {district.covered_area.join(", ")}
                    </span>
                  ) : (
                    <span className="text-sm text-gray-500">No area info</span>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default BangladeshMap;
