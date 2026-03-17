import React from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works } from "./components";
import SkillMatrix from "./components/SkillMatrix";
import { StarsCanvas } from "./components/canvas";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <SkillMatrix />
        <Tech />
        <Works />
        <Contact />
        <Footer />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;