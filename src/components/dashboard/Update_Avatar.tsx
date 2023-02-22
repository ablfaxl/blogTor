import { SetStateAction, useEffect, useState } from 'react';
import { RootState } from '@/feature/store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import { updateAvatar } from '@/feature/userSlice';
import { useRouter } from 'next/router';

interface AvatarInputTypes {
  file: any;
}

function UpdateAvatar() {
  const route = useRouter()
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<AvatarInputTypes>();

  const cookie: string = new Cookies().get('token');
  const currentUser = useSelector(
    (state: RootState) => state.userSlice.currentUser
  );

  const submitAvatar: SubmitHandler<AvatarInputTypes> = async data => {
    try {
      if (!data.file[0]) return;

      const formData = new FormData();
      formData.append('avatar', data.file[0]);

      await fetch('http://localhost:4000/user/update-avatar', {
        method: 'POST',
        headers: {
          auth: `ut ${cookie}`,
        },
        body: formData,
      }).then(res => {
        if (res.ok === true) {
          toast.success('Your avatar has been successfully updated');
        } else {
          toast.error('Error! Somthing went Wrong!!');
        }
      });
    } catch (error) {
      console.log('lol');
    }
    dispatch(updateAvatar(data.file[0].name));
    route.back();
  };
  return (
    <div className="flex items-center justify-center pt-[2rem]">
      <div className="card card-image-cover">
        <form onSubmit={handleSubmit(submitAvatar)} className="card-body">
          <input
            className="input-ghost-success input-lg input p-1"
            {...register('file')}
            placeholder="Success"
            type={'file'}
          />
          <button className="btn-secondary btn  bg-[#03C988]">
            Update Avatar
          </button>
        </form>
        <img
          src={
            currentUser?.avatar
              ? 'http://localhost:4000/' + currentUser.avatar
              : 'https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg'
          }
          alt="/"
        />
      </div>
    </div>
  );
}

export default UpdateAvatar;
