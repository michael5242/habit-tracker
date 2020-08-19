import React from "react";
import styles from "./HabitElements.module.css";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const HabitCounter = (props) => (
  <div className={styles.habitCounter}>
    <p>{props.count}</p>
    <div
      className={styles.habitIncreaseDecrease}
      onClick={(ev) => ev.stopPropagation()}
    >
      <ExpandLessIcon
        className={styles.countButton}
        onClick={(ev) => {
          props.setCount(props.id, props.count + 1);
          ev.stopPropagation();
        }}
      />
      <ExpandMoreIcon
        className={styles.countButton}
        onClick={(ev) => {
          props.setCount(props.id, props.count - 1);
          ev.stopPropagation();
        }}
      />
    </div>
  </div>
);

export default HabitCounter;
