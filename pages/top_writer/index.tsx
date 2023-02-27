import TopWriterCo from '@/src/components/ui/TopWriter';
import { TopWriterTypes } from '@/type/types';

const TopWriters: React.FC<TopWriterTypes> = ({ data }) => {
  return <TopWriterCo data={data} />;
};

export default TopWriters;

export async function getStaticProps() {
  const res: Response = await fetch(`http://localhost:4000/user/top-users`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}
