import Head from "next/head";
import { Fragment } from "react";
import FeaturedPost from "../components/home-page/featured-post/featured-post";
import Hero from "../components/home-page/hero/hero";
import { getFeaturedPosts } from "../lib/posts-util";

export async function getStaticProps() {
  const featuredPost = getFeaturedPosts();

  return {
    props: { posts: featuredPost },
  };
}

const HomePage = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>Avatar' Blog</title>
        <meta
          name="description"
          content="Post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPost posts={posts} />
    </Fragment>
  );
};

export default HomePage;
