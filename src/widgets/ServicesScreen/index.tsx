import { Separator } from "@entities/Separator/ui";

import styles from "./styles.module.scss";

export const ServicesScreen = () => {
  return (
    <div
      className={`${styles.bg_image} w-full h-[100vh] bg-custom-black m-auto mt-16`}
    >
      <section className="container m-auto pt-10">
        <Separator text="Услуги" />
        <h3 className={styles.heading}>Наши Услуги</h3>
        <p className="paragraph white w-[80%] mt-4">
          Компания «CITY BROKER», предоставляет широкий спектр услуг в
          брокерской деятельности.
        </p>
      </section>
    </div>
  );
};
