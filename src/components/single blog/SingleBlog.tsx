import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Cookies from 'universal-cookie';
import { MyBlogPropsTypes } from '@/type/types';
import ReactStars from 'react-rating-stars-component';
import axios from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
type Inputs = {
  text: string;
};

const SingleBlog: React.FC<MyBlogPropsTypes> = ({ data: singleBlogData }) => {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const cookie: string = new Cookies().get('token');
  const route = useRouter();
  let schema = yup.object().shape({
    text: yup.string().max(30).required('Entrer Your Commens'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<Inputs> = async data => {
    if (!cookie) {
      route.push('http://localhost:3000/login');
      toast.warning('You have to login or sign up before submiting a comment!');
    } else {
      const res = await axios.post(
        'http://localhost:4000/comment/submit',
        {
          text: data.text,
          blogId: singleBlogData._id,
        },
        {
          headers: { auth: `ut ${cookie}` },
        }
      );
      console.log(res);
      if (res) toast.success('Your Comment Added !');
      else toast.error('Error!');
    }
  };

  useEffect(() => {
    fetch(`http://localhost:4000/comment/by-blog/${singleBlogData._id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(resp => resp.json())
      .then(data => {
        setComments(data);
        setLoading(true);
      });
  }, []);

  const ratingChanged = async (newRating: number) => {
    console.log(newRating);
    await axios.post(
      'http://localhost:4000/blog/submit-rate',
      {
        blogId: singleBlogData._id,
        score: newRating,
      },
      {
        headers: {
          auth: `ut ${cookie}`,
        },
      }
    );
  };

  if (!loading) return <h1 className="p-[250px]">loading</h1>;
  return (
    <div className="p-[5rem] relative w-full h-[100vh]">
      <img
        className="w-full h-[300px] object-cover"
        src={singleBlogData.imgurl}
        alt="/"
      />
      <div className="flex item-center flex-col text-center py-3">
        <h1 className="text-xl font-bold text-[#03C988]">
          {singleBlogData.title}
        </h1>
      </div>
      <div className="flex  flex-col text-[16px]  py-3">
        <div dangerouslySetInnerHTML={{ __html: singleBlogData.content }}></div>
        <div className="divider"></div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <textarea
            {...register('text', { required: true })}
            className="textarea-block textarea"
            placeholder="Comment"
          ></textarea>
          {errors.text && (
            <span className="text-sm text-[#ef3333]">
              This field is required
            </span>
          )}
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </form>
        <div className="divider divider-horizontal">Rate Blog</div>
        <div className="flex">
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            isHalf={true}
            activeColor="#03C988"
          />
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="flex flex-row justify-evenly py-2">
          <div className="accordion-group accordion-group-hover">
            <div className="accordion">
              <input
                type="checkbox"
                id="toggle-5"
                className="accordion-toggle"
              />
              <label htmlFor="toggle-5" className="accordion-title">
                Total comments
              </label>
              <div className="accordion-content text-content2">
                <div className="min-h-0">
                  {comments.length !== 0
                    ? comments.map((item: any) => {
                        return (
                          <div className="flex gap-3 items-center  py-2">
                            <span
                              className="tooltip tooltip-top"
                              data-tooltip={item.user.name}
                            >
                              <div className="avatar avatar-ring-success">
                                <img
                                  src={
                                    'http://localhost:4000/' + item.user.avatar
                                  }
                                  alt="avatar"
                                />
                              </div>
                            </span>
                            <p>{item.text}</p>
                          </div>
                        );
                      })
                    : 'No Comment !'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
