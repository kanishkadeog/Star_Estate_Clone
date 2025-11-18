import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function MobileMenu({ open, onClose }) {
  const [mediaOpen, setMediaOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);
  const [builderOpen, setBuilderOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);

  const mediaItems = [
    "Awards",
    "News",
    "Blogs",
    "Events",
    "Advertisements",
  ];

  const cities = [
    "Agra","Ahmedabad","Ayodhya","Bangalore","Chennai","Delhi",
    "Goa","Greater Noida","Gurugram","Hyderabad","Jaipur",
    "Kolkata","Lucknow","Mathura","Mumbai","Noida","Pune"
  ];

  const builders = ["Tata Housing", "Lodha Group", "Godrej Properties"];
  const projects = ["Luxury Villas", "Smart Homes", "Green Residency"];

  return (
    <div
      onMouseLeave={onClose}

      className={`fixed top-16 right-0 h-auto w-80 bg-white shadow-xl z-50 transform transition-transform duration-500 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6 h-full overflow-y-auto">

        {/* Header */}
       
        {/* Main Menu */}
        <ul className="space-y-4 text-[16px] font-medium">

          {/* HOME */}
          <li><Link to="/" onClick={onClose}>Home</Link></li>

          {/* ABOUT US */}
          <li><Link to="/about-us" onClick={onClose}>About Us</Link></li>

          {/** ---------- SMALL SCREEN EXTRA ITEMS ---------- **/}
      {/* ------------------ */}

      <div className="md:hidden space-y-4">
          {/* CITY (Dropdown) */}
          <li>
            <button
              className="flex  w-full"
              onClick={() => setCityOpen(!cityOpen)}
            >
              City
              <span
                className={`transition-transform duration-500 ${
                  cityOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                ▾
              </span>
            </button>
            {cityOpen && (
              <ul className="mt-2 ml-3 space-y-2 text-sm">
                {cities.map((c, i) => (
                  <li key={i}>
                    <Link to="/" onClick={onClose}>{c}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* BUILDER (Dropdown) */}
          <li>
            <button
              className="flex  w-full"
              onClick={() => setBuilderOpen(!builderOpen)}
            >
              Builder
              <span
                className={`transition-transform duration-500 ${
                  builderOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                ▾
              </span>
            </button>
            {builderOpen && (
              <ul className="mt-2 ml-3 space-y-2 text-sm">
                {builders.map((b, i) => (
                  <li key={i}>
                    <Link to="/" onClick={onClose}>{b}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* PROJECTS (Dropdown) */}
          <li>
            <button
              className="flex  w-full"
              onClick={() => setProjectOpen(!projectOpen)}
            >
              Projects
              <span
                className={`transition-transform duration-500 ${
                  projectOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                ▾
              </span>
            </button>
            {projectOpen && (
              <ul className="mt-2 ml-3 space-y-2 text-sm">
                {projects.map((p, i) => (
                  <li key={i}>
                    <Link to="/" onClick={onClose}>{p}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

</div>
         {/* ------------- */}

          {/** ---------- REGULAR MENU ---------- **/}

          {/* MEDIA DROPDOWN */}
          <li>
            <button
              className="flex w-full"
              onClick={() => setMediaOpen(!mediaOpen)}
            >
              Media
              <span
                className={`transition-transform duration-[700ms] ${
                  mediaOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                ▾
              </span>
            </button>

            {mediaOpen && (
              <ul className="mt-2 ml-3 space-y-2 text-sm">
                {mediaItems.map((item, i) => (
                  <li key={i}>
                    <Link to="/" onClick={onClose}>{item}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li><Link to="/nri" onClick={onClose}>NRI Corner</Link></li>
          <li><Link to="/careers" onClick={onClose}>Careers</Link></li>
          <li><Link to="/testimonials" onClick={onClose}>Client Testimonials</Link></li>
          <li><Link to="/contact" onClick={onClose}>Contact Us</Link></li>
        </ul>

        {/* Divider Line */}
        <div className="my-6 border-t border-gray-300"></div>

        {/* Social Icons */}
        <div className="flex items-center justify-between px-4">

          {/* Each icon wrapper */}
          

          {/* $$$$$$$$$ */}
          <div className="group relative cursor-pointer">
  <div className="w-8 h-8 border border-blue-600 bg-white rounded-full flex items-center justify-center transition-all group-hover:bg-blue-600 group-hover:border-blue-600">
    <FaFacebookF className="text-blue-600 group-hover:text-white text-lg" />
  </div>

  <span className="absolute left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
    Facebook
  </span>
</div>

{/* ======== */}
 <div className="group relative cursor-pointer">
  <div className="w-8 h-8 border border-pink-600 bg-white rounded-full flex items-center justify-center transition-all group-hover:bg-pink-600 group-hover:border-pink-600">
    <FaInstagram className="text-pink-600 group-hover:text-white text-lg" />
  </div>

  <span className="absolute left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
    Instagram
  </span>
</div>
{/* ======== */}

  <div className="group relative cursor-pointer">
  <div className="w-8 h-8 border border-blue-600 bg-white rounded-full flex items-center justify-center transition-all group-hover:bg-blue-600 group-hover:border-blue-600">
    <FaLinkedinIn className="text-blue-600 group-hover:text-white text-lg" />
  </div>

  <span className="absolute left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
    LinkedIn
  </span>
</div>

{/* =========== */}
<div className="group relative cursor-pointer">
  <div className="w-8 h-8 border border-black bg-white rounded-full flex items-center justify-center transition-all group-hover:bg-black group-hover:border-black">
    <FaXTwitter className="text-black group-hover:text-white text-lg" />
  </div>

  <span className="absolute left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
    Twitter
  </span>
</div>
{/* ======== */}

 <div className="group relative cursor-pointer">
  <div className="w-8 h-8 border border-red-600 bg-white rounded-full flex items-center justify-center transition-all group-hover:bg-red-600 group-hover:border-red-600">
    <FaYoutube className="text-red-600 group-hover:text-white text-lg" />
  </div>

  <span className="absolute left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
    YouTube
  </span>
</div>
{/* ======== */}

          {/* $$$$$$$$$ */}

  

        </div>
      </div>
    </div>
  );
}
