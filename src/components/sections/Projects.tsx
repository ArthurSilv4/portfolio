import { Card, CardContent, CardDescription } from "../ui/card";

export function Projects() {
  const projects = [
    {
      id: 1,
      description:
        "Plataforma completa de e-commerce com carrinho, pagamentos e administração",
      link: "http://127.0.0.1:5173/projeto/exemplo",
    },
    {
      id: 2,
      description:
        "API RESTful para gestão de recursos com autenticação JWT e documentação Swagger",
      link: "https://example.com/project1",
    },
    {
      id: 3,
      description:
        "Dashboard interativo para visualização de dados e métricas em tempo real",
      link: "https://example.com/project1",
    },
    {
      id: 4,
      description:
        "Arquitetura de microserviços com mensageria e event sourcing",
      link: "https://example.com/project1",
    },
    {
      id: 5,
      description:
        "Aplicativo mobile multiplataforma com sincronização offline",
      link: "https://example.com/project1",
    },
    {
      id: 6,
      description:
        "Plataforma de monitoramento de aplicações com alertas e logs centralizados",
      link: "https://example.com/project1",
    },
  ];

  return (
    <section id="projects" className=" py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <h2 className="text-4xl font-semibold font-sans mb-8 text-center">
          Projetos mais recentes
        </h2>

        <div className="flex flex-wrap gap-6 justify-center items-center">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.id}
              className="w-full sm:w-95"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="h-80 rounded-md">
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
