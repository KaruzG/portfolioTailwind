import { FaRegFolder } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import { Project } from "../types/Project";

const project1: Project = {
  img: "https://via.placeholder.com/150",
  title: "Project 1",
  description: "Description of Project 1",
  stack: [
    { icon: "🔥", tech: "Tech 1", color: "red" },
    { icon: "🌐", tech: "Tech 2", color: "blue" },
  ],
  previewLink: "https://www.example.com",
  codeLink: "https://www.example.com",
};

const project2: Project = {
  img: "https://via.placeholder.com/150",
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
      <h2 className="flex text-2xl font-bold">
        <FaRegFolder className="mr-3" />
        PROJECTS
      </h2>
      <ul className="flex flex-col gap-3">
        <ProjectCard project={project1} />
        <ProjectCard project={project2} />
      </ul>
    </>
  );
};

export default ProjectsSection;
