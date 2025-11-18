import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewLaunches from "./pages/NewLaunches";
import Commercial from "./pages/Commercial";
import Residential from "./pages/Residential";
import Tools from "./pages/Tools";
import News from "./pages/News";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllCities from "./pages/AllCities";
import ScrollToTopButton from "./components/ScrollToTopButton";


export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-launches" element={<NewLaunches />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/news" element={<News />} />
          <Route path="/all-cities" element={<AllCities />} />

        </Routes>
         {/* ✅ FIXED BUTTON – always visible on all pages */}
        <ScrollToTopButton />
      </main>
      <Footer />
    </div>
  );
}
