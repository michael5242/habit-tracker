import React from "react";

function CreateAreaGoal(props) {
  const periodString =
    props.period === "DAILY" ? "DAY" : props.period.slice(0, -2);

  return (
    <div className="create-goal">
      <input
        type="number"
        value={props.goal}
        onChange={(ev) =>
          props.setAttribute("goal", ev.target.value > 0 ? ev.target.value : "")
        }
        min={0}
      />
      <p>TIMES PER {periodString}</p>
    </div>
  );
}

export default CreateAreaGoal;
