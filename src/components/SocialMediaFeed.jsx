

import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function SocialMediaFeed() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      
      {/* PAGE TITLE */}
      <h2 className="text-2xl text-center font-bold mb-8">
        Social Media Feed
      </h2>

      {/* TWO CARDS SIDE BY SIDE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* INSTAGRAM CARD */}
        <div className="p-6 border border-dashed border-gray-400  text-center">

          <button
            className="
              flex items-center justify-center gap-2 
              mx-auto px-4 py-2 rounded 
              
              text-pink-500 font-semibold
            "
          >
            <FaInstagram className="text-pink-500 text-xl" />
            Instagram
          </button>
        </div>

        {/* YOUTUBE CARD */}
        <div className="p-6 border border-dashed border-gray-400  text-center">

          <button
            className="
              flex items-center justify-center gap-2 
              mx-auto px-4 py-2 rounded 
              
              text-red-600 font-semibold
            "
          >
            <FaYoutube className="text-red-600 text-xl" />
            YouTube
          </button>
        </div>

      </div>
    </section>
  );
}
