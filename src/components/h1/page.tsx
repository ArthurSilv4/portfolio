interface H1Props {
  text: string;
}

export function H1({ text }: H1Props) {
  return (
    <h1 className="text-3xl text-center md:text-4xl font-extrabold bg-gradient-to-r from-blue-700 to-cyan-400 text-transparent bg-clip-text">
      {text}
    </h1>
  );
}
