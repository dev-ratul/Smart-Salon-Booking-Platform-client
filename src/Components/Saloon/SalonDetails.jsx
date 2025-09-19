import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SalonDetails = () => {
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
        <div>
            dsfads
        </div>
    );
};

export default SalonDetails;