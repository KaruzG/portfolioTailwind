import { Project } from "../types/Project";
import { skills } from "./skillsData";

export const projects: Project[] = [
  {
    name: "SKATESPOTSVLC",
    img: "/src/assets/projects/skatespotsvlc.jpeg",
    description: "Web app with info about my city and an admin panel to upload new markers with photos and descriptions",
    techStack: [skills[0],skills[2],skills[6],skills[8],skills[9],skills[10],skills[11]],
    github: "https://github.com/KaruzG/skatespotsvlc",
    website: "https://skatespotsvlc.vercel.app/",
  },
  {
    name: "KARUZFILM",
    img: "/src/assets/projects/karuzfilm.png",
    description: "Photography portfolio",
    techStack: [skills[15]],
    github: null,
    website: "https://karuzfilm.webflow.io/",
  },
];