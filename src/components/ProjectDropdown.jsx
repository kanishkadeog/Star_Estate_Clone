import React from "react";

export default function ProjectDropdown() {
  const projects = [
    "Residential", "Commercial", "New Launches", "Plots"];

  return (
    <div className="bg-white p-6 shadow-lg border w-[820px]">
<h3 className="font-bold">PROJECTS</h3>
  {/* Divider Line */}
<div className="my-6 border-t border-black"></div>

      <div className="grid grid-cols-4 gap-4">
        {projects.map((p, i) => (
                 <button 
            key={i}
            className="text-left w-full py-2 border-b hover:text-brandGreen"
          >
            {p}
          </button>

        ))}
      </div>
    </div>
  );
}
