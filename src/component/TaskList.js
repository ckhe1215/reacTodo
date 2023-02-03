import React from "react";
import Task from "./Task";
import styles from "./TaskList.module.css";

const TaskList = (props) => {
  const todayTask = props.task.filter((item) => {
    return item.date.toDateString() === props.focusedDate.toDateString();
  });
  return (
    <section className={styles.taskList}>
      {todayTask.map((item) => {
        return <Task key={item.id} task={item}></Task>;
      })}
    </section>
  );
};

export default TaskList;
