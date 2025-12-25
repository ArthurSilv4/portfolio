import { useParams, Link } from "react-router-dom";
import { Separator } from "../components/ui/separator";
import { ProjectCard } from "../components/ProjectCard";
import { getProjectBySlug, getAllProjects } from "../lib/projects";
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Projeto() {
  const { id } = useParams<{ id: string }>();

  const projeto = id ? getProjectBySlug(id) : undefined;

  const outrosProjetos = getAllProjects()
    .filter((p) => p.slug !== id)
    .slice(0, 3);

  if (!projeto) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center flex-col">
        <h1 className="text-4xl font-bold mb-4">Projeto não encontrado</h1>
        <Link to="/">
          <Button variant="outline">Voltar ao Início</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 pt-24 pb-16">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 glow-purple opacity-20 pointer-events-none" />

      <main className="container mx-auto px-4 md:px-6 relative z-10">

        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Projetos
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">

          <div className="lg:col-span-8">

            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-0.5 text-xs font-semibold text-purple-400">
                  {projeto.category}
                </span>
                {projeto.date && (
                  <span className="inline-flex items-center text-xs text-zinc-500">
                    <Calendar className="mr-1 h-3 w-3" /> {projeto.date}
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
                {projeto.title}
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-zinc-400 leading-relaxed border-l-2 border-zinc-800 pl-4">
                {projeto.description}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-2 mb-10 overflow-hidden">
              <img
                src={projeto.image}
                alt={projeto.title}
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>

            <div className="markdown-content max-w-none">
              <ReactMarkdown>{projeto.content}</ReactMarkdown>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="rounded-2xl border border-white/5 bg-zinc-900/30 p-4 md:p-6 backdrop-blur-md lg:sticky lg:top-24">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Informações</h3>

              <div className="space-y-6">
                {projeto.technologies && projeto.technologies.length > 0 && (
                  <div>
                    <span className="text-xs font-medium text-zinc-500 uppercase block mb-3">Stack</span>
                    <div className="flex flex-wrap gap-2">
                      {projeto.technologies.map(tech => (
                        <span key={tech} className="inline-flex items-center rounded-md bg-zinc-800 px-2 py-1 text-xs font-medium text-zinc-300 ring-1 ring-inset ring-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <Separator className="bg-white/10" />

                <div>
                  {projeto.link && (
                    <>
                      <span className="text-xs font-medium text-zinc-500 uppercase block mb-3">Ações</span>
                      <a href={projeto.link} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-white text-black hover:bg-zinc-200">
                          Visualizar Projeto
                        </Button>
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16 lg:mt-32">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Outros Projetos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
