import React from "react";
import styles from "./ImageButton.module.css";

const ImageButton = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <img src={props.src} alt={props.alt} />
    </button>
  );
};

export default ImageButton;
