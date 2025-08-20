import { Project } from "../types/Project";
import { skills } from "./skillsData";
import skateSpotsVLC from "../assets/projects/skatespotsvlc.jpeg";
import karuzFilm from "../assets/projects/karuzfilm.png";
import qrcrypt from "../assets/projects/qrcrypt.png";
import puzzleGame from "../assets/projects/puzzleGame.png";
import pablo from "../assets/projects/pablo.png";

export const projects: Project[] = [
  {
    name: "SKATESPOTSVLC",
    img: skateSpotsVLC,
    description:
      "Web app with info about my city and an admin panel to upload new markers with photos and descriptions",
    techStack: [
      skills[0],
      skills[2],
      skills[7],
      skills[9],
      skills[10],
      skills[11],
      skills[12],
    ],
    github: "https://github.com/KaruzG/skatespotsvlc",
    website: "https://skatespotsvlc.vercel.app/",
  },
  {
    name: "QRCRYPT",
    img: qrcrypt,
    description:
      "TypeScript library to generate encrypted QRs with AES-GCM encryption, Salt and initialization vectors.",
    techStack: [skills[2], skills[7], skills[19]],
    github: "https://github.com/KaruzG/qrcrypt",
    website: "https://www.npmjs.com/package/qrcrypt",
  },
  {
    name: "KARUZFILM",
    img: karuzFilm,
    description:
      "Photography portfolio made with lowcode tools, showcasing works in film and photography.",
    techStack: [skills[16]],
    github: null,
    website: "https://karuzfilm.webflow.io/",
  },
  {
    name: "CREATIVE PORTFOLIO",
    img: pablo,
    description:
      "🛠️ Work In Progress! An interactive portfolio showcasing the projects of Pablo Planells",
    techStack: [skills[1], skills[0], skills[2], skills[6], skills[20]],
    github: "https://github.com/KaruzG/pablo-planells",
    website: "https://pablo-planells.vercel.app/es",
  },
  {
    name: "15 PUZZLE GAME",
    img: puzzleGame,
    description:
      "Vanilla JavaScript game where you can play the classic 15 puzzle game.",
    techStack: [skills[3], skills[4], skills[5]],
    github: "https://github.com/KaruzG/15-Puzzle-Game-JS",
    website: "https://karuzg.github.io/15-Puzzle-Game-JS/",
  },
];
