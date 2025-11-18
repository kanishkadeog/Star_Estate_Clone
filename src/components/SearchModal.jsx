import React, { useState } from "react";

/* Simple modal search UI like image 4 */
export default function SearchModal({ onClose }) {
  const [query, setQuery] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-11/12 md:w-3/4 lg:w-1/2 p-8 search-box relative">
        <button className="absolute top-6 right-6 bg-brandGreen text-white w-10 h-10 rounded-full" onClick={onClose}>×</button>
        <h2 className="text-2xl font-bold mb-4">Search your dream home.</h2>
        <input
          placeholder="Enter builder, city, project name..."
          value={query}
          onChange={e=>setQuery(e.target.value)}
          className="w-full border-b-2 border-brandGreen focus:outline-none py-3"
        />
        <div className="mt-6">
          <button className="px-6 py-3 bg-gray-800 text-white font-semibold">SEARCH</button>
        </div>
      </div>
    </div>
  );
}
