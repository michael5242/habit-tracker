import React from "react";

function ColorItemInput(props) {
  return (
    <>
      <input
        id={props.colorItemColor}
        type="radio"
        name="color"
        checked={props.color === props.colorItemColor}
        onChange={() => props.setAttribute("color", props.colorItemColor)}
      />
      <label
        htmlFor={props.colorItemColor}
        style={{
          backgroundColor: props.colorItemColor,
        }}
      ></label>
    </>
  );
}

function CreateAreaColor(props) {
  return (
    <div className="create-color">
      {[
        "#f8c51b",
        "#f96262",
        "#23d5e7",
        "#dda6F7",
        "#2198d3",
        "#6ecfbb",
        "#bee14f",
        "#26ad60",
      ].map((x) => (
        <ColorItemInput colorItemColor={x} {...props} key={x} />
      ))}
    </div>
  );
}

export default CreateAreaColor;
