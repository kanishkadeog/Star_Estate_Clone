

// ==================
//proper the things just imageb not fit properly 

import React from "react";
import ExploreNowButton from "./ExploreNowButton";

export default function EMIcard({ title, bgImage, to = "/tools" }) {
  return (
    <div
      className="h-56 text-center p-6 shadow rounded relative flex flex-col justify-between 
                 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >

      {/* TITLE */}
      <h3 className="whitespace-nowrap font-semibold text-lg relative z-10 mt-4">{title}</h3>

      {/* FULL-WIDTH TRANSPARENT BAR WITH BUTTON */}
      <div
        className="h-10 absolute bottom-0 left-0 w-full py-3 
                   bg-white/20 backdrop-blur-sm 
                   flex justify-center items-center z-10"
      >
        <ExploreNowButton />
      </div>
    </div>
  );
}


//--------------