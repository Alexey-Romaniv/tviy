"use client";
import React, { useState } from "react";
import Image from "next/image";
import Burger from "@/../public/header/burger.svg";
import Close from "@/../public/header/close.svg";
import Logo from "@/../public/header/logo.gif";
import Arrow from "@/../public/header/headerArrow.svg";

import styles from "@/styles/Header/SideBarMenu.module.scss";

import Link from "next/link";

const SideBarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  //Handles the opening and closing of our nav
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.sideBar}>
      <button onClick={handleClick} type="button" className={styles.burger}>
        <Image src={Burger} alt="menu" width={25} height={25} />
      </button>

      {isOpen && (
        <div className={styles.menu__wrapper}>
          <div className={styles.side__header}>
            <Image src={Logo} width={60} height={60} alt="logo" />
            <button
              onClick={handleClick}
              type="button"
              className={styles.close}
            >
              <Image src={Close} alt="close" width={25} height={25} />
            </button>
          </div>
          <ul className={styles.nav__list}>
            <li>
              <Link
                className={styles.side__link}
                onClick={handleClick}
                href={"/"}
              >
                <span>Про мене</span>
                <Image src={Arrow} alt="arrow" width={9} height={18} />
              </Link>
            </li>
            <li>
              <Link
                className={styles.side__link}
                onClick={handleClick}
                href={"/"}
              >
                <span>Освіта</span>
                <Image src={Arrow} alt="arrow" width={9} height={18} />
              </Link>
            </li>
            <li>
              <Link
                className={styles.side__link}
                onClick={handleClick}
                href={"/"}
              >
                <span>Послуги</span>
                <Image src={Arrow} alt="arrow" width={9} height={18} />
              </Link>
            </li>
            <li>
              <Link
                className={styles.side__link}
                onClick={handleClick}
                href={"/"}
              >
                <span>Контакти</span>
                <Image src={Arrow} alt="arrow" width={9} height={18} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideBarMenu;
