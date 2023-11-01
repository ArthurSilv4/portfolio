import Image from 'next/image';
import Link from 'next/link';

import { Button } from 'components/button/page';
import { SectionProjectDevelopment } from 'components/sections/sectionProjectDevelopment/page';
import { SectionProjectInfo } from 'components/sections/sectionProjectInfo/page';

import { Projects } from 'projects/page';

export default function Page({ params }: { params: { slug: string } }) {
  const projects = Projects();
  const projectsFillter = projects.find(
    (project) => project.slug === params.slug
  );

  if (!projectsFillter) {
    return (
      <main>
        <h1>Projeto nao encontrado</h1>
      </main>
    );
  }

  return (
    <main className="w-full h-full p-2">
      <div className="absolute">
        <Button text="Voltar" url="/" />
      </div>

      <div className="mt-20 md:flex">
        <section className="md:hidden mb-10">
          <SectionProjectInfo projectsFillter={projectsFillter} />
        </section>

        <div className="bg-zinc-100 min-w-screen h-1 rounded-md mx-2 md:hidden mb-10"></div>

        <section className="md:min-w-[70%] min-h-screen">
          <SectionProjectDevelopment projectsFillter={projectsFillter} />
        </section>

        <div className="bg-zinc-100 min-h-screen w-5 rounded-md mx-2 hidden md:block"></div>

        <section className="hidden md:block">
          <SectionProjectInfo projectsFillter={projectsFillter} />
        </section>
      </div>
      <div className="relative md:m-0 mt-20">
        <div className="absolute bottom-0 right-0">
          <Button text="Top" url="#" />
        </div>
      </div>
    </main>
  );
}
