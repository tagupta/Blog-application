import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

const AllPostPage = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="Get all posts information" />
      </Head>
      <AllPosts posts={posts} />
    </div>
  );
};

export default AllPostPage;
