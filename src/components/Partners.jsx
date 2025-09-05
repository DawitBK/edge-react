// import React from "react";

// const Partners = () => {
//   const partners = [
//     "https://logo.clearbit.com/huawei.com",
//     "https://logo.clearbit.com/paloaltonetworks.com",
//     "./eaton.jpg",
//     "https://logo.clearbit.com/vertiv.com",
//     "https://logo.clearbit.com/canovate.com",
//     "https://logo.clearbit.com/cisco.com",
//     "https://logo.clearbit.com/dell.com",
//     "https://logo.clearbit.com/hp.com",
//   ];

//   return (
//     <section
//       id="partners"
//       className="py-32 bg-gradient-to-br from-[#e0f7fa] to-[#f8fafc]"
//     >
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <h2 className="font-orbitron text-5xl font-extrabold mb-16 text-[#0077B6]">
//           Our Partners
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
//           {partners.map((p, idx) => (
//             <img
//               key={idx}
//               src={p}
//               alt="Partner"
//               className="mx-auto h-24 grayscale hover:grayscale-0 transition"
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partners;

// import React from "react";
// import { motion } from "framer-motion";

// const Partners = () => {
//   const partners = [
//     "https://logo.clearbit.com/huawei.com",
//     "https://logo.clearbit.com/paloaltonetworks.com",
//     "./eaton.jpg",
//     "https://logo.clearbit.com/vertiv.com",
//     "https://logo.clearbit.com/canovate.com",
//     "https://logo.clearbit.com/cisco.com",
//     "https://logo.clearbit.com/dell.com",
//     "https://logo.clearbit.com/hp.com",
//   ];

//   // animation variants
//   const container = {
//     hidden: { opacity: 0, scale: 0.2 }, // start dense and tiny
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         delayChildren: 0.2,
//         staggerChildren: 0.15, // logos pop out one by one
//       },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, scale: 0.1, y: 0 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 120, damping: 12 },
//     },
//   };

//   return (
//     <section
//       id="partners"
//       className="py-32 bg-gradient-to-br from-[#e0f7fa] to-[#f8fafc]"
//     >
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <h2 className="font-orbitron text-5xl font-extrabold mb-16 text-[#0077B6]">
//           Our Partners
//         </h2>

//         <motion.div
//           className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center"
//           variants={container}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           {partners.map((p, idx) => (
//             <motion.img
//               key={idx}
//               src={p}
//               alt="Partner"
//               className="mx-auto h-24 hover:grayscale-0 transition"
//               variants={item}
//             />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Partners;

// import React from "react";
// import { motion } from "framer-motion";

// const Partners = () => {
//   const partners = [
//     "https://logo.clearbit.com/huawei.com",
//     "https://logo.clearbit.com/paloaltonetworks.com",
//     "./eaton.jpg",
//     "https://mma.prnewswire.com/media/2660251/Vertiv_Corporation_Logo.jpg",
//     "https://logo.clearbit.com/canovate.com",
//     "https://logo.clearbit.com/cisco.com",
//     "https://logo.clearbit.com/dell.com",
//     "https://logo.clearbit.com/hp.com",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRgGia_yNuXVefpRpZZXFdb-7KatK6JDbDA&s",
//     "https://interworks.com/wp-content/uploads/2017/09/Aruba.png",
//     "https://upload.wikimedia.org/wikipedia/commons/4/47/Broadcom_logo_%281991-2016%29.svg",
//     "https://www.intel.com/content/dam/www/central-libraries/us/en/images/2024-05/logo-microsoft-transparent-bg-rwd.png",
//     "https://logos-world.net/wp-content/uploads/2023/01/Hikvision-Logo.png",
//     "https://allvoice.pl/wp-content/uploads/mitel-1024x512-20200225.png",
//     "https://www.hkftradeco.ir/wp-content/uploads/2023/11/kstar-icon.png",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgajSWxWGkJg0W98ewskn86o4CbSYjh8_7Dw&s",
//     "https://interworks.com/wp-content/uploads/2017/09/Sophos-ATC-LogoSQ.png",
//     "https://logos-world.net/wp-content/uploads/2020/11/Logitech-Symbol.png",
//     "https://resilienceforward.com/wp-content/uploads/2024/04/veeam.webp",
//     "https://cybersecurity-excellence-awards.com/wp-content/uploads/2020/07/922390.png",
//     "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo-1995-Present.png",
//     "https://marvel-b1-cdn.bc0a.com/f00000000270502/s19538.pcdn.co/wp-content/uploads/2018/02/Cummins-Logo.jpg",
//     "https://pcper.com/wp-content/uploads/2024/02/logo-fortinet.png",
//     "https://logos-world.net/wp-content/uploads/2023/03/Barracuda-Networks-Logo.png",
//     "https://download.logo.wine/logo/Hewlett_Packard_Enterprise/Hewlett_Packard_Enterprise-Logo.wine.png",
//     "https://cpl.thalesgroup.com/sites/default/files/partner-logo/nutanix-tech-partner-logo.png",
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Lenovo_Global_Corporate_Logo.png/1280px-Lenovo_Global_Corporate_Logo.png",
//   ];

