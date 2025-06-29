import { FaRegFolder } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/projectsData";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="mb-16 md:relative md:left-1/2 md:w-screen md:-translate-x-1/2 md:px-5"
    >
      {/* Little hack to break the max-w of app component */}
      <SectionTitle>
        <FaRegFolder className="my-auto mr-3" />
        PROJECTS
      </SectionTitle>
      <ul className="mt-5 flex flex-wrap items-stretch justify-center gap-3 lg:mx-auto lg:max-w-[1100px]">
        {projects.map((project) => (
          <li
            key={project.name}
            className="flex max-w-[350px] flex-[1_1_300px]"
          >
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
