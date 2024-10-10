import React from "react";
import styles from "@/styles/Header/Header.module.scss";
import SideBarMenu from "./SideBarMenu";
import Image from "next/image";

import Logo from "@/../public/header/logo.gif";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        className={styles.logo}
        src={Logo}
        width={60}
        height={60}
        alt="logo"
      />

      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li>
            <Link className={styles.nav__link} href={"/"}>
              Про мене
            </Link>
          </li>
          <li>
            <Link className={styles.nav__link} href={"/"}>
              Освіта
            </Link>
          </li>
          <li>
            <Link className={styles.nav__link} href={"/"}>
              Послуги
            </Link>
          </li>
          <li>
            <Link className={styles.nav__link} href={"/"}>
              Контакти
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.header__social}>
        <Link href={"/"}>
          <Image
            src={"/socialMedia/telega.svg"}
            className={styles.social__img}
            alt="social media"
            width={50}
            height={50}
          />
        </Link>
        <Link href={"/"}>
          <Image
            src={"/socialMedia/inst.svg"}
            className={styles.social__img}
            alt="social media"
            width={50}
            height={50}
          />
        </Link>
        <Link href={"/"}>
          <Image
            src={"/socialMedia/tik-tok.svg"}
            className={styles.social__img}
            alt="social media"
            width={50}
            height={50}
          />
        </Link>
      </div>

      <SideBarMenu />
    </header>
  );
};

export default Header;
