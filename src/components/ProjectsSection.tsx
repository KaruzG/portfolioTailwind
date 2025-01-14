import { FaRegFolder } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import { Project } from "../types/Project";
import SectionTitle from "./SectionTitle";

const project1: Project = {
  img: "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg",
  title: "SKATESPOTSVLC",
  description:
    "Web app with info about my city and an admin panel to upload new markers with photos and descriptions",
  stack: [
    { icon: "🔥", tech: "React", color: "red" },
    { icon: "🌐", tech: "TypeScript", color: "blue" },
  ],
  previewLink: "https://www.example.com",
  codeLink: "https://www.example.com",
};

const project2: Project = {
  img: "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg",
  title: "Project 1",
  description: "Description of Project 1",
  stack: [
    { icon: "🔥", tech: "Tech 1", color: "red" },
    { icon: "🌐", tech: "Tech 2", color: "blue" },
  ],
  previewLink: "https://www.example.com",
  codeLink: "https://www.example.com",
};

const ProjectsSection = () => {
  return (
    <>
      <SectionTitle>
        <FaRegFolder className="mr-3 my-auto" />
        PROJECTS
      </SectionTitle>
      <ul className="flex flex-col gap-3">
        <ProjectCard project={project1} />
        <ProjectCard project={project2} />
      </ul>
    </>
  );
};

export default ProjectsSection;
