import classes from "./post-item.module.css";
import Link from "next/link";
import Image from "next/image";

const PostItem = ({ post }) => {
  const { title, image, excerpt, date, slug } = post;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              height={100}
              width={150}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h1>{title}</h1>
            <time>{humanReadableDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
