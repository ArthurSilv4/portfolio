import Image from 'next/image';
import Link from 'next/link';

import { H1 } from 'components/h1/page';
import { SocialMedia } from 'components/socialMedia';

export function SectionProjectDevelopment({ projectsFillter }: any) {
  return (
    <div className="max-w-[1000px] m-auto">
      <H1 text="DESENVOLVIMENTO DO PROJETO" />

      <div className="mt-10 max-w-[2000px] m-auto">
        <Image
          src={projectsFillter.imagePrototype}
          height={1000}
          width={1000}
          alt={projectsFillter.name}
          className="h-full w-full"
        />
      </div>

      <div className="mt-10">
        <p className="text-justify md:text-lg">
          {projectsFillter.textPrototype}
        </p>
      </div>

      <div className="mt-10 max-w-[400px] max-h-[400px] m-auto">
        <Image
          src={projectsFillter.imageTec}
          height={1000}
          width={1000}
          alt={projectsFillter.name}
        />
      </div>

      <div className="mt-10 ">
        <p className="text-justify md:text-lg">
          {projectsFillter.textTechnology}
        </p>
      </div>

      <div className="flex mt-10">
        <div className="m-auto">
          <div className="flex gap-5">
            <H1 text="VAMOS" />
            <div className="flex">
              <SocialMedia />
            </div>
          </div>
          <H1 text="NOS CONECTAR" />
        </div>
      </div>
    </div>
  );
}
