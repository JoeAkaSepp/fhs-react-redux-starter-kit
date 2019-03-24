import React from "react";
import styles from "./Button.module.css";

const Button = ({ children }) => (
  <button className={`${styles.button} ${styles.primary}`}>{children}</button>
);

export default Button;
