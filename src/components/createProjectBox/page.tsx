import Image from 'next/image';
import Link from 'next/link';

interface createProjectBoxProps {
  name: string;
  client: string;
  link: string;
  image: string;
  description: string;
}

export function createProjectBox(array: createProjectBoxProps[]) {
  return array.map((obj, index) => (
    <div
      key={index}
      className="h-full w-full flex items-center justify-center "
    >
      <div className="mb-16">
        <Link href={obj.link} className="h-full w-full">
          <Image
            src={obj.image}
            height={0}
            width={0}
            alt={obj.name}
            className="h-full w-full saturate-[.85] hover:saturate-100"
          />
        </Link>

        <div className="text-black mt-2">
          <p className="text-center text-xs font-semibold uppercase text-black/70">
            {obj.client}
          </p>
          <h1 className=" text-center text-lg font-extrabold uppercase">
            {obj.name}
          </h1>
          <p className=" text-justify text-sm">{obj.description}</p>
        </div>
      </div>
    </div>
  ));
}
