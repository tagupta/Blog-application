import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/avatar.png"
          alt="An image showing Avatar"
          height={300}
          width={300}
        />
      </div>
      <h1>Hi, I'm an Avatar</h1>
      <p>
        I blog about whatever comes to my mind. Cause every human being has
        right to write. You can have a look at posts section and study few blogs
        there.
      </p>
    </section>
  );
};

export default Hero;
