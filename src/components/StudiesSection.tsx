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
    descriptionList: ["<b>FullStack development</b>", "AWS Deployment", "<b>UIX</b> design"],
  },
  {
    company: "Micro-computing Systems and Networks",
    location: null,
    duration: 2,
    durationType: "years",
    descriptionList: [
      "TCP IP Networks",
      "<b>Windows/Linux</b> administration",
      "Cybersecurity",
      "<b>Frontend basics</b>",
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
