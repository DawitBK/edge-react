// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-[#0077B6] text-white py-12 mt-24">
//       <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
//         <p>
//           &copy; {new Date().getFullYear()} Edge Communication Technologies. All
//           rights reserved.
//         </p>
//         <p>Designed with ❤️ by Edge Comm-Tech</p>
//         <div className="flex justify-center space-x-6">
//           <a href="#" className="hover:text-[#00BFFF] transition">
//             Facebook
//           </a>
//           <a href="#" className="hover:text-[#00BFFF] transition">
//             LinkedIn
//           </a>
//           <a href="#" className="hover:text-[#00BFFF] transition">
//             Twitter
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0077B6] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* About */}
        <div className="bg-white/90 p-6 rounded-2xl text-gray-800 shadow-lg flex flex-col items-center">
          <img src="./edge.png" alt="Edge logo" className="h-16 mb-4" />
          <span className="font-orbitron text-xl font-bold text-[#0077B6]">
            EDGE COMM-TECH
          </span>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Edge Communication Technologies
          </h3>
          <p className="text-lg">
            We maintain a specialized team of experts to advise, implement, and
            manage all aspects of communication and information technology.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
          <p className="text-lg mb-2">
            📍 Addis Ababa, Bole Emperial BMA Plaza, 9th Floor.
          </p>
          <p className="text-sm mb-2">📞 +251 92 255 5055</p>
          <p className="text-sm mb-2">📞 +251 91 153 8809</p>
          <p className="text-sm mb-2">✉️ info@edgecomm-tech.com</p>
          <p className="text-sm mb-2">✉️ sales@edgecomm-tech.com</p>
          <p className="text-sm mb-2">✉️ support@edgecomm-tech.com</p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Our Services</h3>
          <ul className="text-lg space-y-2">
            <li>Voice / Data / Internet Services</li>
            <li>Datacenter Facility</li>
            <li>Networks (LAN/WLAN)</li>
            <li>Unified Communications</li>
            <li>IT Service / Desktop Support</li>
            <li>Professional Services</li>
            <li>NOC and SOC Services</li>
            <li>Cybersecurity</li>
            <li>CCTV and Physical Security</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Edge Communication Technologies. All
          Rights Reserved.
        </p>
        <p>Powered by Edge Communication Technologies</p>
      </div>
    </footer>
  );
};

export default Footer;
