import React from "react";
import { Link } from "react-scroll";

import styles from "./styles.module.scss";

interface ButtonProps {
  text: string;
  to: string;
  marginTop: string;
}

export const Button: React.FC<ButtonProps> = ({ text, marginTop, to }) => {
  return (
    <Link to={to} className={`${styles.button} ${marginTop}`}>
      {text}
    </Link>
  );
};
