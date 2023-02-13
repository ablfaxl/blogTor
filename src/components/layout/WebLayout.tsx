import { PropsWithChildren } from 'react';
import { Navbar } from '@/src/components/navbar/Navbar';

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
export default Layout;
