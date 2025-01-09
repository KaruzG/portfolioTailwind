/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import LandingSection from "./components/LandingSection";
import MySkillsSection from "./components/MySkillsSection";
/* import NavBar from './components/NavBar'; */
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <div className="flex min-h-screen flex-col gap-11 bg-gradient-to-br from-primary to-black p-5 text-white">
      {/* <NavBar/> */}
      <LandingSection />
      <ProjectsSection />
      <MySkillsSection />
    </div>
  );
}

export default App;
