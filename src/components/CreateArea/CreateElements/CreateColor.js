import React from "react";
import styles from "./CreateElements.module.css";

const COLORS = [
  "#f8c51b",
  "#f96262",
  "#23d5e7",
  "#dda6F7",
  "#2198d3",
  "#6ecfbb",
  "#bee14f",
  "#26ad60",
];

const ColorItemInput = (props) => (
  <>
    <input
      id={props.colorItemColor}
      type="radio"
      name="color"
      checked={props.color === props.colorItemColor}
      onChange={() => props.setValue(props.colorItemColor)}
    />
    <label
      htmlFor={props.colorItemColor}
      style={{
        backgroundColor: props.colorItemColor,
      }}
    ></label>
  </>
);

const CreateColor = (props) => (
  <div className={styles.createColor}>
    {COLORS.map((x) => (
      <ColorItemInput colorItemColor={x} key={x} {...props} />
    ))}
  </div>
);

export default CreateColor;
