import SectionTitle from "./SectionTitle";
import { IoMdBook } from "react-icons/io";
import Timeline from "./Timeline";
import { studyExperience } from "../data/studiesExperience";


const StudiesSection = () => {
  return (
    <section id="studies">
      <SectionTitle>
        <IoMdBook className="my-auto mr-3" />
        STUDIES
      </SectionTitle>
      <ul className="ml-4">
        <Timeline timelineData={studyExperience} type="education" />
      </ul>
    </section>
  );
};

export default StudiesSection;