//   // animation variants
//   const container = {
//     hidden: { opacity: 0, scale: 0.2 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         delayChildren: 0.2,
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, scale: 0.1 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { type: "spring", stiffness: 120, damping: 12 },
//     },
//   };

//   return (
//     <section
//       id="partners"
//       className="py-32 bg-gradient-to-br from-[#e0f7fa] to-[#f8fafc]"
//     >
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <h2 className="font-orbitron text-5xl font-extrabold mb-16 text-[#0077B6]">
//           Our Partners
//         </h2>
//         <motion.div
//           className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center"
//           variants={container}
//           initial="hidden"
//           animate="visible"
//         >
//           {partners.map((p, idx) => (
//             <motion.img
//               key={idx}
//               src={p}
//               alt="Partner"
//               className="mx-auto h-24 hover:grayscale-0 transition"
//               variants={item}
//             />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Partners;

// import React from "react";
// import { motion } from "framer-motion";

// const Partners = () => {
//   const partners = [
//     "https://logo.clearbit.com/huawei.com",
//     "https://logo.clearbit.com/paloaltonetworks.com",
//     "./eaton.jpg",
//     "https://mma.prnewswire.com/media/2660251/Vertiv_Corporation_Logo.jpg",
//     "https://logo.clearbit.com/canovate.com",
//     "https://logo.clearbit.com/cisco.com",
//     "https://logo.clearbit.com/dell.com",
//     "https://logo.clearbit.com/hp.com",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRgGia_yNuXVefpRpZZXFdb-7KatK6JDbDA&s",
//     "https://interworks.com/wp-content/uploads/2017/09/Aruba.png",
//     "https://upload.wikimedia.org/wikipedia/commons/4/47/Broadcom_logo_%281991-2016%29.svg",
//     "https://www.intel.com/content/dam/www/central-libraries/us/en/images/2024-05/logo-microsoft-transparent-bg-rwd.png",
//     "https://logos-world.net/wp-content/uploads/2023/01/Hikvision-Logo.png",
//     "https://allvoice.pl/wp-content/uploads/mitel-1024x512-20200225.png",
//     "https://www.hkftradeco.ir/wp-content/uploads/2023/11/kstar-icon.png",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgajSWxWGkJg0W98ewskn86o4CbSYjh8_7Dw&s",
//     "https://interworks.com/wp-content/uploads/2017/09/Sophos-ATC-LogoSQ.png",
//     "https://logos-world.net/wp-content/uploads/2020/11/Logitech-Symbol.png",
//     "https://resilienceforward.com/wp-content/uploads/2024/04/veeam.webp",
//     "https://cybersecurity-excellence-awards.com/wp-content/uploads/2020/07/922390.png",
//     "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo-1995-Present.png",
//     "https://marvel-b1-cdn.bc0a.com/f00000000270502/s19538.pcdn.co/wp-content/uploads/2018/02/Cummins-Logo.jpg",
//     "https://pcper.com/wp-content/uploads/2024/02/logo-fortinet.png",
//     "https://logos-world.net/wp-content/uploads/2023/03/Barracuda-Networks-Logo.png",
//     "https://download.logo.wine/logo/Hewlett_Packard_Enterprise/Hewlett_Packard_Enterprise-Logo.wine.png",
//     "https://cpl.thalesgroup.com/sites/default/files/partner-logo/nutanix-tech-partner-logo.png",
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Lenovo_Global_Corporate_Logo.png/1280px-Lenovo_Global_Corporate_Logo.png",
//   ];

