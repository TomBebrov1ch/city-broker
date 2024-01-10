import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
import { toggleMenu } from "@redux/menuSlice";

import styles from "./styles.module.scss";

export const Menu = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state: any) => state.menu.isOpen);

  function closeMenu() {
    dispatch(toggleMenu());
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }
  });

  return (
    <div className={styles.menu}>
      <nav className={styles.menu__nav}>
        <Link
          to="main"
          onClick={() => closeMenu()}
          className={`${styles.menu__nav__link}`}
        >
          Главная
        </Link>
        <Link
          to="about"
          onClick={() => closeMenu()}
          className={`${styles.menu__nav__link}`}
        >
          О Компании
        </Link>
        <Link
          to="services"
          onClick={() => closeMenu()}
          className={`${styles.menu__nav__link}`}
        >
          Услуги
        </Link>
        <Link
          to="markets"
          onClick={() => closeMenu()}
          className={`${styles.menu__nav__link}`}
        >
          Площадки
        </Link>
        <Link
          to="contacts"
          onClick={() => closeMenu()}
          className={`${styles.menu__nav__link}`}
        >
          Контакты
        </Link>
      </nav>
    </div>
  );
};
