import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-40 pb-24 bg-gradient-to-r from-[#0077B6] via-[#00BFFF] to-[#00eaff] text-white text-center relative overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 className="font-orbitron text-5xl md:text-7xl font-extrabold mb-8 drop-shadow-lg">
          Edge Communication Technologies
        </h1>
        <p className="text-2xl md:text-3xl mb-10 font-medium tracking-wide">
          <span className="bg-white/10 px-4 py-2 rounded-xl shadow-lg">
            Innovative IT & Communication Solutions for Ethiopia’s Growth.
          </span>
        </p>
        <a
          href="#services"
          className="inline-block bg-gradient-to-r from-[#00BFFF] to-[#0077B6] text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 transition transform duration-200 text-xl"
        >
          Explore Our Services
        </a>
      </div>
    </section>
  );
};

export default Hero;
