import Link from 'next/link';
import { BsLinkedin, BsGithub, BsFillFileTextFill } from 'react-icons/bs';

export function SocialMedia() {
  return (
    <>
      <Link href={'https://www.linkedin.com/in/arthur-de-souza-dev/'}>
        <BsLinkedin size={30} color="" />
      </Link>
      <Link href={'https://github.com/ArthurSilv4'} className="mx-4">
        <BsGithub size={30} color="" />
      </Link>
      <Link href={''}>
        <BsFillFileTextFill size={30} color="" />
      </Link>
    </>
  );
}
