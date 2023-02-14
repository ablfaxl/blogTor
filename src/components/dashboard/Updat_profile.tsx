import React, { useState } from 'react';
import { VscEdit } from 'react-icons/vsc';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import axios, { AxiosResponse } from 'axios';
import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { editCurrentUser } from '@/feature/userSlice';
import { ResponseUpdateProfileTYpes } from '@/type/types';

type InputsInfoTypes = {
  name: string;
  bio: string;
};

const Updat_profile: React.FC<{ usernameProp: string | undefined }> = ({
  usernameProp,
}) => {
  const route = useRouter();
  const cookie = new Cookies();
  const token = cookie.get('token');
  const dispatch = useDispatch();
  let schema = yup.object().shape({
    name: yup.string().min(4).max(8).required('Entrer Your name'),
    bio: yup.string().min(0).max(10).required('Entrer Your bio'),
  });
  const [modal, setMoadl] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsInfoTypes>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<InputsInfoTypes> = async (
    data: InputsInfoTypes
  ) => {
    const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
    const res: void | AxiosResponse<ResponseUpdateProfileTYpes> = await axios
      .post(
        'http://localhost:4000/user/edit',
        {
          name: data.name,
          bio: data.bio,
        },
        { headers: { auth: `ut ${token}` } }
      )
      .catch(error => {
        toast.promise(resolveAfter3Sec, {
          pending: 'Loading ... ',
          error: 'Profile update failed 🤯',
        });
      });
    console.log('res', res);
    if (res.data.msg === 'ok') {
      setTimeout(() => {
        setMoadl(false);
      }, 4000);
      toast.promise(resolveAfter3Sec, {
        pending: 'Loading ... ',
        success: 'Profile update was done successfully 👌',
      });
    }
    dispatch(
      editCurrentUser({
        name: data.name,
        bio: data.bio,
        username: usernameProp,
      })
    );
  };
  return (
    <div>
      <div className="divider divider-horizontal">
        <VscEdit
          onClick={() => {
            setMoadl(!modal);
          }}
          className="text-[#03c988] cursor-pointer"
          size={50}
        />
      </div>
      {modal ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-center justify-center flex-col gap-2"
        >
          <input
            {...register('name', { required: true })}
            className="input-md"
            placeholder="name"
          />
          {errors.name?.message && (
            <p className="text-red-900">please enter your name</p>
          )}
          <input
            {...register('bio', { required: true })}
            className="input-md"
            placeholder="bio"
          />
          {errors.bio?.message && (
            <p className="text-red-900">please enter your username</p>
          )}
          <div>
            <button className="btn  text-[#fff] hover:text-[#03C988] transition-all duration-700">
              Submit
            </button>
          </div>
        </form>
      ) : (
        ''
      )}
    </div>
  );
};

export default Updat_profile;
