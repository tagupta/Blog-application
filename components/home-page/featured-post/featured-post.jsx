import PostGrid from "../../posts/post-grid";
import classes from "./featured-post.module.css";

const FeaturedPost = ({ posts }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Post</h2>
      <PostGrid posts={posts} />
    </section>
  );
};

export default FeaturedPost;
