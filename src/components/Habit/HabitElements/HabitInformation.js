import React from "react";

import styles from "./HabitElements.module.css";

const HabitInformation = (props) => (
  <div
    className={styles.habitInformation}
    style={{
      backgroundColor: "#dedede",
    }}
  >
    <p>
      You have completed <strong>{props.count}</strong> in total!
    </p>
    <br />
    <p>
      Every{" "}
      {props.period === "DAILY"
        ? "day"
        : props.period.slice(0, -2).toLowerCase()}{" "}
      you have made a commitment to {props.title.toLowerCase()} at least{" "}
      {props.goal} times. For this{" "}
      {props.period === "DAILY"
        ? "day"
        : props.period.slice(0, -2).toLowerCase()}{" "}
      {props.goal <= props.count
        ? `you have reached your goal! 🥳🎉`
        : `you have ${props.goal - props.count} more remaining.`}
    </p>
  </div>
);

export default HabitInformation;
