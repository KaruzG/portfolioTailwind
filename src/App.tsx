/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import ExperienceSection from "./components/ExperienceSection";
import LandingSection from "./components/LandingSection";
import MySkillsSection from "./components/MySkillsSection";
import NavBar from './components/NavBar';
import ProjectsSection from "./components/ProjectsSection";
import StudiesSection from "./components/StudiesSection";

function App() {
  return (
    <div className="flex min-h-screen flex-col gap-4 bg-gradient-to-br from-primary to-black p-5 text-white">
      <NavBar/>
      <LandingSection />
      <ProjectsSection />
      <MySkillsSection />
      <ExperienceSection />
      <StudiesSection />
    </div>
  );
}

export default App;
