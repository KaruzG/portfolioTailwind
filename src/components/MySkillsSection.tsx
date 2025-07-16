import SectionTitle from "./SectionTitle";
import { FaRegStar } from "react-icons/fa";
import SkillCard from "./SkillCard";
import { SkillType } from "../types/Skill";
import { skills } from "../data/skillsData";
import { useRef, useLayoutEffect, useState } from "react";

const MySkillsSection = () => {
  const [activeSection, setActiveSection] = useState<SkillType>("frontend");
  const filteredSkills = skills.filter(
    (skill) => skill.techType === activeSection,
  );
  const [height, setHeight] = useState<number>();
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.offsetHeight);
    }
  }, [activeSection, filteredSkills.length]);

  const navLiStyles =
    "cursor-pointer transition-colors duration-500 hover:text-accent300";
  return (
    <section id="skills" className="mb-16">
      <SectionTitle>
        <FaRegStar className="my-auto mr-3" />
        MY SKILLS
      </SectionTitle>
      <nav className="mt-5">
        <ul className="flex justify-center gap-3 font-bold text-grayButton">
          <li
            className={`${navLiStyles} ${activeSection == "frontend" ? "text-accent" : ""}`}
            onClick={() => setActiveSection("frontend")}
          >
            Front End
          </li>
          <li
            className={`${navLiStyles} ${activeSection == "backend" ? "text-accent" : ""}`}
            onClick={() => setActiveSection("backend")}
          >
            Back End
          </li>
          <li
            className={`${navLiStyles} ${activeSection == "other" ? "text-accent" : ""}`}
            onClick={() => setActiveSection("other")}
          >
            Other
          </li>
        </ul>
      </nav>
      <div
        className="relative mx-auto overflow-visible transition-all duration-500 md:max-w-md"
        style={{ height: height ? `${height}px` : "auto" }}
      >
        <div
          ref={contentRef}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} delay={index * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkillsSection;
