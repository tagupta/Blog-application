import { Fragment } from "react";
import FeaturedPost from "../components/home-page/featured-post/featured-post";
import Hero from "../components/home-page/hero/hero";
const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPost />
    </Fragment>
  );
};

export default HomePage;
