export interface Skill {
  name: string;
  skillColor: string | null;
  textColor: string | null;
  techType: "frontend" | "backend" | "other";
  logo: string;
}

export const skills: Skill[] = [
  {
    name: "React",
    skillColor: "#61DAFB",
    textColor: "#000000",
    techType: "frontend",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
  },
  {
    name: "JavaScript",
    skillColor: "#F7DF1E",
    textColor: "#000000",
    techType: "frontend",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "TypeScript",
    skillColor: "#3178C6",
    textColor: "#FFFFFF",
    techType: "frontend",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
];
