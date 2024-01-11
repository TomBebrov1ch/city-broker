import { Separator } from "@entities/Separator/ui";
import { StepCard } from "@entities/StepCard/ui";

import styles from "./styles.module.scss";

export const AboutScreen = () => {
  return (
    <>
      <section className="container m-auto mt-16" id="about">
        <Separator text="О нас" />
        <h2 className={styles.heading}>О компании</h2>
        <p className="paragraph mt-4">
          "CITY BROKER", со своей высококвалифицированной командой и накопленным
          опытом, уверенно удерживает позицию лидера в рядах брокерских фирм на
          фондовом рынке.
        </p>
        <span className={styles.sub_heading}>
          Наша схема <span className="text-custom-red">работы</span> очень
          проста:
        </span>
        <StepCard
          marginTop="mt-16"
          number="1"
          heading="Подача Заявки"
          text="Обсудите с брокером детали закупки, после чего он разместит аукцион на бирже. Затем заказчик проведёт отбор поставщиков на участие в аукционе."
        />
        <StepCard
          marginTop="mt-16"
          number="2"
          heading="Внесение Обеспечения"
          text="Заказчик выбирает поставщиков, которые вносят гарантии, затем следуют торги и заключение сделки по оптимальной цене с биржевым договором."
        />
        <StepCard
          marginTop="mt-16"
          number="3"
          heading="Исполнение Поставки"
          text="Поставщик выполняет условия договора, обеспечивая отгрузку товара в соответствии с условиями, оговоренными с Заказчиком."
        />
      </section>
      <section
        className="container-pc flex-col items-center m-auto pt-48 pb-20"
        id="about-pc"
      >
        <Separator text="О нас" />
        <h2 className={styles.heading}>О компании</h2>
        <p className="paragraph text-center w-[60%] mt-4">
          "CITY BROKER", со своей высококвалифицированной командой и накопленным
          опытом, уверенно удерживает позицию лидера в рядах брокерских фирм на
          фондовом рынке.
        </p>
        <span className={styles.sub_heading}>
          Наша схема <span className="text-custom-red">работы</span> очень
          проста:
        </span>
        <div className="flex items-center justify-between w-[100%]">
          <StepCard
            marginTop="mt-16"
            number="1"
            heading="Подача Заявки"
            text="Обсудите с брокером детали закупки, после чего он разместит аукцион на бирже. Затем заказчик проведёт отбор поставщиков на участие в аукционе."
          />
          <StepCard
            marginTop="mt-16"
            number="2"
            heading="Внесение Обеспечения"
            text="Заказчик выбирает поставщиков, которые вносят гарантии, затем следуют торги и заключение сделки по оптимальной цене с биржевым договором."
          />
          <StepCard
            marginTop="mt-16"
            number="3"
            heading="Исполнение Поставки"
            text="Поставщик выполняет условия договора, обеспечивая отгрузку товара в соответствии с условиями, оговоренными с Заказчиком."
          />
        </div>
      </section>
    </>
  );
};
