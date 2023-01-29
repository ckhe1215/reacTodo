import React from "react";
import calendarIcon from "../img/icon/calendar/black-24dp/2x/sharp_calendar_month_black_24dp.png";
import userIcon from "../img/icon/user/black-24dp/2x/sharp_account_circle_black_24dp.png";
import styles from "./Header.module.css";
import ImageButton from "../UI/ImageButton";

const Header = () => {
  return (
    <header className={styles.header}>
      <ImageButton src={calendarIcon} alt="Calendar" />
      <ImageButton src={userIcon} alt="User profile" />
    </header>
  );
};

export default Header;
