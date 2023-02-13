import { RootState } from '@/feature/store';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { ImBlogger } from 'react-icons/im';
import { useSelector } from 'react-redux';

const DashboardLayout = ({ children }: PropsWithChildren<{}>) => {
  const bio = useSelector(
    (state: RootState) => state.userSlice.currentUser?.bio
  );
  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
            <Link href={'/dashboard'}>
          <div className="navbar-item flex items-center gap-2">
            <span className="text-xl">Panel</span>
            <ImBlogger size={20} />
          </div>
            </Link>
          <p className="navbar-item items-center">
            <Link href={'/'} passHref>
              Home
            </Link>
          </p>
          <p className="navbar-item">Blogs</p>
          <p className="navbar-item">
            <Link href={'/dashboard/edit_profile'} passHref>
            Edit Profile
            </Link>
            </p>
          <p
            className="tooltip tooltip-bottom"
            data-tooltip={bio ? `${bio} ⭐` : 'no bio'}
          >
            status
          </p>
        </div>
      </div>
      <main className='px-[40px] p-6 '>{children}</main>
    </>
  );
};

export default DashboardLayout;
