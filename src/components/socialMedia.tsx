import Link from 'next/link';
import { BsLinkedin, BsGithub, BsFillFileTextFill } from 'react-icons/bs';

export function SocialMedia() {
  return (
    <>
      <Link
        href={'https://www.linkedin.com/in/arthur-souza-dev//'}
        target="_blank"
      >
        <BsLinkedin size={30} color="" className=" rounded hover:bg-white/10" />
      </Link>
      <Link
        href={'https://github.com/ArthurSilv4'}
        target="_blank"
        className="mx-4"
      >
        <BsGithub size={30} color="" className=" rounded hover:bg-white/10" />
      </Link>
      <Link href={'Currículo - Arthur De Souza.pdf'} target="_blank">
        <BsFillFileTextFill
          size={30}
          color=""
          className=" rounded hover:bg-white/10"
        />
      </Link>
    </>
  );
}
