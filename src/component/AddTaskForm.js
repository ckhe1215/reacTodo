import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import TextButton from "../UI/TextButton";
import styles from "./AddTaskForm.module.css";

const AddTaskForm = (props) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = Number(today.getMonth() + 1)
    .toString()
    .padStart(2, "0");
  const date = Number(today.getDate()).toString().padStart(2, 0);
  const inputDate = useRef();
  const inputContent = useRef();
  const [isValidInput, setIsValidInput] = useState(true);
  return (
    <Card>
      <form>
        <h3 className={styles.formTitle}>새로운 할일</h3>
        <div className={styles.inputGroup}>
          <label>날짜</label>
          <input
            type="date"
            ref={inputDate}
            defaultValue={year + "-" + month + "-" + date}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>내용</label>
          <input
            type="text"
            onChange={() => {
              if (inputContent.current.value.length !== 0)
                setIsValidInput(true);
            }}
            ref={inputContent}
          />
        </div>
        <div>
          {!isValidInput && (
            <p className={styles.warning}>할일을 입력해주세요</p>
          )}
        </div>
        <div className={styles.buttonSection}>
          <TextButton
            onClick={() => {
              props.onClose();
            }}
            color={"white"}
          >
            취소
          </TextButton>
          <TextButton
            color={"black"}
            onClick={() => {
              if (inputContent.current.value.length === 0) {
                setIsValidInput(false);
                return;
              }
              props.saveNewTask({
                date: inputDate.current.value,
                content: inputContent.current.value,
              });
              props.onClose();
            }}
          >
            저장
          </TextButton>
        </div>
      </form>
    </Card>
  );
};

export default AddTaskForm;
