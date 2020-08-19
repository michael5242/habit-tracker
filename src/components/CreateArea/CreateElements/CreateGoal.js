import React from "react";
import styles from "./CreateElements.module.css";

const CreateGoal = (props) => {
  const periodString =
    props.period === "DAILY" ? "DAY" : props.period.slice(0, -2);

  return (
    <div className={styles.createGoal}>
      <input
        type="number"
        value={props.goal}
        onChange={(ev) =>
          props.setValue(ev.target.value > 0 ? ev.target.value : "")
        }
        min={0}
      />
      <p>TIMES PER {periodString}</p>
    </div>
  );
};

export default CreateGoal;
