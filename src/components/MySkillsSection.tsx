import SectionTitle from "./SectionTitle";
import { FaRegStar } from "react-icons/fa";
import SkillCard from "./SkillCard";
import { skills } from "../data/skillsData";

const MySkillsSection = () => {
  return (
    <section id="skills" className="mb-5">
      <SectionTitle>
        <FaRegStar className="my-auto mr-3" />
        MY SKILLS
      </SectionTitle>
      <nav className="mt-5">
        <ul className="flex justify-center gap-3 font-bold text-grayButton">
          <li className="text-accent">Front End</li>
          <li>Back End</li>
          <li>Other</li>
        </ul>
      </nav>
      <div>
        <SkillCard skill={skills[0]}/>
      </div>
    </section>
  );
};

export default MySkillsSection;
