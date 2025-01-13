import { Project } from "../types/Project";
import { TbWorld } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io5";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="rounded-2xl bg-primary p-3">
      <img
        className="mb-3 rounded-t-lg"
        src={project.img}
        alt={`${project.title} Image`}
      />
      <ul className="flex items-center gap-2 mb-1">
        {project.stack.map((item, index) => (
          <li
            key={index}
            className="flex items-center rounded-full bg-blue-800 p-1 px-2"
          >
            <span className="mr-2" style={{ color: item.color }}>
              {item.icon}
            </span>
            {item.tech}
          </li>
        ))}
      </ul>
      <h3 className="text-2xl font-bold">{project.title}</h3>
      <p className="mb-3 text-lg text-secondary">{project.description}</p>
      <div className="flex">
        <button
          className="flex justify-center gap-2 bg-grayButton mr-3 rounded-lg p-6 text-xl font-semibold shadow-lg"
          onClick={() => window.open(project.previewLink, "_blank")}
        >
          <TbWorld className="my-auto" size={26}/>
          Preview
        </button>
        <button 
        className="flex justify-center gap-2 bg-grayButton mr-3 rounded-lg p-6 text-xl font-semibold shadow-lg"
        onClick={() => window.open(project.codeLink, "_blank")}>
          <IoLogoGithub className="my-auto" size={26}/>
          Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
