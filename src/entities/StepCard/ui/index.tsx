import React from "react";

import styles from "./styles.module.scss";

interface StepCardData {
  number: string;
  heading: string;
  text: string;
  marginTop: string;
}

export const StepCard: React.FC<StepCardData> = ({
  number,
  text,
  heading,
  marginTop,
}) => {
  return (
    <div className={`${styles.step_card} ${marginTop}`}>
      <span className={styles.step_card__number}>{number}</span>
      <span className={styles.step_card__heading}>{heading}</span>
      <hr className={styles.step_card__separator} />
      <p className={styles.step_card__paragraph}>{text}</p>
    </div>
  );
};
