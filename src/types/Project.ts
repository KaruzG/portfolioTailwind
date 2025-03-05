import { Skill } from "./Skill";

export interface Project {
  name: string;
  img: string;
  description: string;
  techStack: Skill[];
  github: string | null;
  website: string | null;
}
