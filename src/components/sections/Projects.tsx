import { ProjectCard } from "../ProjectCard";
import { getAllProjects } from "../../lib/projects";

export function Projects() {
  const projects = getAllProjects();

  return (
    <section id="projects" className=" py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <h2 className="text-4xl font-semibold font-sans mb-8 text-center">
          Projetos mais recentes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              category={project.category}
              image={project.image}
              href={`/projeto/${project.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
