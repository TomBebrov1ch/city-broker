import React from "react";

import styles from "./styles.module.scss";

interface SeparatorProps {
  text: string;
}

export const Separator: React.FC<SeparatorProps> = ({ text }) => {
  return (
    <div className={styles.separator}>
      <span className={styles.text}>{text}</span>
      <hr className={styles.line} />
    </div>
  );
};
