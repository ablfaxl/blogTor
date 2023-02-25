import { HomePage } from '../src/components/home/HomePage';
import { BlogsTypes } from '@/type/types';

const Home: React.FC<BlogsTypes> = ({ data }) => {
  return (
    <>
      <HomePage data={data}  />
    </>
  );
};
export default Home;

export async function getServerSideProps() {
  const res:Response = await fetch(`http://localhost:4000/blog`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
