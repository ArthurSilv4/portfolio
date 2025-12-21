import { useParams } from "react-router-dom";

const projetos = {
  "exemplo": {
    titulo: "Projeto Exemplo",
    descricao: "Esta é uma página dedicada ao Projeto Exemplo. Aqui você pode detalhar as tecnologias, desafios e resultados do projeto."
  },
  "outro": {
    titulo: "Outro Projeto",
    descricao: "Descrição do outro projeto."
  }
};

export default function Projeto() {
  const { id } = useParams<{ id: keyof typeof projetos }>();
  const projeto = id ? projetos[id] : undefined;

  if (!projeto) {
    return <div className="container mx-auto py-16">Projeto não encontrado.</div>;
  }

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-2xl font-bold mb-4">{projeto.titulo}</h1>
      <p className="text-muted-foreground mb-8">{projeto.descricao}</p>
      {/* Adicione mais campos conforme necessário */}
    </div>
  );
}
