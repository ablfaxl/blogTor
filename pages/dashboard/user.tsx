import DashboardLayout from '@/src/components/layout/DashboardLayout';
import type { ReactElement } from 'react';

export default function User() {
  return <h1>user in dashbord</h1>;
}

User.getLayout = function (page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
