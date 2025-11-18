

import React from "react";
import cities from "../data/cities";
import { Link } from "react-router-dom";

// IMPORT BACKGROUND IMAGE
import cityBg from "../assets/cities.jpeg";

export default function CityGrid() {
  const mainCities = cities.slice(0, 7);
  const otherCities = cities.slice(7);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl text-center font-bold mb-6">
        Find your dream property in the city you're searching in
      </h2>

      {/* CITY GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        
        {/* --- MAIN CITY CARDS --- */}
        {mainCities.map((c, i) => (
          <div
            key={i}
            className="relative h-40 rounded shadow overflow-hidden group bg-cover bg-center"
            style={{ backgroundImage: `url(${cityBg})` }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* City Name */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <p className="text-white font-semibold text-lg drop-shadow">
                {c}
              </p>
            </div>

            {/* + BUTTON
            <button className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white text-brandGreen text-2xl flex items-center justify-center shadow font-bold">
              +
            </button> */}

            <button
  onClick={() => alert(`Clicked on ${c}`)}
  className="
    absolute bottom-3 right-3 
    w-9 h-9 rounded-full 
    bg-white text-brandGreen 
    flex items-center justify-center 
    shadow transition-all duration-300
    group-hover:bg-green-600 group-hover:text-white
    z-20
  "
>
  +
</button>

          </div>
        ))}

        {/* --- OTHER CITIES CARD --- */}
        <Link
          to="/all-cities"
          className="relative h-40 rounded shadow overflow-hidden group bg-cover bg-center"
          style={{ backgroundImage: `url(${cityBg})` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Text */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
            <p className="font-semibold text-lg">Other Cities</p>
            <p className="text-sm opacity-90">View complete list →</p>
          </div>

          {/* Arrow Button
          <button className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white text-brandGreen text-2xl flex items-center justify-center shadow font-bold">
            →
          </button> */}

          <button
  className="
    absolute bottom-3 right-3 
    w-9 h-9 rounded-full 
    bg-white text-brandGreen 
    flex items-center justify-center 
    shadow transition-all duration-300
    group-hover:bg-green-600 group-hover:text-white
    z-20
  "
>
  →
</button>


        </Link>

      </div>
    </section>
  );
}
