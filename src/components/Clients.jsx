// import React from "react";

// const Clients = () => {
//   const clients = [
//     "./bahirdar.jpg",
//     "./haromaya.webp",
//     "./mizan.png",
//     "./bonga2.jpeg",
//     "./yekatit.jpg",
//     "https://www.zemenbank.com/images/assets/logo2x.png",
//     "./esx.png",
//     "https://upload.wikimedia.org/wikipedia/en/7/74/Ministry_of_Urban_Development_and_Construction_%28Ethiopia%29.jpg",
//     "https://upload.wikimedia.org/wikipedia/en/e/ef/Arba_Minch_University.png",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBRjvx-6kMckIIeye3IwgLtXpdYKau3yNePw&s",
//     "https://siinqeebank.com/wp-content/uploads/2024/03/Green-Logo.png",
//   ];

//   return (
//     <section id="clients" className="py-24 bg-white">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <h2 className="font-orbitron text-4xl md:text-5xl font-extrabold mb-12 text-[#0077B6]">
//           Our Clients
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
//           {clients.map((c, idx) => (
//             <img
//               key={idx}
//               src={c}
//               alt="Client"
//               className="mx-auto rounded-xl shadow-lg h-40 object-contain"
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;

// import React from "react";
// import { motion } from "framer-motion";

// const Clients = () => {
//   const clients = [
//     "./bahirdar.jpg",
//     "./haromaya.webp",
//     "./mizan.png",
//     "./bonga2.jpeg",
//     "./yekatit.jpg",
//     "https://www.zemenbank.com/images/assets/logo2x.png",
//     "./esx.png",
//     "https://upload.wikimedia.org/wikipedia/en/7/74/Ministry_of_Urban_Development_and_Construction_%28Ethiopia%29.jpg",
//     "https://upload.wikimedia.org/wikipedia/en/e/ef/Arba_Minch_University.png",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBRjvx-6kMckIIeye3IwgLtXpdYKau3yNePw&s",
//     "https://siinqeebank.com/wp-content/uploads/2024/03/Green-Logo.png",
//   ];

//   // Split logos into concentric circles
//   const circles = [
//     { radius: 150, count: 4 }, // inner
//     { radius: 250, count: 7 }, // outer
//   ];

//   let arranged = [];
//   let idx = 0;

//   for (let c of circles) {
//     for (let i = 0; i < c.count && idx < clients.length; i++) {
//       const angle = (i / c.count) * 2 * Math.PI;
//       arranged.push({
//         src: clients[idx],
//         radius: c.radius,
//         angle,
//       });
//       idx++;
//     }
//   }

//   return (
//     <section
//       id="clients"
//       className="py-32 bg-gradient-to-br from-white to-gray-50"
//     >
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         {/* Title */}
//         <h2 className="font-orbitron text-5xl font-extrabold mb-16 text-[#0077B6]">
//           Our Clients
//         </h2>

//         {/* Orbit Container */}
//         <div className="relative w-[800px] h-[800px] mx-auto">
//           <motion.div
//             className="absolute w-full h-full"
//             animate={{ rotate: -360 }} // negative for counterclockwise
//             transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
//           >
//             {arranged.map((c, i) => {
//               const center = 400; // half of container (800/2)
//               const x = Math.cos(c.angle) * c.radius + center - 56;
//               const y = Math.sin(c.angle) * c.radius + center - 56;

//               return (
//                 <img
//                   key={i}
//                   src={c.src}
//                   alt="Client"
//                   className="absolute w-28 h-28 object-contain bg-white rounded-full p-2 shadow-md"
//                   style={{
//                     left: `${x}px`,
//                     top: `${y}px`,
//                   }}
//                 />
//               );
//             })}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;

// import React from "react";
// import { motion } from "framer-motion";

// const Clients = () => {
//   const clients = [
//     "./bahirdar.jpg",
//     "./haromaya.webp",
//     "./mizan.png",
//     "./bonga2.jpeg",
//     "./yekatit.jpg",
//     "https://www.zemenbank.com/images/assets/logo2x.png",
//     "./esx.png",
//     "https://upload.wikimedia.org/wikipedia/en/7/74/Ministry_of_Urban_Development_and_Construction_%28Ethiopia%29.jpg",
//     "https://upload.wikimedia.org/wikipedia/en/e/ef/Arba_Minch_University.png",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBRjvx-6kMckIIeye3IwgLtXpdYKau3yNePw&s",
//     "https://siinqeebank.com/wp-content/uploads/2024/03/Green-Logo.png",
//   ];

