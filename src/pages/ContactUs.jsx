import React from "react";
import GetInTouch from "../components/GetInTouch";
import bgImage from "../images/products_hero-section-banner.jpg"; // <-- replace with your actual image path

const ContactUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Centered Text */}
        <h1 className="relative z-10 text-5xl font-bold text-white md:text-6xl">
          Contact Us
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10 font-sans">
        {/* Header Section */}
        <div className="text-center mb-10">
          <p className="text-logo-gold font-semibold text-lg">Our Branches</p>
          <h1 className="text-3xl font-bold text-gray-900">Contact Details</h1>
        </div>

        {/* Pakistan Office */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-10 border-b border-gray-300 pb-10 mb-10">
          {/* Left Side */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Pakistan Head Office
            </h2>

            <p className="font-semibold mb-1">Address:</p>
            <p className="text-gray-700 mb-3">
              Plot # 18, Sector 35-D, Near Edhi Center,
              <br />
              Korangi # , Karachi - Pakistan.
            </p>

            <p className="font-semibold mb-1">Phone:</p>
            <div className="flex flex-col mb-3 space-y-1">
              <a href="tel:+923168942389" className="text-black underline">
                +92 314 2265033
              </a>
              <a href="tel:+923482218215" className="text-black underline">
                +92 346 3697758
              </a>
            </div>

            <p className="font-semibold mb-1">Email:</p>
            <a
              href="mailto:sales@millioneng.com"
              className="text-black underline"
            >
              alvinlazarus97@gmail.com
            </a>
          </div>

          {/* Right Side - Map */}
          <div className="md:w-[100%]">
            <iframe
              title="Pakistan Head Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.621908872142!2d67.11251157507562!3d24.841236577938093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33a078b8c6ab7%3A0xaaa5a913e8c3b05c!2sKorangi%20No.%204%2C%20Karachi!5e0!3m2!1sen!2s!4v1709876543210!5m2!1sen!2s"
              className="w-full h-72 border rounded-lg shadow"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <GetInTouch />
    </div>
  );
};

export default ContactUs;
