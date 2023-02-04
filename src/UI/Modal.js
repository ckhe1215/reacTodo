import React from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <>
      <div onClick={props.onClick} className={styles.backdrop}></div>
      <div className={styles.modal}>{props.children}</div>
    </>
  );
};

export default Modal;
