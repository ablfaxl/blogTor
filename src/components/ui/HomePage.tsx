import { RootState } from '@/feature/store';
import { BLogMapTypes, BlogsTypes } from '@/type/types';
import Link from 'next/link';
import ReactStars from 'react-rating-stars-component';

export const HomePage: React.FC<BlogsTypes> = ({ data }) => {
  // const avatar = data.data.f

  return (
    <>
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          className="w-full h-[100vh]  object-cover opacity-20 bg-repeat"
          src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80"
          alt="/"
        />
        <div className=" h-[80%] w-[80%] absolute top-calc(50vh-10px) flex flex-row flex-wrap justify-between gap-4 p-[1rem]">
          {data ? (
            data.map(data => {
              return (
                <>
                  <Link
                    key={data._id}
                    href={`/single_blog/${data._id}`}
                    passHref
                  >
                    <div className="bg-[#232323] w-[350px] h-[300px] flex flex-col items-center hover:scale-105 duration-500 hover:text-[#03C988]">
                      <div className="flex flex-row items-center gap-2 p-2">
                        <div className="avatar avatar-[15px] avatar-square">
                          <span
                            className="tooltip tooltip-left"
                            data-tooltip={data.creator.username}
                          >
                            <img
                              src={
                                'http://localhost:4000/' + data.creator.avatar
                              }
                              alt="avatar"
                            />
                          </span>
                        </div>
                        <h2 className="text-xl py-3 font-bold">{data.title}</h2>
                      </div>
                      <img
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null;
                          currentTarget.src =
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUW75jyyzX7tVtETUStjCsJkeMXFOpo0xqHaAS4tY0IDldrJZzSgStFUg-n9tKuGGNV4k&usqp=CAU';
                        }}
                        className="object-cover w-[300px] h-[200px]"
                        src={data.imgurl}
                        alt=""
                      />
                      <ReactStars
                        value={data.averageScore}
                        isHalf={true}
                        size={24}
                        activeColor="#03C988"
                        edit={false}
                      />
                    </div>
                  </Link>
                </>
              );
            })
          ) : (
            <>
              <div className=" h-[80%] w-[80%] absolute top-calc(50vh-10px) flex flex-row flex-wrap justify-between gap-4 p-[2rem]">
                <div className="bg-[#232323] w-[350px] h-[300px] flex flex-col items-center skeleton">
                  <h2 className="text-xl p-1 font-bold skeleton"></h2>
                  <div className="skeleton"></div>
                  <img
                    className="object-contain w-full h-[200px] skeleton"
                    alt=""
                  />
                </div>
                <div className="bg-[#232323] w-[350px] h-[300px] flex flex-col items-center skeleton">
                  <h2 className="text-xl p-1 font-bold skeleton-pulse"></h2>
                  <div className="skeleton"></div>
                  <img
                    className="object-contain w-full h-[200px] skeleton"
                    alt=""
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
