import { useState, useEffect, SetStateAction } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/feature/store';
import { RiLoginCircleLine, RiLogoutCircleRLine } from 'react-icons/ri';
import { CurrentUserType, logOut } from '@/feature/userSlice';
// link panel o bzn chjori do ta layout dashte bashim dropdown drst kn

export const Navbar = () => {
  const [img, setImg] = useState<string>('');

  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.userSlice);

  console.log('Current User Redux =>', user.currentUser);

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
        {user.currentUser ? (
          <>
            <div className="dropdown dropdown-hover">
              <label className="btn my-2 bg-transparent" tabIndex={0}>
                <p>{user.currentUser?.name}</p>
              </label>
              <div className="dropdown-menu dropdown-menu-bottom-left w-[70px]">
                <div className="dropdown-item text-sm">
                  <span className="tooltip tooltip-top" data-tooltip="Panel">
                    <Link href={'/dashboard'}>
                      <div className="avatar avatar-ring-primary">
                        <img
                          onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src =
                              'https://t3.ftcdn.net/jpg/01/09/00/64/360_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg';
                          }}
                          src={img}
                          alt="avatar"
                        />
                      </div>
                    </Link>
                  </span>
                </div>
                <div
                  tabIndex={1}
                  className="dropdown-item text-sm"
                  onClick={() => {
                    dispatch(logOut());
                  }}
                >
                  <span className="tooltip tooltip-top" data-tooltip="log out">
                    <RiLogoutCircleRLine size={30} />
                  </span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {' '}
            <Link href={'/login'}>
              <p className="navbar-item text-[#03C988]">
                <RiLoginCircleLine fontSize={30} />
              </p>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
