import { useState } from 'react';
import DashboardLayout from '@/src/components/layout/DashboardLayout';
import type { ReactElement } from 'react';
import { RootState } from '@/feature/store';
import { useSelector } from 'react-redux';
import Updat_profile from './Updat_profile';

export default function Editprofile() {
  const profileInfo = useSelector(
    (state: RootState) => state.userSlice.currentUser
  );
  return (
    <div className="flex items-center justify-center pt-[2rem]">
      <div className="card card-image-cover p-6">
        <img
          src={
            profileInfo?.avatar
              ? profileInfo.avatar
              : 'https://t3.ftcdn.net/jpg/01/09/00/64/360_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg'
          }
          alt="/"
        />
        <div className="card-body flex justify-evenly flex-wrap flex-row">
          <h2 className="card-header text-[16px]  hover:text-[#03C988] cursor-default">
            {profileInfo ? profileInfo?.username : 'There is no username'}
          </h2>
          <h2 className="card-header text-[16px] hover:text-[#03C988] cursor-default">
            {profileInfo ? profileInfo?.name : 'There is no name'}
          </h2>
          <p className="text-content2 hover:text-[#03C988] cursor-default">
            {profileInfo?.bio ? profileInfo?.bio : 'No Status'}
          </p>
        </div>
        {/*Edit */}
        <Updat_profile usernameProp={profileInfo?.username} />
      </div>
    </div>
  );
}

