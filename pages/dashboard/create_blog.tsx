import CreateBlogCom from '@/src/components/dashboard/Create_Blog';
import DashboardLayout from '@/src/components/layout/DashboardLayout';
import React, { ReactElement } from 'react';

function create_blog() {
  return (
    <div>
      <CreateBlogCom />
    </div>
  );
}

export default create_blog;

create_blog.getLayout = function (page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
