import DashboardLayout from '@/src/components/layout/DashboardLayout';
import type { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/feature/store';

export default function DasboardInfo() {
  const name = useSelector(
    (state: RootState) => state.userSlice.currentUser?.username
  );
  return (
    <div className="bg-cyan-300">
      <h1>{name} </h1>
    </div>
  );
}

DasboardInfo.getLayout = function (page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
