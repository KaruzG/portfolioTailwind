import SectionTitle from "./SectionTitle";
import { FaRegStar } from "react-icons/fa";


const MySkillsSection = () => {
  return (
    <>
      <SectionTitle>
        <FaRegStar className="mr-3 my-auto" />
        MY SKILLS
      </SectionTitle>
      <nav>
        <ul className="flex gap-3 justify-center text-grayButton font-bold">
          <li className="text-accent">Front End</li>
          <li>Back End</li>
          <li>Other</li>
        </ul>
      </nav>
      <div>{}</div>
    </>
  );
};

export default MySkillsSection;
