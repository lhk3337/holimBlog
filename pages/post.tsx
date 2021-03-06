import Layout from "components/layout";
import { getData } from "api/api";
import PostItem from "components/Posts/PostItem";
import { IProjectDataType, IProjectsDataType } from "api/apiType";
export default function Post({ posts }: IProjectsDataType) {
  // const aaa = posts.results.filter((value: any) => value.properties.category.select?.name === "Javascript");

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center p-5 mb-10">
        <h2 className="mt-2 text-4xl font-bold">Total post : {posts.results.length}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 w-full py-6">
          {posts.results.map((post: IProjectDataType) => (
            <PostItem key={post.id} {...post} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: { posts: await getData() },
  };
}
