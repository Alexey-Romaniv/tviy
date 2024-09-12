import React from "react";
import styles from "@/styles/Header/Header.module.scss";
import SideBarMenu from "./SideBarMenu";
import Image from "next/image";

import Logo from "@/../public/header/logo.gif";

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
      <SideBarMenu />
    </header>
  );
};

export default Header;
