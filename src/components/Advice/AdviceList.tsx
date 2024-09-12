import React from "react";
import AdviceItem from "./AdviceItem";

import styles from "@/styles/Advice/AdviceList.module.scss";

export type Service = {
  title: string;
  price: string;
  details: string[];
  buttonText: string;
  link: string;
};
const services: Service[] = [
  {
    title: "Індивідуальна консультація",
    price: "1000 ₴",
    details: [
      "Онлайн",
      "Емоційний розвиток",
      "Позбавлення високого рівня тривоги та насильства над собою",
    ],
    buttonText: "Записатися",
    link: "/",
  },
  {
    title: "Онлайн-курс “Хороша дівчинка”",
    price: "1999 ₴",
    details: [
      "Особисті кордони",
      "Страхи",
      "Емоції",
      "Конфлікти",
      "Самооцінка, самодійність",
      "Мрії та потреби",
    ],
    buttonText: "Записатися",
    link: "/",
  },
  {
    title: "Терапевтичні вечори поезії",
    price: "від 300 ₴",
    details: [
      "Вірші",
      "Музика",
      "Творчість",
      "Рефлексія",
      "Спілкування",
      "Терапія",
    ],
    buttonText: "Записатися",
    link: "/",
  },
  {
    title: "Ретрити",
    price: "від 7000 ₴",
    details: [
      "Відпочинок",
      "Психологічні та духовні практики",
      "Цвяхостояння",
      "Чайні церемонії",
      "Місцеві екскурсії",
    ],
    buttonText: "Записатися",
    link: "/",
  },
];

const AdviceList = () => {
  return (
    <ul className={styles.service__list}>
      {services.map((el, i) => (
        <AdviceItem key={i} service={el} />
      ))}
    </ul>
  );
};

export default AdviceList;
