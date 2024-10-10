import React from "react";
import InstagramList from "./InstagramList";
import styles from "@/styles/Instagram/Instagram.module.scss";

const Instagram = () => {
  return (
    <section className={styles.instagram}>
      <div className="container">
        <h2 className={styles.instagram__title}>Мій Instagram</h2>
        <p className={styles.instagram__text}>
          Дізнавайся більше про психологію і шлях до гармонії
        </p>
        <InstagramList />
      </div>
    </section>
  );
};

export default Instagram;
