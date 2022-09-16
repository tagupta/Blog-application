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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
        molestiae dolor impedit dolorum repudiandae laudantium quam commodi a
        provident.
      </p>
    </section>
  );
};

export default Hero;
