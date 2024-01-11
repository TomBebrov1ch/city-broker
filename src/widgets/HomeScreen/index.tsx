import React from "react";
import { Button } from "@shared/ui/Button";

import illustration from "@assets/illustration.svg";
import styles from "./styles.module.scss";

export const HomeScreen = () => {
  return (
    <>
      <main className="container m-auto mt-10">
        <h1 className={styles.heading}>
          Открой мир новых{""}
          <span className="text-custom-red"> инвестиционных </span>
          возможностей
        </h1>
        <p className="paragraph mt-4">
          Мы представляем биржевые интересы сотен уважаемых бизнесменов из
          Казахстана и соседних стран. Наши брокеры всегда в курсе изменений
          биржевых правил и создают выгодные условия для клиентов.
        </p>
        <img
          src={illustration}
          className={styles.illustration}
          alt="illustration"
        />
        <Button text="Подробнее" marginTop="mt-10" />
      </main>
      <main className="container-pc pt-20">
        <div className="flex flex-col">
          <h1 className={styles.heading}>
            Открой мир новых{""}
            <span className="text-custom-red"> инвестиционных </span>
            возможностей
          </h1>
          <p className="paragraph mt-4">
            Мы представляем биржевые интересы сотен уважаемых бизнесменов из
            Казахстана и соседних стран. Наши брокеры всегда в курсе изменений
            биржевых правил и создают выгодные условия для клиентов.
          </p>
          <Button text="Подробнее" marginTop="mt-10" />
        </div>
        <img
          src={illustration}
          className={styles.illustration}
          alt="illustration"
        />
      </main>
    </>
  );
};
