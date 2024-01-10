import Hamburger from "hamburger-react";

import logo from "@assets/logo.svg";

import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <>
      <header className={styles.header_mob}>
        <img className={styles.logo} src={logo} alt="logo" />
        <Hamburger color="#DA1D2D" />
      </header>
      <header className="header-pc"></header>
    </>
  );
};
