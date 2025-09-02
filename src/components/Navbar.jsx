import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur shadow-lg z-50">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-6 md:px-16 py-4">
        <div className="flex items-center space-x-3">
          <a href="#home">
            <img src="./edge.png" alt="Edge Logo" className="h-14 w-auto" />
          </a>
          <span className="font-orbitron text-3xl md:text-4xl font-extrabold text-[#0077B6] tracking-wide">
            EDGE COMM-TECH
          </span>
        </div>
        <nav className="hidden md:flex space-x-10 text-lg font-semibold">
          <a href="#home" className="hover:text-[#00BFFF] transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-[#00BFFF] transition-colors">
            About
          </a>
          <a
            href="#services"
            className="hover:text-[#00BFFF] transition-colors"
          >
            Services
          </a>
          <a
            href="#solutions"
            className="hover:text-[#00BFFF] transition-colors"
          >
            Solutions
          </a>
          <a
            href="#partners"
            className="hover:text-[#00BFFF] transition-colors"
          >
            Partners
          </a>
          <a href="#clients" className="hover:text-[#00BFFF] transition-colors">
            Clients
          </a>
          <a href="#contact" className="hover:text-[#00BFFF] transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
