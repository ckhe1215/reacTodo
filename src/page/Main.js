import React, { useState } from "react";
import ReactDOM from "react-dom";
import DateSection from "../component/DateSection";
import TaskList from "../component/TaskList";
import AddTaskForm from "../component/AddTaskForm";
import styles from "./Main.module.css";
import ImageButton from "../UI/ImageButton";
import addIcon from "../img/icon/add/black-24dp/2x/outline_add_circle_black_24dp.png";
import Modal from "../UI/Modal";
import { STATUS } from "../util/common.js";

const Main = () => {
  const [focusedDate, setFocusedDate] = useState(new Date());
  const [task, setTask] = useState([
    {
      id: 1,
      date: new Date("2023-01-29"),
      content: "영어 공부",
      status: STATUS.START,
    },
    {
      id: 2,
      date: new Date(),
      content: "출근하기",
      status: STATUS.DONE,
    },
    {
      id: 3,
      date: new Date(),
      content: "영어 공부",
      status: STATUS.START,
    },
  ]);
  const [onModal, setOnModal] = useState(false);
  let max_id = task.length;

  const setYesterday = () => {
    setFocusedDate(new Date(focusedDate.setDate(focusedDate.getDate() - 1)));
  };

  const setTomorrow = () => {
    setFocusedDate(new Date(focusedDate.setDate(focusedDate.getDate() + 1)));
  };

  const saveNewTask = (input) => {
    max_id += 1;
    const newTask = {
      id: max_id,
      date: new Date(input.date),
      content: input.content,
    };
    setTask((prevState) => [...prevState, newTask]);
  };

  const handleTaskStatus = (id, status) => {
    setTask((prevState) => {
      let newTask = [...prevState];
      newTask.map((item) => {
        if (item.id === id) {
          item.status = status;
        }
        return item;
      });
      return newTask;
    });
  };

  return (
    <>
      <article className={styles.article}>
        <DateSection
          focusedDate={focusedDate}
          setYesterday={setYesterday}
          setTomorrow={setTomorrow}
        />
        <TaskList
          focusedDate={focusedDate}
          task={task}
          handleTaskStatus={handleTaskStatus}
        />
      </article>
      {onModal &&
        ReactDOM.createPortal(
          <Modal
            onClick={() => {
              setOnModal(false);
            }}
          >
            <AddTaskForm
              onClose={() => {
                setOnModal(false);
              }}
              saveNewTask={saveNewTask}
            />
          </Modal>,
          document.getElementById("overlay")
        )}
      <div className={styles.buttonSection}>
        <ImageButton
          onClick={() => {
            setOnModal(true);
          }}
          src={addIcon}
          alt="add button"
        />
      </div>
    </>
  );
};

export default Main;
