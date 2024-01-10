import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
import { toggleMenu } from "@redux/menuSlice";

import styles from "./styles.module.scss";

export const Menu = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state: any) => state.menu.isOpen);

  function openMenu() {
    dispatch(toggleMenu());
  }

  return (
    <div className={styles.menu}>
      <nav className={styles.menu__nav}>
        <Link to="main" className={`${styles.menu__nav__link}`}>
          Главная
        </Link>
        <Link to="about" className={`${styles.menu__nav__link}`}>
          О Компании
        </Link>
        <Link to="services" className={`${styles.menu__nav__link}`}>
          Услуги
        </Link>
        <Link to="markets" className={`${styles.menu__nav__link}`}>
          Площадки
        </Link>
        <Link to="contacts" className={`${styles.menu__nav__link}`}>
          Контакты
        </Link>
      </nav>
    </div>
  );
};
