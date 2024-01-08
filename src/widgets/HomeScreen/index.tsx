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
        <Button text="Связаться с нами" marginTop="mt-10" />
      </main>
    </>
  );
};
