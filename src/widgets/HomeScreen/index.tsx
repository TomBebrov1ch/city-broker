import { Button } from "@shared/ui/Button";
import { Slide } from "react-awesome-reveal";

import illustration from "@assets/illustration.svg";
import styles from "./styles.module.scss";

export const HomeScreen = () => {
  return (
    <>
      <main className="container m-auto mt-10" id="main">
        <Slide
          direction="left"
          className="w-full flex justify-center"
          triggerOnce
        >
          <h1 className={styles.heading}>
            Открой мир новых{""}
            <span className="text-custom-red"> инвестиционных </span>
            возможностей
          </h1>
        </Slide>
        <Slide direction="right" delay={100} triggerOnce>
          <p className="paragraph mt-4">
            Мы представляем биржевые интересы сотен уважаемых бизнесменов из
            Казахстана и соседних стран. Наши брокеры всегда в курсе изменений
            биржевых правил и создают выгодные условия для клиентов.
          </p>
        </Slide>
        <Slide direction="left" delay={150} triggerOnce>
          <img
            src={illustration}
            className={styles.illustration}
            alt="illustration"
          />
        </Slide>
        <Slide direction="right" delay={200} triggerOnce>
          <Button text="Подробнее" to="about" marginTop="mt-10" />
        </Slide>
      </main>
      <main className="container-pc pt-20" id="main-pc">
        <div className="flex flex-col">
          <Slide direction="left" delay={100} triggerOnce>
            <h1 className={styles.heading}>
              Открой мир новых{""}
              <span className="text-custom-red"> инвестиционных </span>
              возможностей
            </h1>
          </Slide>
          <Slide direction="left" delay={150} triggerOnce>
            <p className="paragraph mt-4 w-[60%]">
              Мы представляем биржевые интересы сотен уважаемых бизнесменов из
              Казахстана и соседних стран. Наши брокеры всегда в курсе изменений
              биржевых правил и создают выгодные условия для клиентов.
            </p>
          </Slide>
          <Slide direction="left" delay={200} triggerOnce>
            <Button text="Подробнее" to="about-pc" marginTop="mt-10" />
          </Slide>
        </div>
        <Slide direction="right" delay={250} className="w-full" triggerOnce>
          <img
            src={illustration}
            className={styles.illustration}
            alt="illustration"
          />
        </Slide>
      </main>
    </>
  );
};
