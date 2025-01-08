/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import LandingSection from './components/LandingSection';
import MySkillsSection from './components/MySkillsSection';
/* import NavBar from './components/NavBar'; */
import ProjectsSection from './components/ProjectsSection';

function App() {

  return (
    <>
      {/* <NavBar/> */}
      <LandingSection/>
      <ProjectsSection/>
      <MySkillsSection/>
    </>
  )
}

export default App
