import React from "react";
import AdviceList from "./AdviceList";

import styles from "@/styles/Advice/Advice.module.scss";

const Advice = () => {
  return (
    <section className={styles.advice}>
      <div className="container">
        <h2 className={styles.advice__title}>Відчуй свободу із середини</h2>
        <p className={styles.advice__subtitle}>Обери свій шлях </p>
        <AdviceList />
      </div>
    </section>
  );
};

export default Advice;
