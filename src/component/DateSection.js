import React from "react";
import ImageButton from "../UI/ImageButton";
import leftIcon from "../img/icon/leftArrow/black-24dp/1x/sharp_chevron_left_black_24dp.png";
import rightIcon from "../img/icon/rightArrow/black-24dp/1x/sharp_chevron_right_black_24dp.png";
import styles from "./DateSection.module.css";

const DateSection = (props) => {
  const MONTH_ARRAY = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const DAY_ARRAY = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentMonth = MONTH_ARRAY[props.focusedDate.getMonth()];
  const currentDate = props.focusedDate.getDate();
  const currentDay = DAY_ARRAY[props.focusedDate.getDay()];
  return (
    <section className={styles.dateSection}>
      <ImageButton
        src={leftIcon}
        alt="left arrow"
        onClick={props.setYesterday}
      />
      <div className={styles.dateInfo}>
        <h5>Today</h5>
        <h2>{currentMonth + " " + currentDate}</h2>
        <h5>{currentDay}</h5>
      </div>
      <ImageButton
        src={rightIcon}
        alt="right arrow"
        onClick={props.setTomorrow}
      />
    </section>
  );
};

export default DateSection;
