
import React from "react";

export default function CityDropdown() {
  const cities = [
    "Agra","Ahmedabad","Ayodhya","Bangalore","Chennai",
    "Delhi","Faridabad","Ghaziabad","Goa","Greater Noida",
    "Gurugram","Hyderabad","Jaipur","Kolkata","Lucknow",
    "Mathura","Mumbai","Noida","Pune"
  ];

  return (
    <div className="bg-white p-6 shadow-lg border w-[820px]">
<h3 className="font-bold">CITY</h3>
  {/* Divider Line */}
<div className="my-6 border-t border-black"></div>

      <div className="grid grid-cols-4 gap-4">
        {cities.map((c, i) => (
          <button 
            key={i}
            className="text-left w-full py-2 border-b hover:text-brandGreen"
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
