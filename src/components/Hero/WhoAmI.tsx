import React from "react";
import styles from "@/styles/Hero/Hero.module.scss";
import Certificate from "../Certificate/Certificate";
const WhoAmI = () => {
  return (
    <div className={styles.who__wrapper}>
      <p className={styles.hero__subtitle}>Хто я?</p>
      <h1 className={styles.hero__title}>
        Я - Люсія Романів, магістр психології та практикуюча психологиня
      </h1>
      <p className={styles.hero__text}>
        Моє покликання - допомагати людям знаходити гармонію та розуміння у
        своєму житті. Я відома також як організаторка авторських ретритів та
        терапевтичних вечорів поезії.{" "}
      </p>
      <p className={styles.hero__text}>
        Моя місія - допомогти вам в процесі зцілення дитячих травм та поліпшенні
        якості життя, знизити рівень тривожності та опрацювати негативні
        установки та несвідомі патерни поведінки, які ускладнюють сприйняття
        життя. Я також допомагаю побудувати гармонійні відносини з самим собою
        та іншими.
      </p>
      <p className={styles.hero__invite}>
        Запрошую вас приєднатися до моїх заходів та відкрити для себе нові
        можливості в розвитку особистості та відносин.
        <br />
        Давайте разом рухатися до вашого внутрішнього зцілення та особистісного
        зростання!
      </p>
      <Certificate />
    </div>
  );
};

export default WhoAmI;
