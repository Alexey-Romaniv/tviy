import React from "react";
import Portrait from "./Portrait";
import WhoAmI from "./WhoAmI";
import styles from "@/styles/Hero/Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Portrait />
      <WhoAmI />
    </section>
  );
};

export default Hero;
