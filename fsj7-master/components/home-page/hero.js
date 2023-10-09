import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/person.png"
          alt="An image showing person"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm ...</h1>
      <p>This is a test blog about web development like NextJS and Angular.</p>
    </section>
  );
}

export default Hero;
