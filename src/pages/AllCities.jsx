

//-------------
import React from "react";
import cities from "../data/cities";
import cityBg from "../assets/cities.jpeg"; // IMPORT BACKGROUND IMAGE

export default function AllCities() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">All Cities</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cities.map((c, i) => (
          <div
            key={i}
            className="relative h-32 rounded shadow overflow-hidden group bg-cover bg-center"
            style={{ backgroundImage: `url(${cityBg})` }}
          >
            {/* Dark Layer */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* City Name */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <p className="text-white font-semibold text-lg drop-shadow">
                {c}
              </p>
            </div>

            {/* + BUTTON */}
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
      </div>
    </section>
  );
}
