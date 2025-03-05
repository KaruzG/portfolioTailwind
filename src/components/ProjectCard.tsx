import { Project } from "../types/Project";
import { TbWorld } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io5";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="rounded-2xl bg-primary p-3">
      <img
        className="mb-3 rounded-t-lg"
        src={project.img}
        alt={`${project.name} Image`}
      />
      <ul className="inline-flex flex-wrap items-center gap-2 mb-1">
        {project.techStack.map((tech) => (
          <li
            key={tech.id}
            className="flex items-center rounded-full p-1 px-2"
            style={{ backgroundColor: tech.skillColor }}
          >
            <span className="mr-2">
              <img className="max-w-5 h-5 drop-shadow" src={tech.logo} alt={tech.name} />
            </span>
            {tech.name}
          </li>
        ))}
      </ul>
      <h3 className="text-2xl font-bold">{project.name}</h3>
      <p className="mb-3 text-lg text-secondary">{project.description}</p>
      <div className="flex">
        {!project.website ? null : (
          <button
            className="flex justify-center gap-2 bg-grayButton mr-3 rounded-lg p-6 text-xl font-semibold shadow-lg hover:bg-grayButtonHover transition-colors"
            onClick={() => project.website && window.open(project.website, "_blank")}
          >
            <TbWorld className="my-auto" size={26}/>
            Preview
          </button>
        )}
        {!project.github ? null : (
          <button
            className="flex justify-center gap-2 bg-grayButton mr-3 rounded-lg p-6 text-xl font-semibold shadow-lg hover:bg-grayButtonHover transition-colors"
            onClick={() => project.github && window.open(project.github, "_blank")}
          >
            <IoLogoGithub className="my-auto" size={26}/>
            Code
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
