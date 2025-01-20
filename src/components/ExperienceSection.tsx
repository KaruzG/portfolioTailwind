import SectionTitle from "./SectionTitle";
import { FiPaperclip } from "react-icons/fi";
import Timeline from "./Timeline";
import { TimelineData } from "../types/TimelineData";

const jobExperience: Array<TimelineData> = [
  {
    company: "Code Systems",
    location: "Remote",
    duration: 4,
    durationType: "months",
    descriptionList: [
      "FullStack development of a CRM with IOT connection",
      "Deployment and SQL Databases",
    ],
  },
  {
    company: "CiviRed",
    location: "Spain",
    duration: 1,
    durationType: "year",
    descriptionList: [
      "FullStack development of a CRM with IOT connection",
      "Deployment and SQL Databases",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="mb-5">
      <SectionTitle>
        <FiPaperclip className="my-auto mr-3" />
        EXPERIENCE
      </SectionTitle>
      <ul className="ml-3 mt-5 border-l-2">
        <Timeline timelineData={jobExperience} type="job" />
      </ul>
    </section>
  );
};

export default ExperienceSection;
