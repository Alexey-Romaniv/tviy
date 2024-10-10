import React from "react";
import styles from "@/styles/Footer/Footer.module.scss";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <h3 className={styles.footer__title}>Lucia Romaniv</h3>
      <div className={styles.footer__list}>
        <Link href={"/"}>
          <Image
            src={"/socialMedia/telega.svg"}
            className={styles.footer__link}
            alt="social media"
            width={40}
            height={40}
          />
        </Link>
        <Link href={"/"}>
          <Image
            src={"/socialMedia/inst.svg"}
            className={styles.footer__link}
            alt="social media"
            width={40}
            height={40}
          />
        </Link>
        <Link href={"/"}>
          <Image
            src={"/socialMedia/tik-tok.svg"}
            className={styles.footer__link}
            alt="social media"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <p className={styles.footer__policy}>Політика конфіденційності</p>
      <p className={styles.footer__info}>
        2024 LUCIA ROMANIV. Усі права захищені всі права захищені
      </p>
    </section>
  );
};

export default Footer;
