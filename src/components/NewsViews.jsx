

import React from "react";
import newsBg from "../assets/newsview.jpeg";  // IMPORT IMAGE
import { useNavigate } from "react-router-dom";


export default function NewsViews() {
    const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl text-center font-bold mb-6">News & Views</h2>

      <div className="text-center grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* CARD COMPONENT */}
        {["Awards", "NEWS", "Events", "Blogs"].map((item, index) => (
          <div
            key={index}
            className="
              relative group h-40 rounded shadow overflow-hidden 
              flex flex-col items-center justify-between
              bg-cover bg-center
              pt-4
            "
            style={{ backgroundImage: `url(${newsBg})` }}
          >

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Title at TOP CENTER */}
            <h4 className="relative z-10 font-bold text-lg text-white drop-shadow">
              {item}
            </h4>

            {/* SLIDING ARROW BUTTON */}
            <button
             onClick={() => navigate("/news")}
                className="
                absolute bottom-4 left-1/2 -translate-x-1/2
                w-10 h-10  bg-blue-100/25 
                border border-white
                 text-white
                
                flex items-center justify-center text-xl font-bold
                opacity-0 translate-y-4
                group-hover:opacity-100 group-hover:translate-y-0
                hover:bg-white hover:text-black
                transition-all duration-300
              "
            >
              →
            </button>

          </div>
        ))}

      </div>
    </section>
  );
}

