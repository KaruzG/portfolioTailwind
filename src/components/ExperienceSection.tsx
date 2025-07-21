import SectionTitle from "./SectionTitle";
import { FiPaperclip } from "react-icons/fi";
import Timeline from "./Timeline";
import { experienceData } from "../data/experienceData";

const ExperienceSection = () => {
  return (
    <section id="experience" className="mb-5">
      <SectionTitle>
        <FiPaperclip className="my-auto mr-3" />
        EXPERIENCE
      </SectionTitle>
      <ul className="ml-3 mt-5 border-l-2">
        <Timeline timelineData={experienceData} type="job" />
      </ul>
    </section>
  );
};

export default ExperienceSection;
