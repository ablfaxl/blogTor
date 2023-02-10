import Link from 'next/link';
import { RiLoginCircleLine } from 'react-icons/ri';

export const Navbar = () => {
  return (
    <div className="navbar navbar-sticky">
      <div className="navbar-start">
        <Link href={'/'} passHref>
          <p className="navbar-item font-mono text-lg text-[#03C988]">
            BLOG-TOR
          </p>
        </Link>
      </div>
      <div className="navbar-end">
        <Link href={'/login'}>
          <p className="navbar-item text-[#03C988]">
            <RiLoginCircleLine fontSize={30} />
          </p>
        </Link>
      </div>
    </div>
  );
};
