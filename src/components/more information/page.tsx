import Link from 'next/link';

export function MoreInformation({ url }: { url: string }) {
  return (
    <p className="text-black/70 text-center font-extrabold uppercase underline decoration-solid">
      Veja mais Projetos clicando
      {
        <Link href={url} className="text-blue-700 ml-1">
          aqui
        </Link>
      }
    </p>
  );
}
