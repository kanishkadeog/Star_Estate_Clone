

import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";

export default function FeaturedProjects() {
  return (
    <section className="bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        <h2 className="text-2xl text-center font-bold mb-6">
          Featured Projects
        </h2>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="h-80 relative group rounded overflow-hidden shadow bg-cover bg-center"
              style={{ backgroundImage: `url(${p.image})`, height: "260px" }}
            >
              {/* WHITE CARD CONTENT */}
              <div className="h-20 absolute bottom-0 left-0 right-0 bg-white p-4 shadow-inner">
                <div className=" flex justify-between items-start">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm font-semibold text-green-800">
                    {p.description}
                  </p>
                </div>
  {/* Divider Line */}
        <div className=" mt-1 border-t border-gray-300"></div>

                <div className="  flex justify-between items-center">
                  <button className="bg-brandGreen text-black px-3 py-1 rounded">
                    location
                  </button>
                  <span>Area</span>
                </div>
              </div>

              {/* + BUTTON (bottom-right) */}
              <button
                onClick={() => alert(`Clicked on ${p.title}`)}

                className="
                  absolute bottom-24 right-4 
                  w-8 h-8 rounded-full 
                  bg-white text-black 
                  flex items-center justify-center  
                  shadow-md cursor-pointer
                  transition-all duration-300
                  group-hover:bg-green-600 group-hover:text-white
                "
              >
                +
              </button>

            </div>
          ))}
        </div>

        {/* BOTTOM CONTROLS */}
        <div className="flex justify-center items-center gap-4 mt-10">
          
          <button className="w-10 h-10 bg-black text-white flex items-center justify-center text-xl">
            ←
          </button>

          <Link
            to="/new-launches"
            className="px-6 py-2 bg-white border border-black text-black font-semibold rounded-md"
          >
            View all
          </Link>

          <button className="w-10 h-10 bg-black text-white flex items-center justify-center text-xl">
            →
          </button>

        </div>
      </div>
    </section>
  );
}
