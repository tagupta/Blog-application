import Link from "next/link";
import classes from "./logo.module.css";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <h1>
        <Link href="/">MY BLOGS</Link>
      </h1>
    </div>
  );
};

export default Logo;
