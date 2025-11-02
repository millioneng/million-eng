import React from "react";
import Products from "../components/Products";
import bgImage from "../images/products_hero-section-banner.png"; // <-- replace with your actual image path

const ProductsPage = () => {
  return (
    <div className="mt-20">
      {/* Hero Section */}
      <div
        className="relative w-full h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Centered Text */}
        <h1 className="relative z-10 text-5xl font-bold text-white md:text-6xl">
          Products
        </h1>
      </div>

      {/* Products Section */}
      <Products />
    </div>
  );
};

export default ProductsPage;