//   // Increase radius for more spacing
//   const circles = [
//     { radius: 180, count: 2 }, // inner circle slightly bigger
//     { radius: 320, count: 4 },
//     { radius: 420, count: 5 }, // outer circle bigger spacing
//   ];

//   let arranged = [];
//   let idx = 0;

//   for (let c of circles) {
//     for (let i = 0; i < c.count && idx < clients.length; i++) {
//       const angle = (i / c.count) * 2 * Math.PI;
//       arranged.push({
//         src: clients[idx],
//         radius: c.radius,
//         angle,
//       });
//       idx++;
//     }
//   }

//   return (
//     <section
//       id="clients"
//       className="py-32 bg-gradient-to-br from-white to-gray-50"
//     >
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <h2 className="font-orbitron text-5xl font-extrabold mb-16 text-[#0077B6]">
//           Our Clients
//         </h2>

//         <div className="relative w-[800px] h-[800px] mx-auto">
//           <motion.div
//             className="absolute w-full h-full"
//             animate={{ rotate: -360 }} // counterclockwise
//             transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
//           >
//             {arranged.map((c, i) => {
//               const center = 400;
//               const x = Math.cos(c.angle) * c.radius + center - 56;
//               const y = Math.sin(c.angle) * c.radius + center - 56;

//               return (
//                 <img
//                   key={i}
//                   src={c.src}
//                   alt="Client"
//                   className="absolute w-28 h-28 object-contain bg-white rounded-full p-2 shadow-md"
//                   style={{
//                     left: `${x}px`,
//                     top: `${y}px`,
//                   }}
//                 />
//               );
//             })}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;

// import React from "react";
// import { motion } from "framer-motion";

// const Clients = () => {
//   const clients = [
//     "./bahirdar.jpg",
//     "./haromaya.webp",
//     "./mizan.png",
//     "./bonga2.jpeg",
//     "./yekatit.jpg",
//     "https://www.zemenbank.com/images/assets/logo2x.png",
//     "./esx.png",
//     "https://upload.wikimedia.org/wikipedia/en/7/74/Ministry_of_Urban_Development_and_Construction_%28Ethiopia%29.jpg",
//     "https://upload.wikimedia.org/wikipedia/en/e/ef/Arba_Minch_University.png",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBRjvx-6kMckIIeye3IwgLtXpdYKau3yNePw&s",
//     "https://siinqeebank.com/wp-content/uploads/2024/03/Green-Logo.png",
//   ];

//   // Settings
//   const containerSize = 800; // viewport size for circle
//   const logoSize = 112; // px (28 tailwind = 7rem = 112px)
//   const spacing = 40; // space between circles
//   const logosPerCircle = 6; // starting point for distribution

//   // Dynamically arrange logos in multiple circles
//   let arranged = [];
//   let remaining = [...clients];
//   let radius = 160; // first circle radius

//   while (remaining.length > 0) {
//     const count = Math.min(logosPerCircle + arranged.length, remaining.length);
//     for (let i = 0; i < count; i++) {
//       const angle = (i / count) * 2 * Math.PI;
//       arranged.push({
//         src: remaining.shift(),
//         radius,
//         angle,
//       });
//     }
//     radius += logoSize + spacing; // push next circle outward
//   }

//   return (
//     <section
//       id="clients"
//       className="py-32 bg-gradient-to-br from-white to-gray-50"
//     >
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <h2 className="font-orbitron text-5xl font-extrabold mb-16 text-[#0077B6]">
//           Our Clients
//         </h2>

//         <div
//           className="relative mx-auto"
//           style={{ width: containerSize, height: containerSize }}
//         >
//           <motion.div
//             className="absolute w-full h-full"
//             animate={{ rotate: -360 }} // counterclockwise
//             transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
//           >
//             {arranged.map((c, i) => {
//               const center = containerSize / 2;
//               const x = Math.cos(c.angle) * c.radius + center - logoSize / 2;
//               const y = Math.sin(c.angle) * c.radius + center - logoSize / 2;

//               return (
//                 <img
//                   key={i}
//                   src={c.src}
//                   alt="Client"
//                   className="absolute object-contain bg-white rounded-full p-2 shadow-md"
//                   style={{
//                     left: `${x}px`,
//                     top: `${y}px`,
//                     width: `${logoSize}px`,
//                     height: `${logoSize}px`,
//                   }}
//                 />
//               );
//             })}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;

