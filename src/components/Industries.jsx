import React from 'react';

// Import images
import chemicalImg from '../images/Chemical_Processing.png';
import powerPlantsImg from '../images/Power_Plant.png';
import sugarImg from '../images/Sugar_Distilleries.png';
import foodImg from '../images/Food_Beverages.png';
import cementImg from '../images/Cement_Industriess.png';
import oilGasImg from '../images/Oil-Gas.png';
import pharmaImg from '../images/Pharmaceutical.png';

const industriesData = [
  { image: chemicalImg, name: "Chemical Processing" },
  { image: powerPlantsImg, name: "Power Plants" },
  { image: sugarImg, name: "Sugar & Distilleries" },
  { image: oilGasImg, name: "Oil & Gas" },
  { image: foodImg, name: "Food & Beverages" },
  { image: cementImg, name: "Cement Industry" },
  { image: pharmaImg, name: "Pharmaceutical Industry" },
];

const Industries = () => (
  <section className="py-16 bg-logo-black text-logo-gold">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Heading and paragraph */}
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Our Expertise</h2>
          <p className="mt-4 text-lg text-brand-blue-100">We deliver tailored solutions for a wide range of industries, including energy, oil & gas, healthcare, food production, and more. Our services ensure optimal performance and unmatched quality for every sector.</p>
        </div>
        
        {/* Right side - Industry cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {industriesData.map((industry) => (
            <div key={industry.name} className="bg-logo-gray text-logo-black rounded-lg p-4 shadow-md hover:bg-logo-gold hover:text-logo-black transition-all">
              <div className="mb-3 w-full">
                <img src={industry.image} alt={industry.name} className="rounded-md mb-2" />
              </div>
              <span className="font-semibold text-center">{industry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Industries;
