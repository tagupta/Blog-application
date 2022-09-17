import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting_started_with_nextJS_1",
    title: "Getting started with Next JS",
    image: "getting-started-nextjs.jpg",
    excerpt:
      "NextJS is the react framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
    date: "2022-02-10",
  },
  {
    slug: "getting_started_with_nextJS_2",
    title: "Getting started with Next JS",
    image: "getting-started-nextjs.jpg",
    excerpt:
      "NextJS is the react framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
    date: "2022-02-10",
  },
  {
    slug: "getting_started_with_nextJS_3",
    title: "Getting started with Next JS",
    image: "getting-started-nextjs.jpg",
    excerpt:
      "NextJS is the react framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
    date: "2022-02-10",
  },
  {
    slug: "getting_started_with_nextJS_4",
    title: "Getting started with Next JS",
    image: "getting-started-nextjs.jpg",
    excerpt:
      "NextJS is the react framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
    date: "2022-02-10",
  },
];

const AllPostPage = () => {
  return (
    <div>
      <AllPosts posts={DUMMY_POSTS} />
    </div>
  );
};

export default AllPostPage;
