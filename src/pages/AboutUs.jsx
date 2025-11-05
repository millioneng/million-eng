import React from 'react';
import { Helmet } from "react-helmet-async";
import bgImage from "../images/products_hero-section-banner.png"; // <-- replace with your actual image path
import { FaUsers, FaHistory, FaChartLine } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="mt-20">
      {/* ✅ Dynamic Page Title */}
      <Helmet>
        <title>Million Engineering | About Us</title>
        <meta
          name="description"
          content="Explore Million Engineering’s range of high-performance filtration systems, heat exchangers, and industrial solutions built for efficiency and reliability."
        />
      </Helmet>
      {/* Hero Section */}
      <div
        className="relative w-full h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Centered Text */}
        <h1 className="relative z-10 text-5xl font-bold text-white md:text-6xl">
          About Us
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-12 px-8 lg:px-20 py-14 text-gray-800 leading-relaxed font-sans">
      {/* LEFT SECTION */}
      <div className="flex-1">
        <h5 className="text-logo-gold font-semibold mb-2 text-[16px]">
          About Us
        </h5>
        <h1 className="text-3xl lg:text-4xl font-bold mb-8 leading-snug">
          We Are a Leading Global Engineering Company
        </h1>

        {/* WHO WE ARE */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Who We Are</h3>
          <p className="text-[15px] text-gray-600">
            We are a trusted provider of top-tier industrial filtration solutions, catering to industries that demand precision, reliability, and efficiency. With extensive expertise, we offer a comprehensive range of filter bags, cartridges, and housings to ensure clean, consistent, and cost-effective operations.
          </p>
        </section>

        {/* OUR MISSION */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
          <p className="text-[15px] text-gray-600">
            To provide innovative, durable, and high-performance filtration products that enable industries to operate cleaner, reduce waste, and enhance equipment longevity.
          </p>
        </section>

        {/* WHAT WE DO */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">What We Do</h3>
          <p className="text-[15px] text-gray-600">
            Deliver premium-grade liquid filter bags, cartridges, and housings. Offer tailored filtration solutions for diverse industrial needs. Provide expert consultation to help clients choose the best filtration systems for their applications.
          </p>
        </section>

        {/* INDUSTRIES WE SERVE */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Industries We Serve</h3>
          <ul className="list-disc list-inside text-[15px] text-gray-600 space-y-1">
            <li>Food & Beverage</li>
            <li>Chemicals & Petrochemicals</li>
            <li>Oil & Lubricants</li>
            <li>Water Treatment Plants</li>
            <li>Pharmaceuticals & Healthcare</li>
          </ul>
        </section>

        {/* WHY CHOOSE US */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Why Choose Us</h3>
          <ul className="list-disc list-inside text-[15px] text-gray-600 space-y-1">
            <li>
              Over 90% of our focus is on liquid filtration, ensuring unparalleled expertise.
            </li>
            <li>
              Premium materials with rigorous quality assurance processes.
            </li>
            <li>Competitive pricing with prompt delivery services.</li>
            <li>
              Dedicated support for technical guidance and after-sales service.
            </li>
          </ul>
        </section>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex-1 flex flex-col gap-6 lg:gap-8">
        <div className="bg-gray-100 p-6 rounded-md shadow-sm">
          <FaUsers className="text-2xl text-[#d4af37] mb-2" />
          <h4 className="font-semibold text-lg mb-1">Building Staffs</h4>
          <p className="text-[14.5px] text-gray-600">
            Empowering skilled teams to deliver seamless filtration operations and exceptional product quality.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-md shadow-sm">
          <FaHistory className="text-2xl text-[#d4af37] mb-2" />
          <h4 className="font-semibold text-lg mb-1">History Emphasis</h4>
          <p className="text-[14.5px] text-gray-600">
            Years of expertise in providing advanced filtration solutions for industries worldwide.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-md shadow-sm">
          <FaChartLine className="text-2xl text-[#d4af37] mb-2" />
          <h4 className="font-semibold text-lg mb-1">Economic Outcomes</h4>
          <p className="text-[14.5px] text-gray-600">
            Lowering operational costs through efficient filtration, extending liquid life, and minimizing waste.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;