import { Project } from "../types/Project";
import { TbWorld } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io5";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-primary p-3 md:mx-auto md:max-w-xl">
      <img
        className="mb-3 h-72 w-full rounded-t-lg object-cover md:rounded-lg"
        src={project.img}
        alt={`${project.name} Image`}
      />
      <ul className="mb-1 inline-flex flex-wrap items-center gap-2">
        {project.techStack.map((tech) => (
          <li
            key={tech.id}
            className="flex items-center rounded-full p-1 px-2"
            style={{ backgroundColor: tech.skillColor }}
          >
            <span className="mr-2">
              <img
                className="h-5 max-w-5 drop-shadow"
                src={tech.logo}
                alt={tech.name}
              />
            </span>
            {tech.name}
          </li>
        ))}
      </ul>
      <h3 className="text-2xl font-bold">{project.name}</h3>
      <p className="mb-3 text-lg text-secondary">{project.description}</p>
      <div className="mt-auto flex">
        {!project.website ? null : (
          <button
            className="mr-3 flex justify-center gap-2 rounded-lg bg-grayButton p-6 text-xl font-semibold shadow-lg transition-colors hover:bg-grayButtonHover"
            onClick={() =>
              project.website && window.open(project.website, "_blank")
            }
          >
            <TbWorld className="my-auto" size={26} />
            Preview
          </button>
        )}
        {!project.github ? null : (
          <button
            className="mr-3 flex justify-center gap-2 rounded-lg bg-grayButton p-6 text-xl font-semibold shadow-lg transition-colors hover:bg-grayButtonHover"
            onClick={() =>
              project.github && window.open(project.github, "_blank")
            }
          >
            <IoLogoGithub className="my-auto" size={26} />
            Code
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
