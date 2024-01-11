import { Separator } from "@entities/Separator/ui";
import { Slide } from "react-awesome-reveal";
import { ServiceCard } from "@entities/ServiceCard/ui";

import styles from "./styles.module.scss";

const firstCardData = [
  { service: "Представление ваших интересов на рынке" },
  { service: "Заключение сделок на товарных биржах" },
  { service: "Возможность участия иностранных компаний" },
  { service: "Полное юридическое сопровождение сделки" },
  {
    service:
      "Консультации по вопросам законодательства в области биржевой торговли",
  },
];

const secondCardData = [
  { service: "Поиск потенциальных поставщиков ваших товаров" },
  { service: "Прозрачность процесса закупок и экономия закупочных средств" },
];

const thirdCardData = [
  {
    service:
      "Своевременное оповещение о публикации интересующих товаров в проводимых, и идущих сделках",
  },
  { service: "Честная конкуренция оппонентов" },
];

export const ServicesScreen = () => {
  return (
    <>
      <div
        className={`${styles.bg_image} w-full  bg-custom-black m-auto mt-16`}
        id="services"
      >
        <section className="container m-auto pt-10" id="services">
          <Slide direction="left" delay={100} triggerOnce>
            <Separator text="Услуги" />
          </Slide>
          <Slide direction="right" delay={150} triggerOnce>
            <h3 className={styles.heading}>Наши Услуги</h3>
          </Slide>
          <Slide
            direction="left"
            delay={200}
            triggerOnce
            className="w-full flex items-center justify-center"
          >
            <p className="paragraph white w-[80%] mt-4">
              Компания «CITY BROKER», предоставляет широкий спектр услуг в
              брокерской деятельности.
            </p>
          </Slide>
          <Slide direction="right" delay={250} triggerOnce>
            <ServiceCard
              heading="Для Клиентов"
              marginTop="mt-10"
              services={firstCardData}
            />
          </Slide>
          <Slide direction="left" delay={300} triggerOnce>
            <ServiceCard
              heading="Для заказчиков"
              marginTop="mt-10"
              services={secondCardData}
            />
          </Slide>
          <Slide direction="right" delay={350} triggerOnce>
            <ServiceCard
              heading="Для Клиентов"
              marginTop="mt-10 mb-16"
              services={thirdCardData}
            />
          </Slide>
        </section>
        <section
          className="container-pc flex-col items-center m-auto pt-10"
          id="services-pc"
        >
          <Slide direction="left" delay={100} triggerOnce>
            <Separator text="Услуги" />
          </Slide>
          <Slide direction="right" delay={150} triggerOnce>
            <h3 className={styles.heading}>Наши Услуги</h3>
          </Slide>
          <Slide
            direction="left"
            delay={200}
            triggerOnce
            className="flex w-full justify-center"
          >
            <p className="paragraph white w-[30%] text-center mt-5">
              Компания «CITY BROKER», предоставляет широкий спектр услуг в
              брокерской деятельности.
            </p>
          </Slide>
          <div className="flex items-center justify-between w-full mt-8 mb-16">
            <Slide direction="left" delay={250} triggerOnce>
              <ServiceCard
                heading="Для Клиентов"
                marginTop="mt-0"
                services={firstCardData}
              />
            </Slide>
            <Slide direction="up" delay={300} triggerOnce>
              <ServiceCard
                heading="Для заказчиков"
                marginTop="mt-0"
                services={secondCardData}
              />
            </Slide>
            <Slide direction="right" delay={350} triggerOnce>
              <ServiceCard
                heading="Для Клиентов"
                marginTop="mt-0"
                services={thirdCardData}
              />
            </Slide>
          </div>
        </section>
      </div>
    </>
  );
};
