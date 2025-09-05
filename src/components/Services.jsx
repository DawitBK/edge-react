// import React from "react";

// const Services = () => {
//   const serviceList = [
//     {
//       title: "Voice / Data / Internet",
//       description:
//         "High-performance connectivity solutions for modern enterprises.",
//     },
//     {
//       title: "Datacenter Facility",
//       description:
//         "Secure, scalable data center infrastructure for enterprise IT.",
//     },
//     {
//       title: "Networks (LAN/WLAN)",
//       description:
//         "Reliable wired and wireless networking for seamless communication.",
//     },
//     {
//       title: "Unified Communications",
//       description:
//         "Collaboration tools integrating voice, chat, mobile, and data.",
//     },
//     {
//       title: "IT Support / Desktop Services",
//       description:
//         "Remote and on-site support for enterprise networks, servers, and software.",
//     },
//     {
//       title: "Professional Services",
//       description:
//         "Expert certified engineers specializing in network and system solutions.",
//     },
//     {
//       title: "NOC & SOC Services",
//       description:
//         "Carrier-grade network and security operations centers for businesses.",
//     },
//     {
//       title: "Cybersecurity",
//       description: "Complete portfolio of network and data security services.",
//     },
//     {
//       title: "CCTV & Physical Security",
//       description:
//         "Design and install CCTV, access control, barriers, and turnstiles.",
//     },
//   ];

//   return (
//     <section
//       id="services"
//       className="py-32 bg-gradient-to-br from-[#e0f7fa] to-[#f8fafc]"
//     >
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <h2 className="font-orbitron text-5xl font-extrabold mb-16 text-[#0077B6]">
//           Our Services
//         </h2>
//         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//           {serviceList.map((service, idx) => (
//             <div
//               key={idx}
//               className="p-10 rounded-3xl shadow-xl border-2 border-[#00BFFF] bg-white/70"
//             >
//               <h3 className="text-3xl font-bold mb-4 text-[#0077B6]">
//                 {service.title}
//               </h3>
//               <p className="text-lg">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const serviceList = [
    {
      title: "Voice / Data / Internet",
      description:
        "High-performance connectivity solutions for modern enterprises.",
    },
    {
      title: "Datacenter Facility",
      description:
        "Secure, scalable data center infrastructure for enterprise IT.",
    },
    {
      title: "Networks (LAN/WLAN)",
      description:
        "Reliable wired and wireless networking for seamless communication.",
    },
    {
      title: "Unified Communications",
      description:
        "Collaboration tools integrating voice, chat, mobile, and data.",
    },
    {
      title: "IT Support / Desktop Services",
      description:
        "Remote and on-site support for enterprise networks, servers, and software.",
    },
    {
      title: "Professional Services",
      description:
        "Expert certified engineers specializing in network and system solutions.",
    },
    {
      title: "NOC & SOC Services",
      description:
        "Carrier-grade network and security operations centers for businesses.",
    },
    {
      title: "Cybersecurity",
      description: "Complete portfolio of network and data security services.",
    },
    {
      title: "CCTV & Physical Security",
      description:
        "Design and install CCTV, access control, barriers, and turnstiles.",
    },
  ];

  // Animation variants
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // animate cards one by one
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="services"
      className="py-32 bg-gradient-to-br from-[#e0f7fa] to-[#f8fafc]"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-orbitron text-5xl font-extrabold mb-16 text-[#0077B6]">
          Our Services
        </h2>

        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // animate every time section enters viewport
        >
          {serviceList.map((service, idx) => (
            <motion.div
              key={idx}
              variants={card}
              className="p-10 rounded-3xl shadow-xl border-2 border-[#00BFFF] bg-white/70"
            >
              <h3 className="text-3xl font-bold mb-4 text-[#0077B6]">
                {service.title}
              </h3>
              <p className="text-lg">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
