import { FaRegFolder } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/projectsData";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative left-1/2 mb-16 w-screen -translate-x-1/2"
    >
      {" "}
      {/* Little hack to break the max-w of app component */}
      <SectionTitle>
        <FaRegFolder className="my-auto mr-3" />
        PROJECTS
      </SectionTitle>
      <ul className="mt-5 flex flex-col gap-3 sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-3 lg:max-w-[1100px] lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
