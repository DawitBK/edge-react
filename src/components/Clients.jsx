import React from "react";

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
              className="mx-auto rounded-xl shadow-lg h-40 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
