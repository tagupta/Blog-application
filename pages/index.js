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
      <Hero />
      <FeaturedPost posts={posts} />
    </Fragment>
  );
};

export default HomePage;