//   // Define concentric circles
//   const radiusStep = 120;
//   const circles = [
//     { count: 3, radius: radiusStep },
//     { count: 6, radius: radiusStep * 2 },
//     { count: 10, radius: radiusStep * 3 },
//     { count: 12, radius: radiusStep * 4 },
//   ];

//   // Assign positions
//   let arranged = [];
//   let idx = 0;
//   for (let c of circles) {
//     for (let i = 0; i < c.count && idx < partners.length; i++) {
//       const angle = (i / c.count) * 2 * Math.PI;
//       arranged.push({
//         src: partners[idx],
//         x: Math.cos(angle) * c.radius,
//         y: Math.sin(angle) * c.radius,
//       });
//       idx++;
//     }
//   }

//   return (
//     <section
//       id="partners"
//       className="py-32 bg-gradient-to-br from-[#e0f7fa] to-[#f8fafc] relative overflow-hidden"
//     >
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         {/* Heading */}
//         <h2 className="font-orbitron text-5xl font-extrabold mb-16 text-[#0077B6]">
//           Our Partners
//         </h2>

//         {/* Logos container */}
//         <div className="w-full h-[300px] flex justify-center items-center">
//           {arranged.map((p, i) => (
//             <motion.img
//               key={i}
//               src={p.src}
//               alt="Partner"
//               initial={{ y: 800, opacity: 0, scale: 0.1 }}
//               animate={{
//                 x: p.x,
//                 y: p.y,
//                 opacity: 1,
//                 scale: 1,
//               }}
//               transition={{
//                 duration: 2.5,
//                 delay: i * 0.15,
//                 ease: "easeOut",
//                 type: "spring",
//                 stiffness: 80,
//                 damping: 18,
//               }}
//               className="absolute w-20 h-20 object-contain rounded-full bg-white p-2 shadow-lg"
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partners;

import React from "react";
import { motion } from "framer-motion";

