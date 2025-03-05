export interface Skill {
  id: number;
  name: string;
  skillColor: string | null;
  textColor: string | null;
  techType: SkillType;
  logo: string;
}

export type SkillType = "frontend" | "backend" | "other";

export const skills: Skill[] = [
  {
    id: 0,
    name: "React",
    skillColor: "#61DAFB",
    textColor: "#000000",
    techType: "frontend",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
  },
  {
    id: 1,
    name: "JavaScript",
    skillColor: "#F7DF1E",
    textColor: "#000000",
    techType: "frontend",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    id: 2,
    name: "TypeScript",
    skillColor: "#3178C6",
    textColor: "#FFFFFF",
    techType: "frontend",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    id: 3,
    name: "HTML",
    skillColor: "#E34F26",
    textColor: "#FFFFFF",
    techType: "frontend",
    logo: "https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png",
  },
  {
    id: 4,
    name: "CSS",
    skillColor: "#1572B6",
    textColor: "#FFFFFF",
    techType: "frontend",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Official_CSS_Logo.svg/2048px-Official_CSS_Logo.svg.png",
  },
  {
    id: 5,
    name: "Tailwind CSS",
    skillColor: "#38B2AC",
    textColor: "#FFFFFF",
    techType: "frontend",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    id: 6,
    name: "Node.js",
    skillColor: "#339933",
    textColor: "#FFFFFF",
    techType: "backend",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-3030179.png?f=webp&w=256",
  },
  {
    id: 7,
    name: "PHP",
    skillColor: "#777BB4",
    textColor: "#FFFFFF",
    techType: "backend",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
  },
  {
    id: 8,
    name: "SASS",
    skillColor: "#CC6699",
    textColor: "#FFFFFF",
    techType: "frontend",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
  },
  {
    id: 9,
    name: "MongoDB",
    skillColor: "#47A248",
    textColor: "#FFFFFF",
    techType: "backend",
    logo: "https://static-00.iconduck.com/assets.00/mongodb-original-icon-921x2048-hvrb89lu.png",
  },
  {
    id: 10,
    name: "AWS",
    skillColor: "#FF9900",
    textColor: "#000000",
    techType: "other",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
  {
    id: 11,
    name: "Vercel",
    skillColor: "#000000",
    textColor: "#FFFFFF",
    techType: "other",
    logo: "https://pipedream.com/s.v0/app_XaLh2x/logo/orig",
  },
  {
    id: 12,
    name: "Git",
    skillColor: "#F05032",
    textColor: "#FFFFFF",
    techType: "other",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
  },
  {
    id: 13,
    name: "GitHub",
    skillColor: "#181717",
    textColor: "#FFFFFF",
    techType: "other",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
  {
    id: 14,
    name: "SQL",
    skillColor: "#4479A1",
    textColor: "#FFFFFF",
    techType: "backend",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
  },
  {
    id: 15,
    name: "Webflow",
    skillColor: "#4353FF",
    textColor: "#FFFFFF",
    techType: "other",
    logo: "https://cdn.prod.website-files.com/5f15081919fdf673994ab5fd/651f24a499bc8356ba844e0c_Webflow-Logo.svg",
  },
  {
    id: 16,
    name: "WordPress",
    skillColor: "#21759B",
    textColor: "#FFFFFF",
    techType: "other",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
  }

];
