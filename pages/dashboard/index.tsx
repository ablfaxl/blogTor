import DashboardLayout from '@/src/components/layout/DashboardLayout';
import type { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/feature/store';
import UserBlogs from '@/src/components/dashboard/UserBlogs';

export default function DasboardInfo() {
  const name = useSelector(
    (state: RootState) => state.userSlice.currentUser?.username
  );
  return (
    <div>
      <UserBlogs />
    </div>
  );
}

DasboardInfo.getLayout = function (page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
