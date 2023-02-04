import React, { useState } from "react";
import ImageButton from "../UI/ImageButton";
import styles from "./Task.module.css";
import checkboxBlankIcon from "../img/icon/checkbox_blank/1x/outline_check_box_outline_blank_black_24dp.png";
import checkboxFullIcon from "../img/icon/checkbox/1x/outline_check_box_black_24dp.png";
import editIcon from "../img/icon/edit/1x/outline_edit_black_24dp.png";
import removeIcon from "../img/icon/delete/1x/outline_delete_black_24dp.png";
import pendingIcon from "../img/icon/forward/1x/outline_forward_black_24dp.png";

const Task = (props) => {
  const [isDone, setIsDone] = useState(false);
  return (
    <div className={styles.item}>
      <div className={styles.frontGroup}>
        <ImageButton src={checkboxBlankIcon} alt="check box" />
        {props.task.content}
      </div>
      <div className={styles.backGroup}>
        <ImageButton src={pendingIcon} alt="pending" />
        <ImageButton src={editIcon} alt="edit" />
        <ImageButton src={removeIcon} alt="remove" />
      </div>
    </div>
  );
};

export default Task;
