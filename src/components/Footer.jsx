import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className="bg-black text-white border-t mt-10">
      <div className="max-w-7xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-5 gap-6">
        <div>
          <h4 className="font-bold mb-2">Projects</h4>
          <ul className="text-sm space-y-1">
            <li><Link to="/commercial" className="hover:text-yellow-600">Commercial</Link></li>
            <li><Link to="/new-launches" className="hover:text-yellow-600">New Launches</Link></li>
            <li><Link to="/residential" className="hover:text-yellow-600">Residential</Link></li>
 
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Company</h4>
          <ul className="text-sm space-y-1">
              <li><Link to="/" className="hover:text-yellow-600">About Star Estate</Link></li>
            <li><Link to="/" className="hover:text-yellow-600">Careers</Link></li>
            <li><Link to="/" className="hover:text-yellow-600">Contact Us</Link></li>
            <li><Link to="/" className="hover:text-yellow-600">FAQs</Link></li>
 
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Media</h4>
          <ul className="text-sm space-y-1">
              <li><Link to="/" className="hover:text-yellow-600">Advertisements</Link></li>
            <li><Link to="/" className="hover:text-yellow-600">Awards</Link></li>
            <li><Link to="/" className="hover:text-yellow-600">Blogs</Link></li>
             <li><Link to="/" className="hover:text-yellow-600">Events</Link></li>
            <li><Link to="/" className="hover:text-yellow-600">News</Link></li>


 
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Explore</h4>
          <ul className="text-sm space-y-1">
              <li><Link to="/" className="hover:text-yellow-600">Buyer Guide</Link></li>
            <li><Link to="/" className="hover:text-yellow-600">NRI Corner</Link></li>
            <li><Link to="/" className="hover:text-yellow-600">Disclaimer</Link></li>
            <li><Link to="/" className="hover:text-yellow-600">Privacy Policy</Link></li>
            <li><Link to="/" className="hover:text-yellow-600">Sitemap</Link></li>

 
          </ul>
        </div>

        {/* ----------------- */}
        <div>
          <h4 className="font-bold mb-2">Follow Us</h4>
          {/* +++++++++ */}
  <div className="flex items-center gap-4 flex-wrap mt-2">

{/* $$$$$$$$$ */}
          <div className="group relative cursor-pointer">
  <div className="w-8 h-8 border border-blue-600 bg-blue-600 rounded-full flex items-center justify-center transition-all group-hover:bg-blue-600 group-hover:border-blue-600">
    <FaFacebookF className="text-white  text-lg" />
  </div>

  <span className="border border-white absolute left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-xs bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity">
    Facebook
  </span>
</div>

{/* ======== */}
 <div className="group relative cursor-pointer">
  <div className="w-8 h-8 border border-pink-600 bg-pink-600 rounded-full flex items-center justify-center transition-all group-hover:bg-pink-600 group-hover:border-pink-600">
    <FaInstagram className="text-white group-hover:text-white text-lg" />
  </div>

  <span className="border border-white absolute left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-xs bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity">
    Instagram
  </span>
</div>
{/* ======== */}

  <div className="group relative cursor-pointer">
  <div className="w-8 h-8 border border-blue-600 bg-blue-600 rounded-full flex items-center justify-center transition-all group-hover:bg-blue-600 group-hover:border-blue-600">
    <FaLinkedinIn className="text-white group-hover:text-white text-lg" />
  </div>

  <span className="border border-white absolute left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-xs bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity">
    LinkedIn
  </span>
</div>

{/* =========== */}
<div className="group relative cursor-pointer">
  <div className="w-8 h-8 border border-black bg-gray-600 rounded-full flex items-center justify-center transition-all group-hover:bg-black group-hover:border-black">
    <FaXTwitter className="text-white group-hover:text-white text-lg" />
  </div>

  <span className="border border-white absolute left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-xs bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity">
    Twitter
  </span>
</div>
{/* ======== */}

 <div className="group relative cursor-pointer">
  <div className="w-8 h-8 border border-red-600 bg-red-600 rounded-full flex items-center justify-center transition-all group-hover:bg-red-600 group-hover:border-red-600">
    <FaYoutube className="text-white group-hover:text-white text-lg" />
  </div>

  <span className="border border-white absolute left-1/2 -translate-x-1/2 mt-1 px-2 py-1 text-xs bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity">
    YouTube
  </span>
</div>
{/* ======== */}

          {/* $$$$$$$$$ */}
 </div>
          {/* ++++++++ */}
        </div>
{/* ---------------- */}

      </div>

<div className=" bg-gray-600/40 flex items-center justify-between px-10">

      <div className="flex items-center gap-6">
               <img src={logo} alt="Logo" className="h-12 w-auto" />
 
      </div>
      <div className="flex items-center text-center py-6 text-sm text-gray-600 gap-6">
        ©  Star Estate - Demo(clone) {new Date().getFullYear()}
      </div>
   </div>
    </footer>
  );
}
