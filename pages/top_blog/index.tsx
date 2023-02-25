import TopBlogs from '@/src/components/TopBlog';
import { TopBlogTypes } from '@/type/types';
import {FC} from 'react';

const TopBlog: FC<TopBlogTypes> = ({ data }) => {
  return (
    <>
      <TopBlogs data={data} />
    </>
  );
};
export async function getServerSideProps() {
  // Fetch data from external API
  const res: Response = await fetch(`http://localhost:4000/blog/top-blogs`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default TopBlog;
