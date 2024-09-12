import React from "react";
import { Service } from "./AdviceList";
import Link from "next/link";

import styles from "@/styles/Advice/AdviceList.module.scss";

const AdviceItem = ({ service }: { service: Service }) => {
  return (
    <li className={styles.service__item}>
      <h3 className={styles.service__title}>{service.title}</h3>
      <p className={styles.service__price}>{service.price}</p>
      <ul className={styles.details}>
        {service.details.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
      <Link className={styles.service__link} href={service.link}>
        {service.buttonText}
      </Link>
    </li>
  );
};

export default AdviceItem;
