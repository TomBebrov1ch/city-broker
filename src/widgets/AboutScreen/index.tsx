import { Separator } from "@entities/Separator/ui";

import styles from "./styles.module.scss";

export const AboutScreen = () => {
  return (
    <section className="container m-auto mt-10">
      <Separator text="О нас" />
      <h2 className={styles.heading}>О компании</h2>
      <p className="paragraph mt-4">
        "CITY BROKER", со своей высококвалифицированной командой и накопленным
        опытом, уверенно удерживает позицию лидера в рядах брокерских фирм на
        фондовом рынке.
      </p>
    </section>
  );
};
