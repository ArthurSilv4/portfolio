import { Card, CardContent, CardTitle } from "../ui/card";

export function About() {
  const skills = [
    {
      title: ".NET Core",
    },
    {
      title: "React",
    },
    {
      title: "Azure",
    },
    {
      title: "SQL Server",
    },
    {
      title: "Git & CI/CD",
    },
    {
      title: "AI",
    },
    {
      title: "Docker",
    },
    {
      title: "Redis",
    },
  ];

  return (
    <section
      id="about"
      className="container mx-auto px-4 lg:px-6 py-16 lg:py-24"
    >
      {/* Skills */}
      <div>
        <h2 className="text-md font-semibold mb-8 text-center">
          Tecnologias e ferramentas ultilizadas diariamente
        </h2>

        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill) => {
            return (
              <Card
                key={skill.title}
                className="rounded-md h-24 w-40 flex items-center justify-center"
              >
                <CardContent>
                  <CardTitle>{skill.title}</CardTitle>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Sobre mim */}
      <div className="mt-16">
        <Card className="rounded-md min-h-150">
          <CardContent>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Texto à esquerda */}
              <div className="flex-1 flex flex-col items-center justify-center text-center md:items-start md:justify-start md:text-left m-auto">
                <h3 className="text-lg font-semibold mb-2">Minha trajetória</h3>
                <p className="text-muted-foreground">
                  Sou desenvolvedor .NET com experiência em projetos escaláveis,
                  arquitetura limpa e foco em qualidade. Atuo com React, Azure,
                  CI/CD e mais.
                </p>
              </div>
              {/* Mapa de Carreira */}
              <div className="flex-1 flex justify-center md:justify-end bg-black/80 p-6 md:p-12 lg:p-20 rounded-md">
                <ol className="relative border-l border-gray-300 dark:border-gray-700 max-w-xs w-full mx-auto">
                  <li className="mb-10 ml-6">
                    <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-8 ring-white dark:ring-gray-900 text-white">1</span>
                    <h4 className="font-semibold">Início na Programação</h4>
                    <p className="text-sm text-muted-foreground">2017 - Primeiros projetos em C# e lógica de programação.</p>
                  </li>
                  <li className="mb-10 ml-6">
                    <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-8 ring-white dark:ring-gray-900 text-white">2</span>
                    <h4 className="font-semibold">.NET & Web</h4>
                    <p className="text-sm text-muted-foreground">2019 - Desenvolvimento de APIs, aplicações web e integração com bancos de dados.</p>
                  </li>
                  <li className="mb-10 ml-6">
                    <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-8 ring-white dark:ring-gray-900 text-white">3</span>
                    <h4 className="font-semibold">Cloud & DevOps</h4>
                    <p className="text-sm text-muted-foreground">2021 - Experiência com Azure, CI/CD, Docker e automação de deploys.</p>
                  </li>
                  <li className="ml-6">
                    <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-8 ring-white dark:ring-gray-900 text-white">4</span>
                    <h4 className="font-semibold">IA & Projetos Atuais</h4>
                    <p className="text-sm text-muted-foreground">2023 - Foco em IA, arquitetura escalável e projetos inovadores.</p>
                  </li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
