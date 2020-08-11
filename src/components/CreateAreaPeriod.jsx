import React from "react";

function PeriodItemInput(props) {
  return (
    <>
      <input
        id={props.name.toLowerCase()}
        type="radio"
        name="period"
        checked={props.period === props.name}
        onChange={() => props.setAttribute("period", props.name)}
      />
      <label htmlFor={props.name.toLowerCase()}>{props.name}</label>
    </>
  );
}

function CreateAreaPeriod(props) {
  return (
    <div className="create-period">
      {["DAILY", "WEEKLY", "MONTHLY", "YEARLY"].map((x) => (
        <PeriodItemInput name={x} {...props} key={x} />
      ))}
    </div>
  );
}

export default CreateAreaPeriod;
