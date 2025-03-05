import SectionTitle from "./SectionTitle";
import { FaRegStar } from "react-icons/fa";
import SkillCard from "./SkillCard";
import { SkillType } from "../types/Skill";
import { skills } from "../data/skillsData";
import { useState } from "react";

const MySkillsSection = () => {
  const [activeSection, setActiveSection] = useState<SkillType>("frontend");
  const filteredSkills = skills.filter(
    (skill) => skill.techType === activeSection,
  );

  return (
    <section id="skills" className="mb-16">
      <SectionTitle>
        <FaRegStar className="my-auto mr-3" />
        MY SKILLS
      </SectionTitle>
      <nav className="mt-5">
        <ul className="flex justify-center gap-3 font-bold text-grayButton">
          <li
            className={`transition-colors duration-500 cursor-pointer ${activeSection == "frontend" ? "text-accent" : ""}`}
            onClick={() => setActiveSection("frontend")}
          >
            Front End
          </li>
          <li
            className={`transition-colors duration-500 cursor-pointer ${activeSection == "backend" ? "text-accent" : ""}`}
            onClick={() => setActiveSection("backend")}
          >
            Back End
          </li>
          <li
            className={`transition-colors duration-500 cursor-pointer ${activeSection == "other" ? "text-accent" : ""}`}
            onClick={() => setActiveSection("other")}
          >
            Other
          </li>
        </ul>
      </nav>
      <div className="flex-wrap justify-center gap-4 mt-10 flex">
        {filteredSkills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default MySkillsSection;