const Partners = () => {
  const partners = [
    "https://logo.clearbit.com/huawei.com",
    "https://logo.clearbit.com/paloaltonetworks.com",
    "./eaton.jpg",
    "https://mma.prnewswire.com/media/2660251/Vertiv_Corporation_Logo.jpg",
    "https://logo.clearbit.com/canovate.com",
    "https://logo.clearbit.com/cisco.com",
    "https://logo.clearbit.com/dell.com",
    "https://logo.clearbit.com/hp.com",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRgGia_yNuXVefpRpZZXFdb-7KatK6JDbDA&s",
    "https://interworks.com/wp-content/uploads/2017/09/Aruba.png",
    "https://upload.wikimedia.org/wikipedia/commons/4/47/Broadcom_logo_%281991-2016%29.svg",
    "https://www.intel.com/content/dam/www/central-libraries/us/en/images/2024-05/logo-microsoft-transparent-bg-rwd.png",
    "https://logos-world.net/wp-content/uploads/2023/01/Hikvision-Logo.png",
    "https://allvoice.pl/wp-content/uploads/mitel-1024x512-20200225.png",
    "https://www.hkftradeco.ir/wp-content/uploads/2023/11/kstar-icon.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgajSWxWGkJg0W98ewskn86o4CbSYjh8_7Dw&s",
    "https://interworks.com/wp-content/uploads/2017/09/Sophos-ATC-LogoSQ.png",
    "https://logos-world.net/wp-content/uploads/2020/11/Logitech-Symbol.png",
    "https://resilienceforward.com/wp-content/uploads/2024/04/veeam.webp",
    "https://cybersecurity-excellence-awards.com/wp-content/uploads/2020/07/922390.png",
    "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo-1995-Present.png",
    "https://marvel-b1-cdn.bc0a.com/f00000000270502/s19538.pcdn.co/wp-content/uploads/2018/02/Cummins-Logo.jpg",
    "https://pcper.com/wp-content/uploads/2024/02/logo-fortinet.png",
    "https://logos-world.net/wp-content/uploads/2023/03/Barracuda-Networks-Logo.png",
    "https://download.logo.wine/logo/Hewlett_Packard_Enterprise/Hewlett_Packard_Enterprise-Logo.wine.png",
    "https://cpl.thalesgroup.com/sites/default/files/partner-logo/nutanix-tech-partner-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Lenovo_Global_Corporate_Logo.png/1280px-Lenovo_Global_Corporate_Logo.png",
  ];

  // Split logos into circles
  const circles = [
    { radius: 150, count: 6 }, // inner
    { radius: 280, count: 10 }, // middle
    { radius: 420, count: 11 }, // outer (remaining)
  ];

  let arranged = [];
  let idx = 0;

  for (let c of circles) {
    for (let i = 0; i < c.count && idx < partners.length; i++) {
      const angle = (i / c.count) * 2 * Math.PI;
      arranged.push({
        src: partners[idx],
        radius: c.radius,
        angle,
      });
      idx++;
    }
  }

  return (
    <section
      id="partners"
      className="py-32 bg-gradient-to-br from-[#e0f7fa] to-[#f8fafc]"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="font-orbitron text-5xl font-extrabold mb-16 text-[#0077B6]">
          Our Partners
        </h2>

        {/* Orbit Container */}
        <div className="relative w-[800px] h-[800px] mx-auto">
          <motion.div
            className="absolute w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
          >
            {arranged.map((p, i) => {
              const center = 400; // half of container (800/2)
              const x = Math.cos(p.angle) * p.radius + center - 56; // offset by half logo
              const y = Math.sin(p.angle) * p.radius + center - 56;

              return (
                <img
                  key={i}
                  src={p.src}
                  alt="Partner"
                  className="absolute w-28 h-28 object-contain bg-white rounded-full p-2 shadow-md"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                  }}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

// import React from "react";
// import { motion } from "framer-motion";

// const Partners = () => {
//   const partners = [
//     "https://logo.clearbit.com/huawei.com",
//     "https://logo.clearbit.com/paloaltonetworks.com",
//     "./eaton.jpg",
//     "https://mma.prnewswire.com/media/2660251/Vertiv_Corporation_Logo.jpg",
//     "https://logo.clearbit.com/canovate.com",
//     "https://logo.clearbit.com/cisco.com",
//     "https://logo.clearbit.com/dell.com",
//     "https://logo.clearbit.com/hp.com",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRgGia_yNuXVefpRpZZXFdb-7KatK6JDbDA&s",
//     "https://interworks.com/wp-content/uploads/2017/09/Aruba.png",
//     "https://upload.wikimedia.org/wikipedia/commons/4/47/Broadcom_logo_%281991-2016%29.svg",
//     "https://www.intel.com/content/dam/www/central-libraries/us/en/images/2024-05/logo-microsoft-transparent-bg-rwd.png",
//     "https://logos-world.net/wp-content/uploads/2023/01/Hikvision-Logo.png",
//     "https://allvoice.pl/wp-content/uploads/mitel-1024x512-20200225.png",
//     "https://www.hkftradeco.ir/wp-content/uploads/2023/11/kstar-icon.png",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgajSWxWGkJg0W98ewskn86o4CbSYjh8_7Dw&s",
//     "https://interworks.com/wp-content/uploads/2017/09/Sophos-ATC-LogoSQ.png",
//     "https://logos-world.net/wp-content/uploads/2020/11/Logitech-Symbol.png",
//     "https://resilienceforward.com/wp-content/uploads/2024/04/veeam.webp",
//     "https://cybersecurity-excellence-awards.com/wp-content/uploads/2020/07/922390.png",
//     "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo-1995-Present.png",
//     "https://marvel-b1-cdn.bc0a.com/f00000000270502/s19538.pcdn.co/wp-content/uploads/2018/02/Cummins-Logo.jpg",
//     "https://pcper.com/wp-content/uploads/2024/02/logo-fortinet.png",
//     "https://logos-world.net/wp-content/uploads/2023/03/Barracuda-Networks-Logo.png",
//     "https://download.logo.wine/logo/Hewlett_Packard_Enterprise/Hewlett_Packard_Enterprise-Logo.wine.png",
//     "https://cpl.thalesgroup.com/sites/default/files/partner-logo/nutanix-tech-partner-logo.png",
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Lenovo_Global_Corporate_Logo.png/1280px-Lenovo_Global_Corporate_Logo.png",
//   ];

//   // Define concentric circles
//   const radiusStep = 120; // distance between arcs
//   const circles = [
//     { count: 3, radius: radiusStep },
//     { count: 6, radius: radiusStep * 2 },
//     { count: 10, radius: radiusStep * 3 },
//     { count: 12, radius: radiusStep * 4 },
//   ];

//   // Assign positions
//   let arranged = [];
//   let idx = 0;
//   for (let c of circles) {
//     for (let i = 0; i < c.count && idx < partners.length; i++) {
//       const angle = (i / c.count) * 2 * Math.PI; // radians
//       arranged.push({
//         src: partners[idx],
//         x: Math.cos(angle) * c.radius,
//         y: Math.sin(angle) * c.radius,
//       });
//       idx++;
//     }
//   }

//   return (
//     <section
//       id="partners"
//       className="py-32 bg-gradient-to-br from-[#e0f7fa] to-[#f8fafc] relative overflow-hidden"
//     >
//       <div className="max-w-6xl mx-auto px-6 text-center h-[700px]">
//         <h2
//           className="font-orbitron text-5xl font-extrabold mb-16 text-[#0077B6]
//         "
//         >
//           Our Partners
//         </h2>

//         <div className="relative w-full h-[300px] flex justify-center items-center">
//           {arranged.map((p, i) => (
//             <motion.img
//               key={i}
//               src={p.src}
//               alt="Partner"
//               initial={{ y: 600, opacity: 0, scale: 0.2 }} // start below viewport
//               animate={{
//                 x: p.x,
//                 y: p.y,
//                 opacity: 1,
//                 scale: 1,
//               }}
//               transition={{
//                 duration: 2.5, // slower movement
//                 delay: i * 0.15, // staggered appearance
//                 ease: "easeOut", // smooth easing
//                 type: "spring",
//                 stiffness: 80,
//                 damping: 18,
//               }}
//               className="absolute w-20 h-20 object-contain rounded-full bg-white p-2 shadow-lg"
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partners;

// import React from "react";
// import { motion } from "framer-motion";

// const Partners = () => {
//   const partners = [
//     "https://logo.clearbit.com/huawei.com",
//     "https://logo.clearbit.com/paloaltonetworks.com",
//     "./eaton.jpg",
//     "https://mma.prnewswire.com/media/2660251/Vertiv_Corporation_Logo.jpg",
//     "https://logo.clearbit.com/canovate.com",
//     "https://logo.clearbit.com/cisco.com",
//     "https://logo.clearbit.com/dell.com",
//     "https://logo.clearbit.com/hp.com",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRgGia_yNuXVefpRpZZXFdb-7KatK6JDbDA&s",
//     "https://interworks.com/wp-content/uploads/2017/09/Aruba.png",
//     "https://upload.wikimedia.org/wikipedia/commons/4/47/Broadcom_logo_%281991-2016%29.svg",
//     "https://www.intel.com/content/dam/www/central-libraries/us/en/images/2024-05/logo-microsoft-transparent-bg-rwd.png",
//     "https://logos-world.net/wp-content/uploads/2023/01/Hikvision-Logo.png",
//     "https://allvoice.pl/wp-content/uploads/mitel-1024x512-20200225.png",
//     "https://www.hkftradeco.ir/wp-content/uploads/2023/11/kstar-icon.png",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgajSWxWGkJg0W98ewskn86o4CbSYjh8_7Dw&s",
//     "https://interworks.com/wp-content/uploads/2017/09/Sophos-ATC-LogoSQ.png",
//     "https://logos-world.net/wp-content/uploads/2020/11/Logitech-Symbol.png",
//     "https://resilienceforward.com/wp-content/uploads/2024/04/veeam.webp",
//     "https://cybersecurity-excellence-awards.com/wp-content/uploads/2020/07/922390.png",
//     "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo-1995-Present.png",
//     "https://marvel-b1-cdn.bc0a.com/f00000000270502/s19538.pcdn.co/wp-content/uploads/2018/02/Cummins-Logo.jpg",
//     "https://pcper.com/wp-content/uploads/2024/02/logo-fortinet.png",
//     "https://logos-world.net/wp-content/uploads/2023/03/Barracuda-Networks-Logo.png",
//     "https://download.logo.wine/logo/Hewlett_Packard_Enterprise/Hewlett_Packard_Enterprise-Logo.wine.png",
//     "https://cpl.thalesgroup.com/sites/default/files/partner-logo/nutanix-tech-partner-logo.png",
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Lenovo_Global_Corporate_Logo.png/1280px-Lenovo_Global_Corporate_Logo.png",
//   ];

//   // Calculate circular positions
//   const radiusStep = 120; // distance between concentric circles
//   const circles = [
//     { count: 3, radius: radiusStep },
//     { count: 6, radius: radiusStep * 2 },
//     { count: 10, radius: radiusStep * 3 },
//     { count: 12, radius: radiusStep * 4 },
//   ];

//   // Assign logos into concentric circles
//   let arranged = [];
//   let idx = 0;
//   for (let c of circles) {
//     for (let i = 0; i < c.count && idx < partners.length; i++) {
//       const angle = (i / c.count) * 2 * Math.PI; // radians
//       arranged.push({
//         src: partners[idx],
//         x: Math.cos(angle) * c.radius,
//         y: Math.sin(angle) * c.radius,
//       });
//       idx++;
//     }
//   }

//   return (
//     <section
//       id="partners"
//       className="py-32 bg-gradient-to-br from-[#e0f7fa] to-[#f8fafc] relative overflow-hidden"
//     >
//       <div className="max-w-6xl mx-auto px-6 text-center relative h-[700px]">
//         <h2 className="font-orbitron text-5xl font-extrabold mb-16 text-[#0077B6]">
//           Our Partners
//         </h2>

//         {/* Center container */}
//         <div className="relative w-full h-[600px] flex justify-center items-center">
//           {arranged.map((p, i) => (
//             <motion.img
//               key={i}
//               src={p.src}
//               alt="Partner"
//               initial={{ y: 800, opacity: 0, scale: 0.2 }} // from bottom
//               animate={{
//                 x: p.x,
//                 y: p.y,
//                 opacity: 1,
//                 scale: 1,
//                 rotate: 360, // clockwise rotation during entry
//               }}
//               transition={{
//                 duration: 1.5,
//                 delay: i * 0.1,
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 15,
//               }}
//               className="absolute w-20 h-20 object-contain rounded-full bg-white p-2 shadow-lg"
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partners;

// import React from "react";
// import { motion } from "framer-motion";

// const Partners = () => {
//   const partners = [
//     "https://logo.clearbit.com/huawei.com",
//     "https://logo.clearbit.com/paloaltonetworks.com",
//     "./eaton.jpg",
//     "https://logo.clearbit.com/vertiv.com",
//     "https://logo.clearbit.com/canovate.com",
//     "https://logo.clearbit.com/cisco.com",
//     "https://logo.clearbit.com/dell.com",
//     "https://logo.clearbit.com/hp.com",
//   ];

//   // Animation variant for each logo
//   const item = {
//     hidden: { opacity: 0, scale: 0.1, x: 0, y: 0 },
//     visible: (i) => {
//       const radius = 200; // distance from center
//       const angle = (i / partners.length) * 2 * Math.PI;
//       return {
//         opacity: 1,
//         scale: 1,
//         x: Math.cos(angle) * radius,
//         y: Math.sin(angle) * radius,
//         transition: {
//           type: "spring",
//           stiffness: 100,
//           damping: 12,
//         },
//       };
//     },
//   };

//   return (
//     <section
//       id="partners"
//       className="py-32 bg-gradient-to-br from-[#e0f7fa] to-[#f8fafc]"
//     >
//       <div className="max-w-6xl mx-auto px-6 text-center relative">
//         <h2 className="font-orbitron text-5xl font-extrabold mb-24 text-[#0077B6]">
//           Our Partners
//         </h2>

//         {/* circular container */}
//         <div className="relative w-[500px] h-[500px] mx-auto">
//           {partners.map((p, idx) => (
//             <motion.img
//               key={idx}
//               src={p}
//               alt="Partner"
//               custom={idx}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               variants={item}
//               className="absolute top-1/2 left-1/2 h-20 -translate-x-1/2 -translate-y-1/2 grayscale hover:grayscale-0 transition"
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partners;

// import React from "react";
// import { motion } from "framer-motion";

// const Partners = () => {
//   const partners = [
//     "https://logo.clearbit.com/huawei.com",
//     "https://logo.clearbit.com/paloaltonetworks.com",
//     "./eaton.jpg",
//     "https://logo.clearbit.com/vertiv.com",
//     "https://logo.clearbit.com/canovate.com",
//     "https://logo.clearbit.com/cisco.com",
//     "https://logo.clearbit.com/dell.com",
//     "https://logo.clearbit.com/hp.com",
//   ];

//   // Animation for each logo
//   const item = {
//     hidden: { opacity: 0, scale: 0.2, x: 0, y: 0 },
//     visible: (i) => {
//       const radius = 180; // distance from center
//       const angle = (i / partners.length) * 2 * Math.PI;
//       return {
//         opacity: 1,
//         scale: 1,
//         x: Math.cos(angle) * radius,
//         y: Math.sin(angle) * radius,
//         transition: {
//           duration: 1.2,
//           ease: "easeOut",
//           delay: i * 0.1, // smooth stagger clockwise
//         },
//       };
//     },
//   };

//   return (
//     <section
//       id="partners"
//       className="py-32 bg-gradient-to-br from-[#e0f7fa] to-[#f8fafc]"
//     >
//       <div className="max-w-6xl mx-auto px-6 text-center relative">
//         <h2 className="font-orbitron text-5xl font-extrabold mb-24 text-[#0077B6]">
//           Our Partners
//         </h2>

//         {/* circular container */}
//         <div className="relative w-[450px] h-[450px] mx-auto">
//           {partners.map((p, idx) => (
//             <motion.img
//               key={idx}
//               src={p}
//               alt="Partner"
//               custom={idx}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               variants={item}
//               className="absolute top-1/2 left-1/2 h-16 md:h-20 lg:h-24 -translate-x-1/2 -translate-y-1/2 grayscale hover:grayscale-0 transition"
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partners;

// import React from "react";
// import { motion } from "framer-motion";

// const Partners = () => {
//   const partners = [
//     "https://logo.clearbit.com/huawei.com",
//     "https://logo.clearbit.com/paloaltonetworks.com",
//     // "./eaton.jpg",
//     "https://logo.clearbit.com/vertiv.com",
//     "https://logo.clearbit.com/canovate.com",
//     "https://logo.clearbit.com/cisco.com",
//     "https://logo.clearbit.com/dell.com",
//     "https://logo.clearbit.com/hp.com",
//   ];

//   // Animation for each logo
//   const item = {
//     hidden: { opacity: 0, scale: 0.2, x: 0, y: 0 },
//     visible: (i) => {
//       const total = partners.length;
//       const radius = 200; // distance from center
//       const angle = (i / total) * 2 * Math.PI;

//       return {
//         opacity: 1,
//         scale: 1,
//         x: Math.cos(angle) * radius,
//         y: Math.sin(angle) * radius,
//         transition: {
//           type: "spring",
//           stiffness: 70,
//           damping: 15,
//           delay: i * 0.12, // staggered outward flow
//         },
//       };
//     },
//   };

//   return (
//     <section
//       id="partners"
//       className="py-32 bg-gradient-to-br from-[#e0f7fa] to-[#f8fafc]"
//     >
//       <div className="max-w-6xl mx-auto px-6 text-center relative">
//         <h2 className="font-orbitron text-5xl font-extrabold mb-24 text-[#0077B6]">
//           Our Partners
//         </h2>

//         {/* circular container */}
//         <div className="relative w-[500px] h-[500px] mx-auto">
//           {partners.map((p, idx) => (
//             <motion.img
//               key={idx}
//               src={p}
//               alt="Partner"
//               custom={idx}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               variants={item}
//               className="absolute top-1/2 left-1/2 h-16 md:h-20 lg:h-24
//                          -translate-x-1/2 -translate-y-1/2
//                          grayscale hover:grayscale-0 transition"
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Partners;
