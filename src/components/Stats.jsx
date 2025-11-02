import React from "react";

const statsData = [
  { number: "3+", label: "Years of Trusted Expertise" },
  { number: "49%", label: "Cost Savings for Clients Through Efficient Solutions" },
  { number: "20m", label: "Industrial Components Deployed Globally" },
  { number: "15k", label: "Satisfied Clients Across Industries" },
];

const Stats = () => {
  return (
    <section className="py-16 bg-logo-black text-logo-gold">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    {statsData.map((stat) => (
      <div key={stat.number} className="p-8 bg-logo-gold text-logo-black rounded-2xl text-center shadow-lg transition-all">
        <h3 className="text-3xl font-bold">{stat.number}</h3>
        <p className="mt-2">{stat.label}</p>
      </div>
    ))}
  </div>
</section>
  );
};

export default Stats;
