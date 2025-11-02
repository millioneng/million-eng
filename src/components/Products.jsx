import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import images
import filterBagsImg from '../images/Filter Bag.png';
import filterCartridgesImg from '../images/Filter Cartridge.png';
import heatExchangerImg from '../images/PHE Heat Exchanger.png';
import dustCollectorImg from '../images/Dust Collector and Cage .png';
import filterHousingsImg from '../images/Filter Housing 1 .png';
import coolingTowerImg from '../images/Cooling Tower 3 .png';
import pressureLeafImg from '../images/Pressure Leaf Filter 8 .png';

const servicesData = [
  { image: filterBagsImg, title: "Filter Bags", description: "High-quality bags designed to efficiently capture solid particles and ensure clean air or liquid output." },
  { image: heatExchangerImg, title: "Plate Type Heat Exchangers", description: "Efficient heat exchangers utilizing thin plates to transfer heat between fluids in various applications." },
  { image: dustCollectorImg, title: "Dust Collector Bags", description: "Durable bags designed to filter dust and pollutants, ensuring a cleaner and safer environment." },
  { image: filterHousingsImg, title: "Filter Housings", description: "Robust housings that provide secure containment for filters in industrial and commercial systems." },
  { image: filterCartridgesImg, title: "Filter Cartridges", description: "Advanced cartridges engineered to remove fine contaminants and provide superior filtration performance." },
  { image: coolingTowerImg, title: "Cooling Tower", description: "Reliable cooling towers that dissipate heat from industrial systems into the atmosphere." },
  { image: pressureLeafImg, title: "Pressure Leaf Filter", description: "Highly efficient filters used for solid-liquid separation in various industrial processes." },
];

const ServiceCard = ({ image, title, description }) => (
  <div className="relative flex flex-col border-b-4 border-[#d4af37] justify-between h-full p-10 transition-all duration-300 bg-[#2d2d2d] rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1">
    <div className="mb-5 w-full">
      <img src={image} alt={title} className="w-full h-48 object-contain rounded-none" />
    </div>
    <h3 className="text-xl font-semibold text-[#d4af37] mb-3">{title}</h3>
    <p className="text-white mb-6 flex-grow">{description}</p>
    <a
      href="/contact-us"
      className="block w-1/2 px-6 py-2 bg-[#d4af37] text-black-700 font-semibold uppercase tracking-wider rounded-full text-sm hover:bg-[#c9a23a]"
    >
      Get a Quote
    </a>
  </div>
);

const Products = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <span className="text-brand-blue-700 font-semibold uppercase tracking-wider">Build Your Dream</span>
            <h2 className="mt-2 text-4xl font-bold text-logo-black">Quality Services</h2>
          </div>
          <button
            onClick={() => navigate("/products")}
            className="px-8 py-3 border border-logo-gold text-logo-gold hover:bg-logo-gold hover:text-logo-black rounded-full transition-all"
          >
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.title}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
