"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Header/Header.module.scss";
import SideBarMenu from "./SideBarMenu";
import Image from "next/image";

import Logo from "@/../public/header/logo.gif";
import Link from "next/link";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  // Throttle-функция
  const throttle = (func: (...args: unknown[]) => void, delay: number) => {
    let lastCall = 0;
    return (...args: unknown[]) => {
      const now = new Date().getTime();
      if (now - lastCall < delay) return;
      lastCall = now;
      return func(...args);
    };
  };

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollPos = window.scrollY;

      if (Math.abs(currentScrollPos - scrollPos) > 50) {
        setIsVisible(currentScrollPos < scrollPos);
        setScrollPos(currentScrollPos);
      }
    }, 100); // Задержка 100 мс

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);
  return (
    <header
      className={`${styles.header} ${
        isVisible ? styles.slide_down : styles.slide_up
      }`}
    >
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
