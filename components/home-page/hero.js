import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Tumisang.png"
          alt="An image showing Tumisang"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Tumisang</h1>
      <p>
        I am Passionate About Coding! so I Blog about it!!! -- It's mainly about
        my Jounery why I started and why I would love to be in the field to make
        Actual change.
      </p>
    </section>
  );
}

export default Hero;
