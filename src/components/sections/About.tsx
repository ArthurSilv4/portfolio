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
    "Semantic Kernel",
    "Microsoft Agent Framework",
    "MCP",
    "Qdrant",
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
            /sobre
          </span>
          <h2 className="text-[32px] md:text-[40px] leading-tight font-normal text-white">
            Engenharia & Arquitetura
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BentoCard
            title="Minha Trajetória"
            className="md:col-span-2"
            description=""
          >
            <div className="mt-2 text-zinc-400 leading-relaxed text-lg">
              <p className="mb-4">
                Sou desenvolvedor .NET e atuo principalmente no backend, trabalhando com sistemas que precisam escalar,
                performar bem e continuar fáceis de manter ao longo do tempo. Priorizo decisões de arquitetura antes da
                implementação, buscando soluções que façam sentido no longo prazo.
              </p>
              <p>
                Nos últimos projetos, tenho integrado soluções de Inteligência Artificial ao software tradicional,
                sempre com foco em resolver problemas reais e melhorar o dia a dia de quem usa o sistema.
              </p>
            </div>
          </BentoCard>

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

          <BentoCard title="Timeline" className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6">
              <div className="relative pl-6 border-l border-zinc-800">
                <span className="text-xs font-mono text-zinc-500 mb-1 block">abr de 2024 - set de 2024</span>
                <h4 className="text-sm font-semibold text-white">Professor de informatica</h4>
                <p className="text-xs text-zinc-400 mt-1">
                  Atuei como professor de informática e criação de jogos, ensinando crianças
                  conceitos de lógica de programação por meio do desenvolvimento de jogos no
                  Roblox (Lua) e no Construct.
                </p>
              </div>
              <div className="relative pl-6 border-l border-zinc-800">
                <span className="text-xs font-mono text-zinc-500 mb-1 block">out de 2024 - mar de 2025</span>
                <h4 className="text-sm font-semibold text-white">Analista de sistema</h4>
                <p className="text-xs text-zinc-400 mt-1">
                  Participei do desenvolvimento de um novo produto, contribuindo desde a
                  concepção até a entrega. Fui responsável pela migração de um sistema legado
                  Win32 para Linux, utilizando LVGL para criação de interfaces gráficas mais
                  modernas e otimizadas.
                </p>
              </div>
              <div className="relative pl-6 border-l border-zinc-800">
                <span className="text-xs font-mono text-zinc-500 mb-1 block">mar de 2025 - dez de 2025</span>
                <h4 className="text-sm font-semibold text-white">Suporte Tecnico</h4>
                <p className="text-xs text-zinc-400 mt-1">
                  Prestei suporte técnico e fui responsável pelo desenvolvimento de soluções internas,
                  incluindo a criação de um microserviço de Inteligência Artificial e do servidor MCP
                  integrado ao sistema ERP, utilizando C# e ASP.NET Core com Semantic Kernel.
                </p>
              </div>
              <div className="relative pl-6 border-l border-white/20">
                <span className="text-xs font-mono text-green-400 mb-1 block">dez de 2025 - Presente</span>
                <h4 className="text-sm font-semibold text-white">Analista de sistema</h4>
                <p className="text-xs text-zinc-400 mt-1">
                  Trabalho no desenvolvimento e manutenção de sistemas, realizando correções,
                  melhorias contínuas e apoiando a evolução do produto.                
                </p>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
