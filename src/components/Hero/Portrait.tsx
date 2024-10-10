import React from "react";
import Image from "next/image";
import PortraitImg from "@/../public/portait.png";
import styles from "@/styles/Hero/Hero.module.scss";
const Portrait = () => {
  return (
    <div className={styles.portrait__wrapper}>
      <Image
        src={PortraitImg}
        className={styles.portrait}
        width={2333}
        height={2788}
        alt="portrait"
      />
    </div>
  );
};

export default Portrait;
