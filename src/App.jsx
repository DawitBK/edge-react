import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MissionVision from "./components/MissionVision";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import Partners from "./components/Partners";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <MissionVision />
      <Services />
      <Solutions />
      <Partners />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
