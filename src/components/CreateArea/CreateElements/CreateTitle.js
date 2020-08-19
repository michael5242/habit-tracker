import React from "react";
import styles from "./CreateElements.module.css";

const CreateTitle = (props) => (
  <input
    className={styles.createTitle}
    name="title"
    placeholder="Enter your habit"
    onChange={(ev) => props.setValue(ev.target.value.toUpperCase())}
    value={props.title}
  />
);

export default CreateTitle;

// Handle title input changes
// function handleTitleChange(ev) {
//   let { name, value } = ev.target;
//   if (typeof value === "string") value = value.toUpperCase();
//   setNewHabit((prevNewHabit) => ({ ...prevNewHabit, [name]: value }));
// }
