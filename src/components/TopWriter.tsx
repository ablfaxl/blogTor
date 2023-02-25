import { TopWriterTypes } from '@/type/types';
import Link from 'next/link';
import React, { FC } from 'react';
const TopWriter: React.FC<TopWriterTypes> = ({data}) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <img
        className="w-full h-[100vh]  object-cover opacity-20 bg-repeat"
        src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80"
        alt="/"
      />
      <div className=" h-[80%] w-full absolute top-calc(50vh-10px)  gap-4 p-[1rem]">
        {data ? (
          data.map(data => {
            return (
              <div className="flex w-full py-2">
                <div className="card px-5 max-w-fit">
                  <div className="card-body">
                    <div className="flex item-center gap-3">
                      <div className="avatar avatar-xl avatar-square ">
                        <img
                          src={'http://localhost:4000/' + data.avatar}
                          alt="avatar"
                        />
                      </div>
                      <div className="flex datas-center gap-4">
                        <h3 className="text-xl">{data.username}</h3>
                        <h3>{data.name}</h3>
                        <p>
                          {' '}
                          bio:{' '}
                          <span className="hover:text-[#39af9b]">
                            {data.bio}⭐
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex w-full py-2">
            <div className="card px-5 max-w-full skeleton">
              <div className="card-body skeleton">
                <div className="flex item-center gap-3 skeleton">
                  <div className="avatar avatar-xl avatar-squareskeleton ">
                    <img alt="avatar" />
                  </div>
                  <div className="flex items-center gap-4 skeleton">
                    <h3 className="text-xl"></h3>
                    <h3></h3>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopWriter;
