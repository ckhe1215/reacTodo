import React from "react";
import styles from "./TextButton.module.css";

const TextButton = (props) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={`${styles.textButton} ${
        props.color === "black" ? styles.colorBlack : styles.colorWhite
      }`}
    >
      {props.children}
    </button>
  );
};

export default TextButton;
