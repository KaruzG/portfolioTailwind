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
      "<b>FullStack development</b> of a CRM with IOT connection",
      "Deployment and <b>SQL Databases</b>",
      "<b>UIX Design</b>"
    ],
  },
  {
    company: "CiviRed",
    location: "Spain",
    duration: 1,
    durationType: "year",
    descriptionList: [
      "<b>System Administration</b>",
      "<b>Coordination</b> of the IT for congresses",
      "Deployment of <b>servers and networks</b>",
    ],
  },
  {
    company: "Bartleby&Co",
    location: "Germany",
    duration: 3,
    durationType: "months",
    descriptionList: [
      "IT Technical Support",
      "<b>Wordpress</b> administrator",
      "Web and Databases <b>backups</b>",
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
