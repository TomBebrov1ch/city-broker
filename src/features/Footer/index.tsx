import { Link } from "react-scroll";
import { ModalButton } from "@shared/ui/Button";
import { useDispatch } from "react-redux";
import { openModal } from "@redux/modalSlice";

import logo from "@assets/logo.svg";
import spark_logo from "@assets/spark_logo.svg";

import styles from "./styles.module.scss";

export const Footer = () => {
  const dispatch = useDispatch();

  function openModalWindow() {
    dispatch(openModal());
  }

  return (
    <>
      <footer className={styles.footer} id="contacts">
        <img src={logo} className={styles.footer__logo} alt="logo" />
        <nav className={styles.footer__nav}>
          <Link to="main" smooth className={styles.footer__nav__link}>
            Главная
          </Link>
          <Link to="about" smooth className={styles.footer__nav__link}>
            О Компании
          </Link>
          <Link to="services" smooth className={styles.footer__nav__link}>
            Услуги
          </Link>
          <Link to="contacts" smooth className={styles.footer__nav__link}>
            Контакты
          </Link>
        </nav>
        <ModalButton
          text="Связаться с нами"
          onClick={() => openModalWindow()}
          marginTop="mt-8"
        />
        <hr className={styles.footer__separator} />
        <a
          href="tel:+77079691027"
          className={`${styles.footer__contact_link_margin} mt-8`}
        >
          +7 (707) 969 1027
        </a>

        <a
          href="mailto:info@CityBroker.kz"
          className={styles.footer__contact_link}
        >
          info@CityBroker.kz
        </a>
        <span className={`${styles.footer__contact_link} w-[70%] mb-15`}>
          Республика Казахстан, г. Алматы, Медеуский район, мкр-н «Думан-2» дом 18 оф. 55.
        </span>
        <img
          src={spark_logo}
          className={`${styles.footer__spark_logo}`}
          alt="spark"
          onClick={() => (location.href = "https://sparkstudio.kz/")}
        />
      </footer>
      <footer className={styles.footer_pc} id="contacts-pc">
        <div className="flex items-center justify-between w-[86.6%] m-auto mt-6">
          <img src={logo} className={styles.footer_pc__logo} alt="logo" />
          <nav className={styles.footer_pc__nav}>
            <Link smooth to="main-pc" className={styles.footer_pc__nav__link}>
              Главная
            </Link>
            <Link smooth to="about-pc" className={styles.footer_pc__nav__link}>
              О Компании
            </Link>
            <Link
              smooth
              to="services-pc"
              className={styles.footer_pc__nav__link}
            >
              Услуги
            </Link>
            <Link
              smooth
              to="contacts-pc"
              className={styles.footer_pc__nav__link}
            >
              Контакты
            </Link>
          </nav>
          <ModalButton
            text="Связаться с нами"
            onClick={() => openModalWindow()}
          />
        </div>
        <hr className={styles.footer_pc__separator} />
        <div className="flex items-center justify-between w-[86.6%] m-auto mb-10 ">
          <a
            href="mailto:info@CityBroker.kz"
            className={styles.footer_pc__contact_link}
          >
            info@CityBroker.kz
          </a>
          <span className={`${styles.footer_pc__contact_link} `}>
            Республика Казахстан, г. Алматы, Медеуский район, мкр-н «Думан-2» дом 18 оф. 55.
          </span>
          <div className="flex flex-col items-center">
            <a
              href="tel:+77079691027"
              className={`${styles.footer_pc__contact_link} mb-3`}
            >
              +7 (707) 969 1027
            </a>

          </div>
        </div>
        <img
          src={spark_logo}
          className={`${styles.footer_pc__spark_logo} mb-5 cursor-pointer`}
          alt="spark"
          onClick={() => (location.href = "https://sparkstudio.kz/")}
        />
      </footer>
    </>
  );
};
