import ContactButton from "./components/ContactButton";
import ExperienceSection from "./components/ExperienceSection";
import LandingSection from "./components/LandingSection";
import MySkillsSection from "./components/MySkillsSection";
import NavBar from './components/NavBar';
import ProjectsSection from "./components/ProjectsSection";
import StudiesSection from "./components/StudiesSection";

function App() {
  return (
    <div className="flex min-h-screen overflow-x-hidden flex-col gap-4 bg-gradient-to-br from-primary to-black p-5 text-white pb-24">
      <div className="flex flex-col md:gap-24 md:pt-14 max-w-screen-md m-auto">
        <NavBar/>
        <LandingSection />
        <ProjectsSection />
        <MySkillsSection />
        <ExperienceSection />
        <StudiesSection />
        <ContactButton />
      </div>
    </div>
  );
}

export default App;
