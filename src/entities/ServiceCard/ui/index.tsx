import React from "react";

import styles from "./styles.module.scss";

interface ServiceText {
  service: string;
}

interface ServiceCardProps {
  heading: string;
  marginTop: string;
  services: ServiceText[];
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  heading,
  marginTop,
  services,
}) => {
  return (
    <div className={`${styles.service_card} ${marginTop}`}>
      <span className={styles.service_card__upper}>{heading}</span>
      <div className={styles.service_card__services}>
        <ol className={styles.service_card__services__list}>
          {services.map((service, index) => (
            <div className="flex items-center">
              <span
                className={styles.service_card__services__list__circle}
              ></span>
              <li
                key={index}
                className={styles.service_card__services__list__element}
              >
                {service.service}
              </li>
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
};
