import React from "react";
import styles from "./Task.module.css";

const Task = (props) => {
  return <div className={styles.item}>{props.task.content}</div>;
};

export default Task;
