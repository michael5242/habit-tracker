import React, { useState } from "react";

import CreateAreaPeriod from "./CreateAreaPeriod";
import CreateAreaGoal from "./CreateAreaGoal";
import CreateAreaColor from "./CreateAreaColor";
import CreateAreaEmoji from "./CreateAreaEmoji";

import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Close";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
const defaultNewHabit = {
  title: "",
  emoji: "",
  count: 0,
  goal: 3,
  period: "DAILY",
  color: "#f8c51b",
};

function CreateArea(props) {
  const [newHabit, setNewHabit] = useState({ ...defaultNewHabit });

  // Handle title input changes
  function handleTitleChange(ev) {
    let { name, value } = ev.target;
    if (typeof value === "string") value = value.toUpperCase();
    setNewHabit((prevNewHabit) => ({ ...prevNewHabit, [name]: value }));
  }
  // Handle input changes from Period/Goal/Emoji
  function setAttribute(name, newAttribute) {
    setNewHabit((prevNewHabit) => ({ ...prevNewHabit, [name]: newAttribute }));
  }
  // Handle add button click
  function handleClick(ev) {
    // Add new habit if all inputs filled
    if (newHabit.title !== "" && newHabit.goal > 0) {
      props.addHabit(newHabit);
      setNewHabit({ ...defaultNewHabit });
      props.setOpenHabit(false);
    }
    ev.preventDefault();
  }

  return (
    <div className="create-area">
      <h2>CREATE</h2>
      <form>
        {/* Create Title */}
        <div className="create-group">
          <p>NAME YOUR HABIT</p>
          <input
            className="create-title"
            name="title"
            placeholder="Enter your habit"
            onChange={handleTitleChange}
            value={newHabit.title}
          />
        </div>

        {/* Create Emoji */}
        <div className="create-group">
          <p>SET AN EMOJI</p>
          <CreateAreaEmoji emoji={newHabit.emoji} setAttribute={setAttribute} />
        </div>

        {/* Create Period */}
        <div className="create-group">
          <p>CHOOSE A PERIOD</p>
          <CreateAreaPeriod
            period={newHabit.period}
            setAttribute={setAttribute}
          />
        </div>

        {/* Create Goal */}
        <div className="create-group">
          <p>SET YOUR GOAL</p>
          <CreateAreaGoal
            period={newHabit.period}
            goal={newHabit.goal}
            setAttribute={setAttribute}
          />
        </div>

        {/* Create Color */}
        <div className="create-group">
          <p>CUSTOMISE THE COLOUR</p>
          <CreateAreaColor color={newHabit.color} setAttribute={setAttribute} />
        </div>

        {/* Add/Cancel Buttons - Material UI Package */}
        <Zoom in={true}>
          <Fab
            className="add-habit-icon"
            type="submit"
            onClick={handleClick}
            color="primary"
          >
            <AddIcon />
          </Fab>
        </Zoom>
        <Zoom in={true}>
          <Fab
            className="clear-habit-icon"
            onClick={() => props.setOpenHabit(false)}
            color="secondary"
          >
            <ClearIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
