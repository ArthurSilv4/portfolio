import Image from 'next/image';
import Link from 'next/link';

import { H1 } from 'components/h1/page';
import { SocialMedia } from 'components/socialMedia';

export function SectionProjectDevelopment({ projectsFillter }: any) {
  return (
    <div className="max-w-[90%] m-auto">
      <H1 text="DESENVOLVIMENTO DO PROJETO" />

      <div className="mt-10 max-w-[2000px] m-auto">
        <Image
          src={projectsFillter.image}
          height={200}
          width={200}
          alt={projectsFillter.name}
          className="h-full w-full"
        />
      </div>

      <div className="mt-10">
        <p className="text-justify md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          inventore, ratione nulla odit repellendus consequatur ullam modi fuga,
          repudiandae, quam tempore. Laudantium, dicta odio quis aut illo enim
          voluptates ut.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Iure inventore, ratione nulla odit repellendus consequatur ullam modi
          fuga, repudiandae, quam tempore. Laudantium, dicta odio quis aut illo
          enim voluptates ut.
        </p>
      </div>

      <div className="mt-10">
        <Image
          src={projectsFillter.imageTec}
          height={200}
          width={200}
          alt={projectsFillter.name}
        />
      </div>

      <div className="mt-10">
        <p className="text-justify md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          inventore, ratione nulla odit repellendus consequatur ullam modi fuga,
          repudiandae, quam tempore. Laudantium, dicta odio quis aut illo enim
          voluptates ut.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Iure inventore, ratione nulla odit repellendus consequatur ullam modi
          fuga, repudiandae, quam tempore. Laudantium, dicta odio quis aut illo
          enim voluptates ut.
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
