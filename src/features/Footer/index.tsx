import { Link } from "react-scroll";
import { ModalButton } from "@shared/ui/Button";

import logo from "@assets/logo.svg";
import spark_logo from "@assets/spark_logo.svg";

import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <img src={logo} className={styles.footer__logo} alt="logo" />
        <nav className={styles.footer__nav}>
          <Link to="main" className={styles.footer__nav__link}>
            Главная
          </Link>
          <Link to="about" className={styles.footer__nav__link}>
            О Компании
          </Link>
          <Link to="services" className={styles.footer__nav__link}>
            Услуги
          </Link>
          <Link to="markets" className={styles.footer__nav__link}>
            Площадки
          </Link>
          <Link to="contacts" className={styles.footer__nav__link}>
            Контакты
          </Link>
        </nav>
        <ModalButton
          text="Связаться с нами"
          onClick={() => console.log("aaa")}
          marginTop="mt-8"
        />
        <hr className={styles.footer__separator} />
        <a
          href="tel:+77273316641"
          className={`${styles.footer__contact_link_margin} mt-8`}
        >
          +7 (727) 331 66 41
        </a>
        <a href="tel:+77475281601" className={styles.footer__contact_link}>
          +7 (747) 528 16 01{" "}
        </a>
        <a
          href="mailto:Info@korund-777.kz"
          className={styles.footer__contact_link}
        >
          Info@korund-777.kz
        </a>
        <span className={`${styles.footer__contact_link} w-[70%] mb-15`}>
          Республика Казахстан,050064, г. Алматы,мкр. Думан-2, д. 18, кв. 55
        </span>
        <img
          src={spark_logo}
          className={`${styles.footer__spark_logo}`}
          alt="spark"
          onClick={() => (location.href = "https://sparkstudio.kz/")}
        />
      </footer>
      <footer className={styles.footer_pc}>
        <div className="flex items-center justify-between w-[86.6%]  m-auto">
          <img src={logo} className={styles.footer_pc__logo} alt="logo" />
          <nav className={styles.footer_pc__nav}>
            <Link to="main" className={styles.footer_pc__nav__link}>
              Главная
            </Link>
            <Link to="about" className={styles.footer_pc__nav__link}>
              О Компании
            </Link>
            <Link to="services" className={styles.footer_pc__nav__link}>
              Услуги
            </Link>
            <Link to="markets" className={styles.footer_pc__nav__link}>
              Площадки
            </Link>
            <Link to="contacts" className={styles.footer_pc__nav__link}>
              Контакты
            </Link>
          </nav>
          <ModalButton
            text="Связаться с нами"
            onClick={() => console.log("aaa")}
          />
        </div>
        <hr className={styles.footer_pc__separator} />
        <div className="flex items-center justify-between w-[86.6%] m-auto mb-10 ">
          <a
            href="mailto:Info@korund-777.kz"
            className={styles.footer_pc__contact_link}
          >
            Info@korund-777.kz
          </a>
          <span className={`${styles.footer_pc__contact_link} `}>
            Республика Казахстан,050064, г. Алматы,мкр. Думан-2, д. 18, кв. 55
          </span>
          <div className="flex flex-col items-center">
            <a
              href="tel:+77273316641"
              className={`${styles.footer_pc__contact_link} mb-3`}
            >
              +7 (727) 331 66 41
            </a>
            <a
              href="tel:+77475281601"
              className={styles.footer_pc__contact_link}
            >
              +7 (747) 528 16 01{" "}
            </a>
          </div>
        </div>
        <img
          src={spark_logo}
          className={`${styles.footer_pc__spark_logo} mb-5`}
          alt="spark"
          onClick={() => (location.href = "https://sparkstudio.kz/")}
        />
      </footer>
    </>
  );
};
