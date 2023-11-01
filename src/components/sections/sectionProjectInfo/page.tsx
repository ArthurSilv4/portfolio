import Image from 'next/image';
import Link from 'next/link';

import { MoreInformation } from 'components/more information/page';

export function SectionProjectInfo({ projectsFillter }: any) {
  return (
    <div className="w-full h-full">
      <div className="min-h-[200px]">
        <Image
          src={projectsFillter.image}
          height={200}
          width={200}
          alt={projectsFillter.name}
          className="w-full h-full"
        />
      </div>

      <div className="mt-5">
        <h1 className="text-center font-extrabold">{projectsFillter.name}</h1>
        <p className=" text-justify">{projectsFillter.description}</p>
        <div className="mt-5">
          <MoreInformation url={projectsFillter.link} />
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-center font-extrabold">Tecnologias ultilizadas</h2>
        <div className="h-[150px]">
          <Image
            src={projectsFillter.imageTec}
            width={200}
            height={200}
            alt={projectsFillter.name}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
