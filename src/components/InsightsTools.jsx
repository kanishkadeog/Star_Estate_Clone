

// -------------------------------

import React from "react";
import EMIcard from "./EMIcard";

import emiImg from "../assets/insightstools/emi.jpeg";
import valuationImg from "../assets/insightstools/valuation.jpeg";
import nriImg from "../assets/insightstools/nri.jpeg";
import realityImg from "../assets/insightstools/reality.jpeg";

export default function InsightsTools() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl text-center font-bold mb-6">Insights & Tools</h2>

      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6"> */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <EMIcard title="EMI Calculator" bgImage={emiImg} />
        <EMIcard title="Property Valuation" bgImage={valuationImg} />
        <EMIcard title="NRI Guidance" bgImage={nriImg} />
        <EMIcard title="Reality Check" bgImage={realityImg} />
      </div>
    </section>
  );
}
