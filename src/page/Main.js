import React from "react";
import Date from "../component/Date";
import TaskList from "../component/TaskList";
import styles from "./Main.module.css";
import ImageButton from "../UI/ImageButton";
import addIcon from "../img/icon/add/black-24dp/2x/outline_add_circle_black_24dp.png";

const Main = () => {
  return (
    <>
      <article className={styles.article}>
        <Date />
        <TaskList />
      </article>
      <div className={styles.buttonSection}>
        <ImageButton src={addIcon} alt="add button" />
      </div>
    </>
  );
};

export default Main;
