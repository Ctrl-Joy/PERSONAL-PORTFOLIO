import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works } from "./components";
import SkillMatrix from "./components/SkillMatrix";
import Footer from "./components/Footer";

// Lazy load heavy 3D components
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

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
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;