import React from "react";

const Solutions = () => {
  const solutions = [
    {
      title: "Datacenter Facility",
      img: "https://www.facilitiesnet.com/resources/editorial/2023/shutterstock_2212675529.jpg",
      points: [
        "High availability & reliability",
        "Secure infrastructure",
        "Scalable storage solutions",
        "24/7 monitoring and support",
      ],
    },
    {
      title: "Cybersecurity",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCHn68-VsE7VrVPrsb3x0IoqFFNVUTxzVLgQ&s",
      points: [
        "Advanced threat protection",
        "Network and endpoint security",
        "Security Operations Center (SOC)",
        "Incident response and recovery",
      ],
    },
    {
      title: "CCTV & Physical Security",
      img: "https://assets.losspreventionmedia.com/uploads/2020/07/cctv-video-camera-graphics-1280x720-1.jpg",
      points: [
        "High-definition surveillance",
        "Access control solutions",
        "Smart monitoring systems",
        "Integration with IT infrastructure",
      ],
    },
    {
      title: "IT Services / Support",
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      points: [
        "Desktop support",
        "System troubleshooting",
        "Software management",
        "End-user training",
      ],
    },
  ];

  return (
    <section id="solutions" className="bg-white py-32">
      <div className="max-w-7xl mx-auto w-[80%] space-y-32">
        <h2 className="font-orbitron text-center text-5xl font-extrabold mb-16 text-[#0077B6]">
          Our Solutions
        </h2>
        {solutions.map((sol, idx) => (
          <div
            key={idx}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              idx % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            <img
              src={sol.img}
              alt={sol.title}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl hover:scale-105 transition duration-300 border-4 border-[#00BFFF]"
            />
            <div>
              <h2 className="text-4xl font-bold text-[#0077B6] mb-4">
                {sol.title}
              </h2>
              <ul className="list-disc list-inside mt-4 text-lg text-gray-700 space-y-2">
                {sol.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
