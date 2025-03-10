import { TimelineData } from "../types/TimelineData";
import SectionTitle from "./SectionTitle";
import { IoMdBook } from "react-icons/io";
import Timeline from "./Timeline";

const studyExperience: Array<TimelineData> = [
  {
    company: "Web App Development",
    location: null,
    duration: 2,
    durationType: "years",
    descriptionList: ["FullStack development", "AWS Deployment", "UIX design"],
  },
  {
    company: "Micro-computing Systems and Networks",
    location: null,
    duration: 2,
    durationType: "years",
    descriptionList: [
      "TCP IP Networks",
      "Windows/Linux administration",
      "Cybersecurity",
      "Frontend basics",
    ],
  },
];

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
