import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "../../lib/posts-util";

export async function getStaticPaths() {
  const allPostsFiles = getPostFiles();

  const paths = allPostsFiles.map((postfile) => {
    const postSlug = postfile.replace(/\.md$/, ""); //removes the file extension
    return { params: { slug: postSlug } };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const slug = params.slug;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}
const SinglePostPage = ({ post }) => {
  return (
    <div>
      <PostContent post={post} />
    </div>
  );
};

export default SinglePostPage;
