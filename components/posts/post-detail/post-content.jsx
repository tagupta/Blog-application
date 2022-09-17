import PostHeader from "./post-header";

const DUMMY_POST = {
  slug: "getting_started_with_nextJS_1",
  title: "Getting started with Next JS",
  image: "getting-started-nextjs.jpg",
  date: "2022-02-10",
  content: "# This is a first post",
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
};

export default PostContent;
