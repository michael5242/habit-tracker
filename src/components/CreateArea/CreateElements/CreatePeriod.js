import React from "react";
import styles from "./CreateElements.module.css";

const PERIODS = ["DAILY", "WEEKLY", "MONTHLY", "YEARLY"];

const PeriodItemInput = (props) => (
  <>
    <input
      id={props.name.toLowerCase()}
      type="radio"
      name="period"
      checked={props.period === props.name}
      onChange={() => props.setValue(props.name)}
    />
    <label htmlFor={props.name.toLowerCase()}>{props.name}</label>
  </>
);

const CreateAreaPeriod = (props) => (
  <div className={styles.createPeriod}>
    {PERIODS.map((x) => (
      <PeriodItemInput name={x} {...props} key={x} />
    ))}
  </div>
);

export default CreateAreaPeriod;
