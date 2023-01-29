import React from "react";
import Date from "../component/Date";
import TaskList from "../component/TaskList";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <article className={styles.article}>
      <Date />
      <TaskList />
    </article>
  );
};

export default Main;
