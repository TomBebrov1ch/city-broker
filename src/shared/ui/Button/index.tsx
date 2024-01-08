import React from "react";

import styles from "./styles.module.scss";

interface ButtonProps {
  text: string;
  marginTop: string;
}

export const Button: React.FC<ButtonProps> = ({ text, marginTop }) => {
  return <button className={`${styles.button} ${marginTop}`}>{text}</button>;
};
