import React, { useState } from "react";
import { Link } from "react-router-dom";

import CityDropdown from "./CityDropdown";
import BuilderDropdown from "./BuilderDropdown";
import ProjectDropdown from "./ProjectDropdown";

import MobileMenu from "./MobileMenu";
import SearchModal from "./SearchModal";
import logo from "../assets/logo.png";


export default function Header() {
  const [showCity, setShowCity] = useState(false);
  const [showBuilder, setShowBuilder] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const [showMobile, setShowMobile] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full shadow bg-white  z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              {/* <img src={logo} alt="logo" className="w-10 h-10" /> */}
              <img src={logo} alt="Logo" className="h-12 w-auto" />

            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">

             {/*--------------------------  */}


{/* CITY MENU */}
<div
  className="relative"
  onMouseEnter={() => setShowCity(true)}
  onMouseLeave={() => setShowCity(false)}
>
  <button className="text-sm font-medium flex items-center gap-1">
    CITY
    <span
      className={`text-green-600 transition-transform duration-300 ${
        showCity ? "rotate-180" : "rotate-0"
      }`}
    >
      ▾
    </span>
  </button>

  {/* DROPDOWN WRAPPER – NO GAP */}
  <div
    className={`absolute left-0 top-full z-50 transition-all duration-200 
      ${showCity ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
    `}
    style={{ marginTop: "0px" }}   // ← VERY IMPORTANT (NO GAP)
  >
    <CityDropdown />
  </div>
</div>


  {/* BUILDER menu */}
  <div
    className="relative"
    onMouseEnter={() => setShowBuilder(true)}
    onMouseLeave={() => setShowBuilder(false)}
  >
    <button className="text-sm font-medium flex items-center gap-1">
      BUILDER
      <span
        className={`text-green-600 transition-transform duration-300 ${
          showBuilder ? "rotate-180" : "rotate-0"
        }`}
      >
        ▾
      </span>
    </button>


    <div
    className={`absolute left-0 top-full z-50 transition-all duration-200 
        ${showBuilder
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
        }`}
            style={{ marginTop: "0px" }}   // ← VERY IMPORTANT (NO GAP)
    >
      <BuilderDropdown />
    </div>
  </div>


  {/* PROJECTS menu */}
  <div
    className="relative"
    onMouseEnter={() => setShowProjects(true)}
    onMouseLeave={() => setShowProjects(false)}
  >
    <button className="text-sm font-medium flex items-center gap-1">
      PROJECTS
      <span
        className={` text-green-600 transition-transform duration-300 ${
          showProjects ? "rotate-180" : "rotate-0"
        }`}
      >
        ▾
      </span>
    </button>

   

    <div
    className={`absolute left-0 top-full z-50 transition-all duration-200 
     ${
        showProjects
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
          style={{ marginTop: "0px" }}   // ← VERY IMPORTANT (NO GAP)

    >
     <ProjectDropdown />
    </div>
  </div>
             {/*--------------------------  */}

           
            </nav>
          </div>

          <div className="flex items-center gap-4">
            
             {/* STAR PARTNER CONNECT */}
               <button
                 onClick={() => setSearchOpen(true)}
                 className="text-sm flex items-center gap-1"
               >
                {/* Desktop & Laptop: text + icon */}
                 <span className="hidden md:inline">STAR PARTNER CONNECT</span>
                 <span className="hidden md:inline">👤</span>

                {/* Tablet & Mobile: ONLY icon */}
                 <span className="md:hidden text-xl">👤</span>
              </button>

             {/* SEARCH PROPERTY */}
               <button
                 onClick={() => setSearchOpen(true)}
                 className="text-sm flex items-center gap-1"
               >
                {/* Desktop & Laptop: text + icon */}
                 <span className="hidden md:inline">SEARCH PROPERTY</span>
                 <span className="hidden md:inline">🔍</span>

                {/* Tablet & Mobile: ONLY icon */}
                 <span className="md:hidden text-xl">🔍</span>
              </button>


            
<div
  onMouseEnter={() => setShowMobile(true)}
  // onMouseLeave={() => setShowMobile(false)}
>

{/* SUPER SLOW Hamburger / Cross Button */}
<button
  onClick={() => setShowMobile(s => !s)}
  // className="p-2 flex flex-col justify-center items-center space-y-1"
    className="p-2 flex flex-col justify-center items-center space-y-1 "

  aria-label="toggle menu"
>
  {/* Top Line */}
  <span
    className={`block h-0.5 w-7 bg-black transition-all duration-[1200ms] ease-in-out ${
      showMobile ? "rotate-45 translate-y-1" : ""
    }`}
  ></span>

  {/* Middle Line */}
  <span
    className={`block h-0.5 w-7 bg-black transition-all duration-[1200ms] ease-in-out ${
      showMobile
        ? "opacity-0 -translate-x-3"
        : "opacity-100 "
    }`}
  ></span>

  {/* Bottom Line */}
  <span
    className={`block h-0.5 w-7 bg-black transition-all duration-[1200ms] ease-in-out ${
      showMobile ? "-rotate-45 -translate-y-2" : "translate-y-0"
    }`}
  ></span>
</button>
</div>


          </div>
        </div>
      </div>

      {/* Mobile menu slide-in */}
      <MobileMenu open={showMobile} onClose={() => setShowMobile(false)} />

      {/* Search modal */}
      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </header>
  );
}
