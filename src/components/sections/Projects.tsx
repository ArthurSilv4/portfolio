import { ProjectCard } from "../ProjectCard";
import { getAllProjects } from "../../lib/projects";

export function Projects() {
  const projects = getAllProjects();

  return (
    <section id="projects" className="py-24 lg:py-32 bg-[#0A0A0A]">
      <div className="container mx-auto px-5">
        <div className="mb-12 md:mb-16">
          <span className="text-[15px] font-mono text-zinc-500 mb-2 block">
            /projetos
          </span>
          <h2 className="text-[32px] md:text-[40px] leading-tight font-normal text-white tracking-tight">
            Projetos Selecionados
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              category={project.category}
              image={project.image}
              href={`/projeto/${project.slug}`}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
