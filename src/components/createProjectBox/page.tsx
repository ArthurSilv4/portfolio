import Image from 'next/image';
import Link from 'next/link';

interface CreateProjectBoxProps {
  name: string;
  client: string;
  link: string;
  image: string;
  description: string;
  slug: string;
  imageTec: string;
}

export function createProjectBox(array: CreateProjectBoxProps[]) {
  return array.map((obj, index) => (
    <div
      key={index}
      className="h-full w-full flex items-center justify-center "
    >
      <div className="mb-16 bg-gradient-to-r from-blue-700 to-cyan-400 p-2 rounded-xl min-h-[300px]">
        <div className="bg-white rounded  w-full h-full min-h-[300px] ">
          <Link href={`/${obj.slug}`} className="h-full w-full">
            <Image
              src={obj.image}
              height={300}
              width={300}
              alt={obj.name}
              className="h-full w-full saturate-[.85] hover:saturate-100  p-2 rounded"
            />
          </Link>

          <div className="text-black m-auto">
            <p className="text-center text-xs font-semibold uppercase text-black/70 m-auto">
              {obj.client}
            </p>
            <Link href={`/${obj.slug}`} className="h-full w-full">
              <h1 className=" text-center text-lg font-extrabold uppercase">
                {obj.name}
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ));
}
