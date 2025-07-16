import { Project } from "../types/Project";
import { TbWorld } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io5";
import { motion, Variants } from "motion/react";

const ProjectCard = ({ project }: { project: Project }) => {
  const animationProps: Variants = {
      whileInView: { opacity: 100, rotate: 0, y: 0 },
      initial: {         
        y: 150,
        transition: {
            type: "spring",
            bounce: 0.1,
            duration: 1.2,
        }
    }
  };

  return (
    <motion.div viewport={{ once: true }} {...animationProps} className="flex h-full flex-col rounded-2xl bg-primary p-3 md:mx-auto md:max-w-md">
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
      <div className="my-auto">
        <h3 className="text-2xl font-bold mt-">{project.name}</h3>
        <p className="mb-3 text-lg text-secondary">{project.description}</p>
      </div>
      <div className="flex">
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
    </motion.div>
  );
};

export default ProjectCard;
