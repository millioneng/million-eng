import React from "react";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ali Raza",
      role: "Operations Manager, Prime Steel Pvt. Ltd.",
      category: "Filtration Solutions for Steel",
      feedback:
        "Million Engineering provided exceptional filtration solutions that significantly improved our plant efficiency. Their team is highly professional and delivers on time.",
    },
    {
      name: "Fatima Khan",
      role: "Procurement Head, ChemTech Industries",
      category: "Custom Fabrication for Chemical",
      feedback:
        "From design to delivery, the experience was seamless. Their custom filter housings have reduced downtime and enhanced production quality.",
    },
    {
      name: "Muhammad Usman",
      role: "Project Engineer, EnergyCorp Pakistan",
      category: "Engineering for Energy Sector",
      feedback:
        "We’ve worked with Million Engineering for over three years, and their consistency, innovation, and reliability are unmatched in the industry.",
    },
    {
      name: "Zeeshan Ahmad",
      role: "Maintenance Lead, PetroTech Pvt. Ltd.",
      category: "Maintenance & Process Optimization",
      feedback:
        "Their technical expertise and dedication to safety have made a significant impact on our operations. Highly recommended!",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-6 mx-auto max-w-screen-xl lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-lg font-semibold text-[#d4af37]">
            What Our Clients Say
          </p>
          <h2 className="text-4xl font-bold text-black lg:text-5xl">
            Testimonials
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="relative flex flex-col border-b-4 border-[#d4af37] justify-between h-full p-10 transition-all duration-300 bg-[#2d2d2d] rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              {/* Decorative Quote Icon */}
              <Quote className="absolute w-20 h-20 text-[#d4af37]/15 top-6 right-6" />

              {/* Category */}
              <p className="mb-3 text-sm font-semibold text-[#d4af37] uppercase tracking-wide">
                {t.category}
              </p>

              {/* Testimonial Feedback */}
              <p className="flex-grow mb-6 text-lg italic leading-relaxed text-white">
                “{t.feedback}”
              </p>

              {/* Author / Role */}
              <p className="text-sm font-semibold text-[#d4af37] uppercase tracking-wide">
                - {t.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
