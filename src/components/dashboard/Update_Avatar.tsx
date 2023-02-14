import { SetStateAction, useEffect, useState } from 'react';
import { RootState } from '@/feature/store';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Cookies from 'universal-cookie';

function UpdateAvatar() {
  const [file, setFile] = useState('');
  const cookie = new Cookies();
  const token = cookie.get('token');
  const user = useSelector((state: RootState) => state.userSlice.currentUser);

  const submitAvatar = async () => {
    try {
      console.log(file);

      if (!file) return;

      const formData = new FormData();
      formData.append('avatar', file);

      fetch('http://localhost:4000/user/update-avatar', {
        method: 'POST',
        headers: {
          auth: `ut ${token}`,
        },
        body: formData,
      })
        .then(res => {
          console.log('res', res);
        })
        .then(data => {
          console.log('data', data);
        });
    } catch (error) {
      console.log('lol');
    }
  };
  useEffect(() => {
    submitAvatar();
  }, [file]);

  return (
    <div className="flex items-center justify-center pt-[2rem]">
      <div className="card card-image-cover">
        <div className="card-body">
          <input
            className="input-ghost-success input-lg input p-1"
            onChange={(e: any) => setFile(e.target.files[0])}
            placeholder="Success"
            type={'file'}
          />
          <button
            onClick={submitAvatar}
            className="btn-secondary btn  bg-[#03C988]"
          >
            Update Avatar
          </button>
        </div>
        <img
          src={'http://localhost:4000/' + user?.avatar}
          //   src={
          //     user?.avatar
          //       ? {'http://localhost:4000/' + userData.avatar}
          //       : 'https://t3.ftcdn.net/jpg/01/09/00/64/360_F_109006426_388PagqielgjFTAMgW59jRaDmPJvSBUL.jpg'
          //   }
          alt="/"
        />
      </div>
    </div>
  );
}

export default UpdateAvatar;
