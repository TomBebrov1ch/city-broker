import Hamburger from "hamburger-react";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "@redux/menuSlice";
import { ModalButton } from "@shared/ui/Button";

import logo from "@assets/logo.svg";

import styles from "./styles.module.scss";

export const Header = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state: any) => state.menu.isOpen);

  function openMenu() {
    dispatch(toggleMenu());
  }

  return (
    <>
      <header className={styles.header_mob}>
        <img className={styles.logo} src={logo} alt="logo" />
        <Hamburger
          color="#DA1D2D"
          onToggle={() => openMenu()}
          toggled={isMenuOpen}
        />
      </header>
      <header className={styles.header_pc}>
        <img className={styles.logo} src={logo} alt="logo" />
        <nav className={styles.header_pc__nav}>
          <Link className={`${styles.header_pc__nav__link}`} to="main">
            Главная
          </Link>
          <Link className={`${styles.header_pc__nav__link}`} to="main">
            О Компании
          </Link>
          <Link className={`${styles.header_pc__nav__link}`} to="main">
            Услуги
          </Link>
          <Link className={`${styles.header_pc__nav__link}`} to="main">
            Площадки
          </Link>
          <Link className={`${styles.header_pc__nav__link}`} to="main">
            Контакты
          </Link>
        </nav>
        <ModalButton
          text="Связаться с нами"
          onClick={() => console.log("modal")}
        />
      </header>
    </>
  );
};
