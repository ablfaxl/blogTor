import EditProfile from '@/src/components/dashboard/edit-profile/Edit_Profile';
import DashboardLayout from '@/src/components/layout/DashboardLayout';
import { ReactElement } from 'react';

export default function Edit_profile() {
  return (
    <div>
      <EditProfile />
    </div>
  );
}

Edit_profile.getLayout = function (page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
