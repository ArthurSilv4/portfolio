import Link from 'next/link';

export function SectionProject({ projectBox }: any) {
  return (
    <section className="min-h-screen h-full w-full pb-12">
      <div className="bg-gradient-to-b from-blue-500 h-2" />
      <div className="min-h-screen h-full w-full flex justify-center items-center">
        <div className="max-w-[1200px] mt-16 px-4">
          <div className="flex flex-col">
            <h1 className="text-3xl text-center md:text-4xl font-extrabold bg-gradient-to-r from-blue-700 to-cyan-400 text-transparent bg-clip-text">
              MELHORES PROJETOS
            </h1>

            <div className="m-auto mt-16">
              <div className="h-full w-full md:grid md:grid-cols-3 md:gap-14">
                {projectBox}
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-black/70 text-center font-extrabold uppercase underline decoration-solid">
        Veja mais Projetos clicando
        {
          <Link
            href={'https://github.com/ArthurSilv4'}
            className="text-blue-700 ml-1"
          >
            aqui
          </Link>
        }
      </p>
    </section>
  );
}
