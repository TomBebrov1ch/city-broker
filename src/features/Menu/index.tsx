import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
import { ModalButton } from "@shared/ui/Button";
import { toggleMenu } from "@redux/menuSlice";
import { openModal } from "@redux/modalSlice";

import styles from "./styles.module.scss";

export const Menu = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state: any) => state.menu.isOpen);

  function closeMenuOpenModal() {
    dispatch(toggleMenu());
    dispatch(openModal());
  }

  function closeMenu() {
    dispatch(toggleMenu());
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  });

  return (
    <div className={styles.menu}>
      <nav className={styles.menu__nav}>
        <Link
          to="main"
          smooth
          onClick={() => closeMenu()}
          className={`${styles.menu__nav__link}`}
        >
          Главная
        </Link>
        <Link
          to="about"
          smooth
          onClick={() => closeMenu()}
          className={`${styles.menu__nav__link} mt-7`}
        >
          О Компании
        </Link>
        <Link
          to="services"
          smooth
          onClick={() => closeMenu()}
          className={`${styles.menu__nav__link} mt-7`}
        >
          Услуги
        </Link>
        <Link
          to="contacts"
          smooth
          onClick={() => closeMenu()}
          className={`${styles.menu__nav__link} mt-7`}
        >
          Контакты
        </Link>
        <ModalButton
          text="Связаться с нами"
          onClick={() => closeMenuOpenModal()}
          marginTop="mt-7"
        />
      </nav>
    </div>
  );
};
