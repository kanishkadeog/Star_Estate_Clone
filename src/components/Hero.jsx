


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import bg1 from "../assets/background1.jpg";
import bg2 from "../assets/background2.jpg";
import bg3 from "../assets/background3.jpg";

// Words to type one-by-one
const WORDS = [" VILLA", " RENTAL SPACE", " OFFICE SPACE", " APARTMENT"];

// Background images array
const BG_IMAGES = [bg1, bg2, bg3];

// Typing animation letter-by-letter
function TypeByLetter({ text, speed = 120, onComplete }) {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    setLetters([]);
    let i = 0;
    const id = setInterval(() => {
      setLetters((prev) => [...prev, text.charAt(i)]);
      i++;
      if (i >= text.length) {
        clearInterval(id);
        onComplete && onComplete();
      }
    }, speed);
    return () => clearInterval(id);
  }, [text, speed, onComplete]);

  return (
    <span>
      {letters.map((l, idx) => (
        <span key={idx} style={{ animationDelay: `${idx * 0.06}s` }}>
          {l}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [readyToType, setReadyToType] = useState(true);

  const [bgIndex, setBgIndex] = useState(0);

  // Rotate background every 6 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % BG_IMAGES.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const handleComplete = () => {
    setTimeout(() => {
      setWordIndex((w) => (w + 1) % WORDS.length);
      setReadyToType(false);
      setTimeout(() => setReadyToType(true), 10);
    }, 800);
  };

  return (
    <section
      className="w-full h-[450px] bg-cover bg-center relative flex flex-col items-center justify-center transition-all duration-700 ease-in-out"
      style={{
        backgroundImage: `url(${BG_IMAGES[bgIndex]})`,
      }}
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>

      {/* TEXT */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-lg md:text-xl font-bold text-black mb-0 whitespace-nowrap tracking-[0.3rem]">
          YOU DESERVE THE BEST
          <span className="underline decoration-2 decoration-black ml-2">
            {readyToType && (
              <TypeByLetter
                text={WORDS[wordIndex]}
                speed={120}
                onComplete={handleComplete}
              />
            )}
          </span>
        </h1>

        {/* SEARCH BOX */}
        <div className="bg-white-80/10 backdrop-blur-lg shadow-xl border px-4 py-4 rounded-md w-[90vw] md:w-[820px] mx-auto mt-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <select className="p-3 border w-full">
              <option>Property Type</option>
              <option>Commercial</option>
              <option>Residential</option>
              <option>Plots</option>
            </select>

            <select className="p-3 border w-full">
              <option>Project Location</option>
              <option>Pune</option>
              <option>Mumbai</option>
              <option>Delhi</option>
            </select>

            <select className="p-3 border w-full">
              <option>Budget</option>
              <option>₹0-50L</option>
              <option>₹50L-1Cr</option>
              <option>₹1Cr+</option>
            </select>

            <button className="bg-black text-white font-semibold p-3 w-full">
              <Link
                to="/new-launches"
                className="text-white px-6 py-3 font-semibold"
              >
                SEARCH
              </Link>
            </button>
          </div>

          {/* Tabs */}
          <div className=" grid grid-cols-3 mt-4 text-sm font-medium text-gray-700">
            <div className=" py-2 border-2 bg-[#F4FCFF] cursor-pointer text-center">
              <Link to="/new-launches">NEW LAUNCHES</Link>
            </div>
            <div className=" py-2 border-2 bg-[#F4FCFF] cursor-pointer text-center">
              <Link to="/commercial">COMMERCIAL PROPERTIES</Link>
            </div>
            <div className=" py-2 border-2 bg-[#F4FCFF] cursor-pointer text-center">
              <Link to="/residential">RESIDENTIAL PROPERTIES</Link>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="text-sm font-semibold slow-bounce absolute bottom-6 text-center text-gray-600">
        <p>SCROLL</p>
        <p>⌄</p>
      </div>
    </section>
  );
}
