import { useParams, Link } from "react-router-dom";
import { Separator } from "../components/ui/separator";
import { ProjectCard } from "../components/ProjectCard";
import { getProjectBySlug, getAllProjects } from "../lib/projects";
import ReactMarkdown from 'react-markdown';

export default function Projeto() {
  const { id } = useParams<{ id: string }>();
  const projeto = id ? getProjectBySlug(id) : undefined;

  // Get other projects, excluding the current one
  const outrosProjetos = getAllProjects()
    .filter((p) => p.slug !== id)
    .slice(0, 3);

  if (!projeto) {
    return (
      <div className="min-h-screen bg-[#0B0B0B] text-white flex items-center justify-center flex-col">
        <h1 className="text-4xl font-bold mb-4">Projeto não encontrado</h1>
        <Link to="/" className="text-blue-500 hover:text-blue-400">Voltar ao Início</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent z-10" />
        <img
          src={projeto.image}
          alt={projeto.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20">
          <div className="container mx-auto">
            <span className="text-blue-400 tracking-widest uppercase text-sm font-semibold mb-2 block animate-fade-in-up">
              {projeto.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold font-sans mb-4 tracking-tight animate-fade-in-up animation-delay-100">
              {projeto.title}
            </h1>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Main Content Column */}
          <div className="lg:col-span-8">
            <div className="text-lg text-gray-300 leading-relaxed">
              <p className="text-xl text-gray-400 font-light mb-8 border-l-4 border-blue-500 pl-4">
                {projeto.description}
              </p>
              <Separator className="my-8 bg-gray-800" />

              {/* Markdown Content */}
              <div className="prose prose-invert max-w-none">
                <ReactMarkdown>{projeto.content}</ReactMarkdown>
              </div>
            </div>
          </div>

          {/* Sidebar / Metadata */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-[#151515] p-6 rounded-lg border border-white/5">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Detalhes do Projeto</h3>
              <ul className="space-y-4 text-sm">
                {projeto.technologies && projeto.technologies.length > 0 && (
                  <li className="flex flex-col gap-2">
                    <span className="text-gray-400">Tecnologias</span>
                    <div className="flex flex-wrap gap-2">
                      {projeto.technologies.map(tech => (
                        <span key={tech} className="bg-white/10 px-2 py-1 rounded text-xs">{tech}</span>
                      ))}
                    </div>
                  </li>
                )}
                {projeto.date && (
                  <li className="flex justify-between">
                    <span className="text-gray-400">Data</span>
                    <span>{projeto.date}</span>
                  </li>
                )}
                <li className="flex justify-between">
                  <span className="text-gray-400">Cliente</span>
                  <span>Personal Project</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* More Projects Gallery */}
        <section className="mt-32">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Mais Projetos</h2>
            <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">
              Voltar ao Início
            </Link>
          </div>
          <Separator className="mb-8 bg-gray-800" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outrosProjetos.map((p) => (
              <ProjectCard
                key={p.slug}
                title={p.title}
                category={p.category}
                image={p.image}
                href={`/projeto/${p.slug}`}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
