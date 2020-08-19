import React from "react";
import styles from "./HabitElements.module.css";

const HabitTitleDescription = (props) => (
  <div className={styles.habitTitleDescription}>
    <h2>{props.title + " " + props.emoji}</h2>
    <p>{`${props.period}: ${
      props.count < 10 ? "0" + props.count : props.count
    } / ${props.goal < 10 ? "0" + props.goal : props.goal} COMPLETE`}</p>
  </div>
);

export default HabitTitleDescription;
