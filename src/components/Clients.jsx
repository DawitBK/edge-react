import React from "react";

const Clients = () => {
  const clients = [
    "./bahirdar.jpg",
    "./haromaya.webp",
    "./mizan.png",
    "./bonga2.jpeg",
    "./yekatit.jpg",
  ];

  return (
    <section id="clients" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-orbitron text-4xl md:text-5xl font-extrabold mb-12 text-[#0077B6]">
          Our Clients
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
          {clients.map((c, idx) => (
            <img
              key={idx}
              src={c}
              alt="Client"
              className="mx-auto rounded-xl shadow-lg h-40 object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
