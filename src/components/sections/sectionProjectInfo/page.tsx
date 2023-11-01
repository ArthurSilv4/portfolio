import Image from 'next/image';

import { MoreInformation } from 'components/more information/page';

export function SectionProjectInfo({ projectsFillter }: any) {
  return (
    <div className="w-full h-full">
      <div className="min-h-[200px]">
        <Image
          src={projectsFillter.image}
          height={2000}
          width={2000}
          alt={projectsFillter.name}
          className="w-full h-full"
        />
      </div>

      <div className="mt-5">
        <h1 className="text-center font-extrabold">{projectsFillter.name}</h1>
        <p className=" text-justify">{projectsFillter.description}</p>
        <div className="mt-5">
          <MoreInformation
            text="Abra o projeto clicando"
            url={projectsFillter.link}
          />
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-center font-extrabold">Tecnologias ultilizadas</h2>
        <div className="max-h-[400px] max-w-[400px] m-auto">
          <Image
            src={projectsFillter.imageTec}
            width={2000}
            height={2000}
            alt={projectsFillter.name}
            className="w-full h-full bg-cover bg-center "
          />
        </div>
      </div>
    </div>
  );
}
