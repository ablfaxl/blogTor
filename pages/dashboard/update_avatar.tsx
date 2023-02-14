import UpdateAvatar from '@/src/components/dashboard/Update_Avatar';
import DashboardLayout from '@/src/components/layout/DashboardLayout';
import { ReactElement } from 'react';

const Update_Avatar = () => {
  return (
    <div>
      <UpdateAvatar />
    </div>
  );
};

export default Update_Avatar;



Update_Avatar.getLayout = function (page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