// import React from "react";
// import { motion } from "framer-motion";

// const Clients = () => {
//   const clients = [
//     "./bahirdar.jpg",
//     "./haromaya.webp",
//     "./mizan.png",
//     "./bonga2.jpeg",
//     "./yekatit.jpg",
//     "https://www.zemenbank.com/images/assets/logo2x.png",
//     "./esx.png",
//     "https://upload.wikimedia.org/wikipedia/en/7/74/Ministry_of_Urban_Development_and_Construction_%28Ethiopia%29.jpg",
//     "https://upload.wikimedia.org/wikipedia/en/e/ef/Arba_Minch_University.png",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBRjvx-6kMckIIeye3IwgLtXpdYKau3yNePw&s",
//     "https://siinqeebank.com/wp-content/uploads/2024/03/Green-Logo.png",
//   ];

//   const containerSize = 800;
//   const logoSize = 120;

//   // Define 3 concentric circles
//   const circles = [
//     { count: 2, radius: 120, duration: 40, offset: 0 },
//     { count: 4, radius: 220, duration: 70, offset: 0.2 },
//     { count: 5, radius: 340, duration: 100, offset: 0.4 },
//   ];

//   let arranged = [];
//   let idx = 0;

//   circles.forEach((circle) => {
//     for (let i = 0; i < circle.count && idx < clients.length; i++) {
//       const angle = ((i + circle.offset) / circle.count) * 2 * Math.PI;
//       arranged.push({
//         src: clients[idx],
//         radius: circle.radius,
//         angle,
//         duration: circle.duration,
//       });
//       idx++;
//     }
//   });

//   return (
//     <section
//       id="clients"
//       className="py-32 bg-gradient-to-br from-white to-gray-50"
//     >
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <h2 className="font-orbitron text-5xl font-extrabold mb-16 text-[#0077B6]">
//           Our Clients
//         </h2>

//         <div
//           className="relative mx-auto"
//           style={{ width: containerSize, height: containerSize }}
//         >
//           {circles.map((circle, cIdx) => {
//             // Extract logos for this circle
//             const logos = arranged.slice(
//               (idx = arranged.findIndex((l) => l.radius === circle.radius)),
//               idx + circle.count
//             );

//             return (
//               <motion.div
//                 key={cIdx}
//                 className="absolute w-full h-full"
//                 animate={{ rotate: -360 }}
//                 transition={{
//                   repeat: Infinity,
//                   duration: circle.duration,
//                   ease: "linear",
//                 }}
//               >
//                 {logos.map((c, i) => {
//                   const center = containerSize / 2;
//                   const x =
//                     Math.cos(c.angle) * c.radius + center - logoSize / 2;
//                   const y =
//                     Math.sin(c.angle) * c.radius + center - logoSize / 2;

//                   return (
//                     <img
//                       key={i}
//                       src={c.src}
//                       alt="Client"
//                       className="absolute object-contain bg-white rounded-full p-2 shadow-md"
//                       style={{
//                         left: `${x}px`,
//                         top: `${y}px`,
//                         width: `${logoSize}px`,
//                         height: `${logoSize}px`,
//                       }}
//                     />
//                   );
//                 })}
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;

import React from "react";
import { motion } from "framer-motion";

const Clients = () => {
  const clients = [
    "./bahirdar.jpg",
    "./haromaya.webp",
    "./mizan.png",
    "./bonga2.jpeg",
    "./yekatit.jpg",
    "https://www.zemenbank.com/images/assets/logo2x.png",
    "./esx.png",
    "https://upload.wikimedia.org/wikipedia/en/7/74/Ministry_of_Urban_Development_and_Construction_%28Ethiopia%29.jpg",
    "https://upload.wikimedia.org/wikipedia/en/e/ef/Arba_Minch_University.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBRjvx-6kMckIIeye3IwgLtXpdYKau3yNePw&s",
    "https://siinqeebank.com/wp-content/uploads/2024/03/Green-Logo.png",
  ];

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    }),
  };

  return (
    <section
      id="clients"
      className="py-32 bg-gradient-to-br from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-orbitron text-5xl font-extrabold mb-16 text-[#0077B6]">
          Our Clients
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-center">
          {clients.map((c, idx) => (
            <motion.img
              key={idx}
              src={c}
              alt="Client"
              custom={idx}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }} // triggers every time
              className="mx-auto object-contain bg-white rounded-full p-2 shadow-md h-32 w-32"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
