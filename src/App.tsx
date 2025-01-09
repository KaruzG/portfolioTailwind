/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import LandingSection from "./components/LandingSection";
import MySkillsSection from "./components/MySkillsSection";
/* import NavBar from './components/NavBar'; */
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <div className="p-3 pt-2 container mx-auto col-auto">
      <button className="bg-accent px-4 py-2 text-primary hover:bg-sky-800 sm:px-8 sm:py-3">
        Contact
      </button>
      {/* <NavBar/> */}
      <LandingSection />
      <ProjectsSection />
      <MySkillsSection />
    </div>
  );
}

export default App;
