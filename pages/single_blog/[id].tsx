import SingleBlogCom from '@/src/components/single blog/SingleBlog';
import { ContextTypes, MyBlogPropsTypes, MyBlogTypes } from '@/type/types';

const SingleBlog: React.FC<MyBlogPropsTypes> = ({ data }) => {
  return (
    <>
      <SingleBlogCom data={data} />
    </>
  );
};

export default SingleBlog;

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:4000/blog`);
  const posts = await res.json();
  const ids = posts.map((item: MyBlogTypes) => {
    return {
      params: { id: item._id },
    };
  });
  return {
    paths: ids,
    fallback: false,
  };
}

export async function getStaticProps(context: ContextTypes) {
  const res:Response = await fetch(`http://localhost:4000/blog`);
  const posts = await res.json();
  const singleBlog = posts.find((item: any) => item._id === context.params.id);
  return {
    props: {
      data: singleBlog,
    },
  };
}
