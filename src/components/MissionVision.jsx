// import React from "react";

// const MissionVision = () => {
//   return (
//     <section id="mission" className="py-32 bg-white">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         <h2 className="font-orbitron text-5xl font-extrabold mb-16 text-[#0077B6]">
//           Our Mission, Vision & Core Values
//         </h2>
//         <div className="grid md:grid-cols-3 gap-12">
//           <div className="p-10 rounded-3xl shadow-xl border-2 border-[#00BFFF] bg-white/70">
//             <h3 className="text-3xl font-bold mb-4 text-[#0077B6]">
//               Our Mission
//             </h3>
//             <p className="text-lg">
//               To deliver state-of-the-art solutions by optimizing efficiency and
//               improving the quality of our clients’ lives using technology.
//             </p>
//           </div>
//           <div className="p-10 rounded-3xl shadow-xl border-2 border-[#00BFFF] bg-white/70">
//             <h3 className="text-3xl font-bold mb-4 text-[#0077B6]">
//               Our Vision
//             </h3>
//             <p className="text-lg">
//               To become a world-class solution provider and integrator of IT
//               facility solutions, enterprise network services, modular
//               datacenter, and software solutions.
//             </p>
//           </div>
//           <div className="p-10 rounded-3xl shadow-xl border-2 border-[#00BFFF] bg-white/70 text-left">
//             <h3 className="text-3xl font-bold mb-4 text-[#0077B6]">
//               Our Core Values
//             </h3>
//             <ul className="list-disc list-inside space-y-2 text-lg">
//               <li>
//                 <strong>Integrity:</strong> We are open and honest in everything
//                 we do.
//               </li>
//               <li>
//                 <strong>Reliability:</strong> We are consistently dependable.
//               </li>
//               <li>
//                 <strong>Passion:</strong> Dedicated to providing excellent
//                 services.
//               </li>
//               <li>
//                 <strong>Accountability:</strong> We take ownership of our
//                 actions.
//               </li>
//               <li>
//                 <strong>Adaptability:</strong> Embrace change and provide
//                 innovative solutions.
//               </li>
//               <li>
//                 <strong>Unity:</strong> We are a TEAM!
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MissionVision;

import React from "react";
import { motion } from "framer-motion";

const MissionVision = () => {
  const cards = [
    {
      title: "Our Mission",
      content:
        "To deliver state-of-the-art solutions by optimizing efficiency and improving the quality of our clients’ lives using technology.",
    },
    {
      title: "Our Vision",
      content:
        "To become a world-class solution provider and integrator of IT facility solutions, enterprise network services, modular datacenter, and software solutions.",
    },
    {
      title: "Our Core Values",
      content: (
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>
            <strong>Integrity:</strong> We are open and honest in everything we
            do.
          </li>
          <li>
            <strong>Reliability:</strong> We are consistently dependable.
          </li>
          <li>
            <strong>Passion:</strong> Dedicated to providing excellent services.
          </li>
          <li>
            <strong>Accountability:</strong> We take ownership of our actions.
          </li>
          <li>
            <strong>Adaptability:</strong> Embrace change and provide innovative
            solutions.
          </li>
          <li>
            <strong>Unity:</strong> We are a TEAM!
          </li>
        </ul>
      ),
    },
  ];

  return (
    <section id="mission" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-orbitron text-5xl font-extrabold mb-16 text-[#0077B6]">
          Our Mission, Vision & Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="p-10 rounded-3xl shadow-xl border-2 border-[#00BFFF] bg-white/70"
              initial={{ y: 0 }}
              animate={{
                y: ["0%", "-15%", "0%"], // bounce up and down
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 2, // full beat cycle
                delay: idx * 0.3, // staggered like a wave
                ease: "easeInOut",
              }}
            >
              <h3 className="text-3xl font-bold mb-4 text-[#0077B6]">
                {card.title}
              </h3>
              <p className="text-lg">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
