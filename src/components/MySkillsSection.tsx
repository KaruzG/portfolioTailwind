import SectionTitle from "./SectionTitle";
import { FaRegStar } from "react-icons/fa";


const MySkillsSection = () => {
  return (
    <>
      <SectionTitle>
        <FaRegStar className="mr-3 my-auto" />
        PROJECTS
      </SectionTitle>
      <nav>
        <ul>
          <li>Front End</li>
          <li>Back End</li>
          <li>Other</li>
        </ul>
      </nav>
      <div>{}</div>
    </>
  );
};

export default MySkillsSection;
