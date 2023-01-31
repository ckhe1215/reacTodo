import React from "react";
import Task from "./Task";
import styles from "./TaskList.module.css";

const TaskList = () => {
  return (
    <section className={styles.taskList}>
      <Task></Task>
      <Task></Task>
      <Task></Task>
      <Task></Task>
      <Task></Task>
      <Task></Task>
      <Task></Task>
      <Task></Task>
      <Task></Task>
      <Task></Task>
    </section>
  );
};

export default TaskList;
