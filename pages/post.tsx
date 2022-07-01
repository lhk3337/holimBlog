import Layout from "components/layout";
import { getData } from "api/api";
export default function Post({ post }: any) {
  console.log(post);
  return (
    <Layout>
      <h1 className="text-2xl font-bold text-center my-20">My Post !</h1>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: { post: await getData() },
  };
}
