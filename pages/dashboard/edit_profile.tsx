import React from 'react';
import DashboardLayout from '@/src/components/layout/DashboardLayout';
import type { ReactElement } from 'react';
import { RootState } from '@/feature/store';
import { useSelector } from 'react-redux';

export default function edit_profile() {
  const profileInfo = useSelector(
    (state: RootState) => state.userSlice.currentUser
  );
  return (
    <div className="flex items-center justify-center">
      <div className="card card-image-cover p-6">
        <img
          onError={({ currentTarget }) => {
            currentTarget.src =
              'https://t3.ftcdn.net/jpg/01/09/00/64/360_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg';
          }}
          src={profileInfo?.avatar}
          alt="/"
        />
        <div className="card-body">
          <h2 className="card-header text-[12px] hover:text-[#03C988] ">
            {profileInfo?.name.toUpperCase()}
          </h2>
          <h2 className="card-header text-[12px]  hover:text-[#03C988]">
            {profileInfo?.username.toUpperCase()}
          </h2>
          <p className="text-content2 hover:text-[#03C988]" >{profileInfo?.bio}</p>
        </div>
        {/* Modal for Edit */}
      </div>
    </div>
  );
}

edit_profile.getLayout = function (page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
