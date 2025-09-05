// import React, { useEffect } from "react";

// const About = () => {
//   useEffect(() => {
//     const elements = document.querySelectorAll(".fade-up");
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate-fadeInUp");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );
//     elements.forEach((el) => observer.observe(el));
//   }, []);

//   return (
//     <section
//       id="about"
//       className="py-32 bg-gradient-to-br from-[#f8fafc] to-[#e0f7fa]"
//     >
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
//         <div className="fade-up">
//           <h2 className="font-orbitron text-5xl font-extrabold mb-8 text-[#0077B6]">
//             Our Story
//           </h2>
//           <p className="mb-4 text-xl leading-relaxed">
//             <span className="font-bold text-[#00BFFF]">Edge COMM-TECH</span> is
//             a privately held company founded in 2018 by industry veterans,
//             driven by a passion for innovation and excellence.
//           </p>
//           <p className="mb-4 text-xl leading-relaxed">
//             We set out to build a leading solution provider, bringing hyperscale
//             infrastructure capabilities and seamless, state-of-the-art
//             enterprise solutions to Ethiopia’s growing ICT sector.
//           </p>
//           <p className="mb-4 text-xl leading-relaxed">
//             Our highly skilled teams deliver services to government, NGOs,
//             universities, banks, and diverse business sectors—empowering
//             organizations with future-ready technology.
//           </p>
//           <p className="text-xl leading-relaxed">
//             Today, Edge COMM-TECH is recognized as a leader, contributing to
//             Ethiopia’s ICT growth with intelligent procurement, design,
//             deployment, and management of complex projects.
//           </p>
//         </div>
//         <div className="fade-up flex justify-center">
//           <img
//             src="https://thumbs.dreamstime.com/b/our-story-blue-business-symbols-circles-triangle-text-concept-image-293025030.jpg"
//             alt="About Edge COMM-TECH"
//             className="rounded-3xl shadow-2xl w-full max-w-md border-4 border-[#00BFFF]"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-32 bg-gradient-to-br from-[#f8fafc] to-[#e0f7fa]"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-orbitron text-5xl font-extrabold mb-8 text-[#0077B6]">
            Our Story
          </h2>
          <p className="mb-4 text-xl leading-relaxed">
            <span className="font-bold text-[#00BFFF]">Edge COMM-TECH</span> is
            a privately held company founded in 2018 by industry veterans,
            driven by a passion for innovation and excellence.
          </p>
          <p className="mb-4 text-xl leading-relaxed">
            We set out to build a leading solution provider, bringing hyperscale
            infrastructure capabilities and seamless, state-of-the-art
            enterprise solutions to Ethiopia’s growing ICT sector.
          </p>
          <p className="mb-4 text-xl leading-relaxed">
            Our highly skilled teams deliver services to government, NGOs,
            universities, banks, and diverse business sectors—empowering
            organizations with future-ready technology.
          </p>
          <p className="text-xl leading-relaxed">
            Today, Edge COMM-TECH is recognized as a leader, contributing to
            Ethiopia’s ICT growth with intelligent procurement, design,
            deployment, and management of complex projects.
          </p>
        </motion.div>

        {/* Animated Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <motion.img
            src="https://thumbs.dreamstime.com/b/our-story-blue-business-symbols-circles-triangle-text-concept-image-293025030.jpg"
            alt="About Edge COMM-TECH"
            className="rounded-3xl shadow-2xl w-full max-w-md border-4 border-[#00BFFF]"
            animate={{
              rotate: [0, 5, -5, 5, 0],
              y: [0, -10, 0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 3,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
