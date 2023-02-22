import { MyBlogTypes } from '@/type/types';
import axios from 'axios';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Cookies from 'universal-cookie';

const UserBlogs: FC = () => {
  const [blog, setBlog] = useState<MyBlogTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const cookie: string = new Cookies().get('token');
  useEffect(() => {
    fetch('http://localhost:4000/blog/my-blogs', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        auth: `ut ${cookie}`,
      },
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        setBlog(data);
        setLoading(false);
      });
  }, []);
  const deleteBlog = async (id: string) => {
    const res = await axios.post(
      'http://localhost:4000/blog/delete',
      {
        blogId: id,
      },
      { headers: { auth: `ut ${cookie}` } }
    );
    {
      res ? toast.success('OK!') : toast.error('Error!');
    }
    window.location.assign('http://localhost:3000/dashboard');
  };
  return (
    <div className="text-[#ffffff] p-2 flex items-center flex-col">
      <div className="text-center p-2">
        <h3 className="text-lg">Do You Want Create New Blog?</h3>
        <Link href={'/dashboard/create_blog'} passHref>
          <button className="p-1 hover:text-[#03C988]">Click Here</button>
        </Link>
      </div>
      <div className="flex flex-row flex-wrap justify-between gap-3 items-center">
        {blog[0] ? (
          blog.map(item => {
            return (
              <div className="card w-[500px] h-[350px] items-center">
                <img
                  className="object-cover w-full h-[50%]"
                  src={item.imgurl}
                  alt="/"
                />
                <div className="card-body  flex items-center flex-col justify-center">
                  <h2 className="card-header">
                    {item.title.length > 15
                      ? item.title.slice(0.15) + '...'
                      : item.title}
                  </h2>
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          item.content.length > 20
                            ? item.content.slice(0, 20) + '...'
                            : item.content,
                      }}
                    ></div>
                  </div>

                  <div className="card-footer">
                    <div className="btn-group btn-group-rounded btn-group-scrollable ">
                      <Link href={`/dashboard/edit_blog/${item._id}`}>
                        <button className="btn hover:text-[#03c988]">
                          Edit Blog
                        </button>
                      </Link>
                      <button
                        onClick={() => deleteBlog(item._id)}
                        className="btn hover:text-[#ff2525]"
                      >
                        Delete Blog
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <button className="bg-red-900 p-4 btn-error">
            There is No Blog !
          </button>
        )}
      </div>
    </div>
  );
};

export default UserBlogs;
