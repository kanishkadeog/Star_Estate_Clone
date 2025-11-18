

import React from "react";

export default function BuilderDropdown() {
  const builders = [
    "Ace","Adani Realty","Amrapali","Ashiana Housing","Assetz Property","ATS",
    "Birla Estate","BPTP","Brigade","Country Group","DLF","Elan Group","Eldeco",
    "Emaar India","Embassy Group","Experion","GAURS","Gulshan","Hero Realty",
    "IRA Realty","Jashn Realty","Kalpataru","Kolte Patil Developer",
    "Krisumi Corporation","L & T Realty","Laureate Buildwell","Lodha","M3M",
    "Mahagun Group","Mahima Group","Max Estates","Nikoo Homes","O P Chain",
    "Oberoi Realty","Omaxe Limited","Orion","Oro","Paras Buildtech",
    "Prateek Group","Prestige Group"
  ];

  return (
    <div className="bg-white p-6 shadow-lg border w-[820px]">
 <h3 className="font-bold">BUILDER</h3>
  {/* Divider Line */}
<div className="my-6 border-t border-black"></div>
     
      <div className="grid grid-cols-4 gap-4">
        {builders.map((b, i) => (
           <button 
            key={i}
            className="text-left w-full py-2 border-b hover:text-brandGreen"
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
}
