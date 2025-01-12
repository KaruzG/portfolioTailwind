import { Project } from "../types/Project";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="project-card">
      <img src={project.img} alt={`${project.title} Image`} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul>
        {project.stack.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2" style={{ color: item.color }}>
              {item.icon}
            </span>
            {item.tech}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => window.open(project.previewLink, "_blank")}>Preview</button>
        <button onClick={() => window.open(project.codeLink, "_blank")}>Code</button>
      </div>
    </div>
  );
};

export default ProjectCard;
