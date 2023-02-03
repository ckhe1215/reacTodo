import React, { useState } from "react";
import DateSection from "../component/DateSection";
import TaskList from "../component/TaskList";
import styles from "./Main.module.css";
import ImageButton from "../UI/ImageButton";
import addIcon from "../img/icon/add/black-24dp/2x/outline_add_circle_black_24dp.png";

const Main = () => {
  const [focusedDate, setFocusedDate] = useState(new Date());
  const [task, setTask] = useState([
    {
      id: 1,
      date: new Date("2023-01-29"),
      content: "영어 공부",
    },
    {
      id: 2,
      date: new Date(),
      content: "출근하기",
    },
    {
      id: 3,
      date: new Date(),
      content: "영어 공부",
    },
  ]);

  const setYesterday = () => {
    setFocusedDate(new Date(focusedDate.setDate(focusedDate.getDate() - 1)));
  };

  const setTomorrow = () => {
    setFocusedDate(new Date(focusedDate.setDate(focusedDate.getDate() + 1)));
  };

  return (
    <>
      <article className={styles.article}>
        <DateSection
          focusedDate={focusedDate}
          setYesterday={setYesterday}
          setTomorrow={setTomorrow}
        />
        <TaskList focusedDate={focusedDate} task={task} />
      </article>
      <div className={styles.buttonSection}>
        <ImageButton src={addIcon} alt="add button" />
      </div>
    </>
  );
};

export default Main;
