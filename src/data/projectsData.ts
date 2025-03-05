import { Skill, skills } from "./skillsData";

export interface Project {
  name: string;
  img: string;
  description: string;
  techStack: Skill[];
  github: string | null;
  website: string | null;
}


export const projects: Project[] = [
  {
    name: "SKATESPOTSVLC",
    img: "/assets/projects/skatespotsvlc.png",
    description: "Web app with info about my city and an admin panel to upload new markers with photos and descriptions",
    techStack: [skills[0],skills[2],skills[6],],
    github: "https://github.com/KaruzG/skatespotsvlc",
    website: "https://skatespotsvlc.vercel.app/",
  },
  {
    name: "KARUZFILM",
    img: "/assets/projects/karuzfilm.png",
    description: "Photography portfolio",
    techStack: [skills[0],skills[2],skills[6],],
    github: null,
    website: "https://karuzfilm.webflow.io/",
  },
];