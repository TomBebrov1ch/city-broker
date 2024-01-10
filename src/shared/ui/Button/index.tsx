import React from "react";
import { Link } from "react-scroll";

import styles from "./styles.module.scss";

interface ButtonProps {
  text: string;
  to?: string | any;
  marginTop: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, marginTop, to }) => {
  return (
    <Link to={to} className={`${styles.button} ${marginTop}`}>
      {text}
    </Link>
  );
};

export const ModalButton: React.FC<ButtonProps> = ({
  text,
  marginTop,
  onClick,
}) => {
  return (
    <button className={`${styles.button} ${marginTop}`} onClick={onClick}>
      {text}
    </button>
  );
};
