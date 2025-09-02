import React from "react";

const Partners = () => {
  const partners = [
    "https://logo.clearbit.com/huawei.com",
    "https://logo.clearbit.com/paloaltonetworks.com",
    "/.eaton.jpg",
    "https://logo.clearbit.com/vertiv.com",
    "https://logo.clearbit.com/canovate.com",
    "https://logo.clearbit.com/cisco.com",
    "https://logo.clearbit.com/dell.com",
    "https://logo.clearbit.com/hp.com",
  ];

  return (
    <section
      id="partners"
      className="py-32 bg-gradient-to-br from-[#e0f7fa] to-[#f8fafc]"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-orbitron text-5xl font-extrabold mb-16 text-[#0077B6]">
          Our Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
          {partners.map((p, idx) => (
            <img
              key={idx}
              src={p}
              alt="Partner"
              className="mx-auto h-24 grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
