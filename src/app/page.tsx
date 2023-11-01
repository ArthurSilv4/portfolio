import Link from 'next/link';

import { SocialMedia } from '../components/socialMedia';
import { createProjectBox } from 'components/createProjectBox/page';
import { MoreInformation } from 'components/more information/page';

import { Projects } from 'projects/page';

export default function Home() {
  const projectBox = createProjectBox(Projects());

  return (
    <main className="h-full w-full text-white">
      <section className="h-screen flex justify-center items-center bg-gradient-radial from-cyan-500 to-blue-500">
        <div className="max-w-[600px] mx-4 ">
          <div className="h-full w-full grid grid-cols-5">
            <h3 className="col-span-5 text-base font-extrabold md:text-lg">
              OI 👋 EU SOU O ARTHUR
            </h3>
            <h1 className="col-span-3 text-5xl font-extrabold md:text-6xl">
              WEB
            </h1>
            <div className="col-span-2 flex justify-center items-center">
              <SocialMedia />
            </div>
            <h1 className="col-span-3 text-5xl font-extrabold md:text-6xl">
              DEVELOPER
            </h1>
            <div className="col-span-4 col-start-2">
              <p className="h-full w-full indent-8 font-semibold text-white/75 text-xs md:text-sm">
                TENHO 19 ANOS SOU CIENTISTA DE DADOS E DESENVOLVEDOR FRONT-END
                COM 1 ANO DE EXPERIENCIA FREELANCER.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen h-full w-full pb-12">
        <div className="bg-gradient-to-b from-blue-500 h-2" />
        <div className="min-h-screen h-full w-full flex justify-center items-center">
          <div className="max-w-[1000px] mt-16 px-4">
            <div className="flex flex-col">
              <h1 className="text-3xl text-center md:text-4xl font-extrabold bg-gradient-to-r from-blue-700 to-cyan-400 text-transparent bg-clip-text">
                MELHORES PROJETOS
              </h1>

              <div className="m-auto mt-16">
                <div className="h-full w-full md:grid md:grid-cols-2 md:gap-14">
                  {projectBox}
                </div>
              </div>
            </div>
          </div>
        </div>
        <MoreInformation url="/" text="VEJA MAIS PROJETOS CLICANDO" />
      </section>
    </main>
  );
}
