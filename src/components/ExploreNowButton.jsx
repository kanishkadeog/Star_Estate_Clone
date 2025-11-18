

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ExploreNowButton() {
  const [hover, setHover] = useState(false);

  return (
    <Link
      to="/tools"
      className="flex items-center gap-2 text-sm font-semibold transition-all duration-300"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? (
        <>
          <span className="text-brandGreen text-lg">→</span>
          <span className="text-green-800">Explore Now</span>
        </>
      ) : (
        <>
          <span className="text-gray-800">Explore Now</span>
          <span className="text-gray-800 text-lg">→</span>
        </>
      )}
    </Link>
  );
}

