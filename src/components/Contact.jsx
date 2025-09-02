import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-[#e0f7fa] to-[#f8fafc]"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-orbitron text-4xl font-extrabold mb-6 text-[#0077B6]">
            Contact Us
          </h2>
          <p className="mb-4 text-lg">Edge Communication Technologies</p>
          <p className="mb-2">Phone: +251 123 456 789</p>
          <p className="mb-2">Email: info@edgecommtech.com</p>
          <p className="mb-2">Address: Addis Ababa, Ethiopia</p>
        </div>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="p-4 rounded-xl border-2 border-[#00BFFF] focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-4 rounded-xl border-2 border-[#00BFFF] focus:outline-none"
          />
          <textarea
            placeholder="Message"
            className="p-4 rounded-xl border-2 border-[#00BFFF] focus:outline-none h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-[#0077B6] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#00BFFF] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
