import React from "react";
import ImageButton from "../UI/ImageButton";
import leftIcon from "../img/icon/leftArrow/black-24dp/1x/sharp_chevron_left_black_24dp.png";
import rightIcon from "../img/icon/rightArrow/black-24dp/1x/sharp_chevron_right_black_24dp.png";
import styles from "./Date.module.css";

const Date = () => {
  return (
    <section className={styles.dateSection}>
      <ImageButton src={leftIcon} alt="left arrow" />
      <div className={styles.dateInfo}>
        <h5>Today</h5>
        <h2>Jan 29</h2>
        <h5>Sunday</h5>
      </div>
      <ImageButton src={rightIcon} alt="right arrow" />
    </section>
  );
};

export default Date;
