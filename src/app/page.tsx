import { SocialMedia } from './components/socialMedia';

export default function Home() {
  return (
    <main className="text-white">
      <section className="h-screen flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
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
                TENHO 18 ANOS SOU DESENVOLVEDOR FRONT-END COM 3 MESES DE
                EXPERIENCIA TRABALHANDO COMO FREELANCER.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
