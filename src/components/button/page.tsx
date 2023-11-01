import Link from 'next/link';

export function Button({ text, url }: { text: string; url: string }) {
  return (
    <button className="bg-gradient-to-r from-blue-700 to-cyan-400 rounded-xl p-2">
      <div className="bg-white rounded-md p-2">
        <Link href={url} className="w-full h-full">
          <span className="text-xl font-extrabold bg-gradient-to-r from-blue-800 to-cyan-500 text-transparent bg-clip-text">
            {text}
          </span>
        </Link>
      </div>
    </button>
  );
}
