import { Separator } from "@entities/Separator/ui";
import { Slide } from "react-awesome-reveal";
import { StepCard } from "@entities/StepCard/ui";

import styles from "./styles.module.scss";

export const AboutScreen = () => {
  return (
    <>
      <section className="container m-auto mt-20" id="about">
        <Slide direction="left" delay={100} triggerOnce>
          <Separator text="О нас" />
        </Slide>
        <Slide direction="right" delay={150} triggerOnce>
          <h2 className={styles.heading}>О компании</h2>
        </Slide>
        <Slide direction="left" delay={200} triggerOnce>
          <p className="paragraph mt-4">
            "CITY BROKER", со своей высококвалифицированной командой и
            накопленным опытом, уверенно удерживает позицию лидера в рядах
            брокерских фирм на фондовом рынке.
          </p>
        </Slide>
        <Slide direction="right" className="mt-5" delay={250} triggerOnce>
          <span className={styles.sub_heading}>
            Наша схема <span className="text-custom-red">работы</span> очень
            проста:
          </span>
        </Slide>
        <Slide direction="left" delay={300} triggerOnce>
          <StepCard
            marginTop="mt-16"
            number="1"
            heading="Подача Заявки"
            text="Обсудите с брокером детали закупки, после чего он разместит аукцион на бирже. Затем заказчик проведёт отбор поставщиков на участие в аукционе."
          />
        </Slide>
        <Slide direction="right" delay={350} triggerOnce>
          <StepCard
            marginTop="mt-16"
            number="2"
            heading="Внесение Обеспечения"
            text="Заказчик выбирает поставщиков, которые вносят гарантии, затем следуют торги и заключение сделки по оптимальной цене с биржевым договором."
          />
        </Slide>
        <Slide direction="left" delay={400} triggerOnce>
          <StepCard
            marginTop="mt-16"
            number="3"
            heading="Исполнение Поставки"
            text="Поставщик выполняет условия договора, обеспечивая отгрузку товара в соответствии с условиями, оговоренными с Заказчиком."
          />
        </Slide>
      </section>
      <section
        className="container-pc flex-col items-center m-auto pt-48 pb-20"
        id="about-pc"
      >
        <Slide direction="left" triggerOnce delay={100}>
          <Separator text="О нас" />
        </Slide>
        <Slide direction="right" delay={150} triggerOnce>
          <h2 className={styles.heading}>О компании</h2>
        </Slide>
        <Slide
          direction="left"
          delay={200}
          className="flex w-full justify-center"
          triggerOnce
        >
          <p className="paragraph text-center w-[60%] mt-4">
            "CITY BROKER", со своей высококвалифицированной командой и
            накопленным опытом, уверенно удерживает позицию лидера в рядах
            брокерских фирм на фондовом рынке.
          </p>
        </Slide>
        <Slide direction="right" delay={250} className="mt-8" triggerOnce>
          <span className={styles.sub_heading}>
            Наша схема <span className="text-custom-red">работы</span> очень
            проста:
          </span>
        </Slide>
        <div className="flex items-center justify-between w-[100%]">
          <Slide direction="left" delay={300} triggerOnce>
            <StepCard
              marginTop="mt-16"
              number="1"
              heading="Подача Заявки"
              text="Обсудите с брокером детали закупки, после чего он разместит аукцион на бирже. Затем заказчик проведёт отбор поставщиков на участие в аукционе."
            />
          </Slide>
          <Slide direction="up" delay={350} triggerOnce>
            <StepCard
              marginTop="mt-16"
              number="2"
              heading="Внесение Обеспечения"
              text="Заказчик выбирает поставщиков, которые вносят гарантии, затем следуют торги и заключение сделки по оптимальной цене с биржевым договором."
            />
          </Slide>
          <Slide direction="right" delay={400} triggerOnce>
            <StepCard
              marginTop="mt-16"
              number="3"
              heading="Исполнение Поставки"
              text="Поставщик выполняет условия договора, обеспечивая отгрузку товара в соответствии с условиями, оговоренными с Заказчиком."
            />
          </Slide>
        </div>
      </section>
    </>
  );
};
