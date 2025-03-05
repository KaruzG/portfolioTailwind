import { FaRegFolder } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/projectsData";


const ProjectsSection = () => {
  return (
    <section id="projects" className="mb-16">
      <SectionTitle>
        <FaRegFolder className="my-auto mr-3" />
        PROJECTS
      </SectionTitle>
      <ul className="mt-5 flex flex-col gap-3">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
