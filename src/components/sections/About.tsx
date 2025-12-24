import { BentoCard } from "../ui/BentoCard";
import { Badge } from "../ui/badge";

export function About() {
  const skills = [
    ".NET Core",
    "ASP.NET Web API",
    "Entity Framework",
    "SQL Server",
    "Azure",
    "Docker",
    "Redis",
    "Git & CI/CD",
    "Azure DevOps",
    "Microsoft Agent Framework",
    "MCP",
    "React",
    "TypeScript",
    "C#",
    "AI Integration",
    "Azure OpenAI"
  ];

  return (
    <section id="about" className="py-24 bg-[#0A0A0A] border-b border-white/5">
      <div className="container mx-auto px-5">

        <div className="mb-12">
          <span className="text-[15px] font-mono text-zinc-500 mb-2 block">
            /about
          </span>
          <h2 className="text-[32px] md:text-[40px] leading-tight font-normal text-white">
            Engineering & Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Bio Card - Spans 2 cols */}
          <BentoCard
            title="Minha Trajetória"
            className="md:col-span-2"
            description=""
          >
            <div className="mt-2 text-zinc-400 leading-relaxed text-lg">
              <p className="mb-4">
                Sou um desenvolvedor .NET apaixonado por construir sistemas escaláveis e de alta performance.
                Com foco em arquitetura limpa, transformo requisitos complexos em software robusto e manutenível.
              </p>
              <p>
                Atualmente, exploro a interseção entre engenharia de software tradicional e Inteligência Artificial,
                buscando novas formas de otimizar fluxos de trabalho e criar experiências digitais inteligentes.
              </p>
            </div>
          </BentoCard>

          {/* 2. Skills Card */}
          <BentoCard title="Stack Tecnológica" className="md:col-span-1">
            <div className="flex flex-wrap gap-2 mt-4">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-zinc-800/50 text-zinc-300 ring-1 ring-inset ring-white/10 hover:bg-zinc-800 transition-colors rounded-md px-2.5 py-1.5 font-medium"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </BentoCard>

          {/* 3. Timeline / Experience - Full Width or Spanned? Let's do Full Width for clarity */}
          <BentoCard title="Timeline" className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6">
              <div className="relative pl-6 border-l border-zinc-800">
                <span className="text-xs font-mono text-zinc-500 mb-1 block">2017</span>
                <h4 className="text-sm font-semibold text-white">Início</h4>
                <p className="text-xs text-zinc-400 mt-1">Lógica & Primeiros Projetos C#</p>
              </div>
              <div className="relative pl-6 border-l border-zinc-800">
                <span className="text-xs font-mono text-zinc-500 mb-1 block">2019</span>
                <h4 className="text-sm font-semibold text-white">.NET & Web</h4>
                <p className="text-xs text-zinc-400 mt-1">APIs, Bancos de Dados, Web Apps</p>
              </div>
              <div className="relative pl-6 border-l border-zinc-800">
                <span className="text-xs font-mono text-zinc-500 mb-1 block">2021</span>
                <h4 className="text-sm font-semibold text-white">Cloud & DevOps</h4>
                <p className="text-xs text-zinc-400 mt-1">Azure, Docker, CI/CD Pipelines</p>
              </div>
              <div className="relative pl-6 border-l border-white/20">
                <span className="text-xs font-mono text-green-400 mb-1 block">2023 - Presente</span>
                <h4 className="text-sm font-semibold text-white">Senior & AI</h4>
                <p className="text-xs text-zinc-400 mt-1">Arquitetura, Liderança Técnica, IA</p>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
