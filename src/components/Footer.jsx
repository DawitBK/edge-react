import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0077B6] text-white py-12 mt-24">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
        <p>
          &copy; {new Date().getFullYear()} Edge Communication Technologies. All
          rights reserved.
        </p>
        <p>Designed with ❤️ by Edge Comm-Tech</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-[#00BFFF] transition">
            Facebook
          </a>
          <a href="#" className="hover:text-[#00BFFF] transition">
            LinkedIn
          </a>
          <a href="#" className="hover:text-[#00BFFF] transition">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
