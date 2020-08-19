import React, { useState } from "react";
import styles from "./CreateArea.module.css";

import CreateTitle from "./CreateElements/CreateTitle";
import CreatePeriod from "./CreateElements/CreatePeriod";
import CreateGoal from "./CreateElements/CreateGoal";
import CreateColor from "./CreateElements/CreateColor";
import CreateEmoji from "./CreateElements/CreateEmoji";

import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Close";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

const DEFAULT_NEW_HABIT = {
  title: "",
  emoji: "",
  count: 0,
  goal: 3,
  period: "DAILY",
  color: "#f8c51b",
};

function CreateArea(props) {
  const [newHabit, setNewHabit] = useState({ ...DEFAULT_NEW_HABIT });

  // Handle input changes from Period/Goal/Emoji
  function setAttribute(name, newAttribute) {
    setNewHabit((prevNewHabit) => ({ ...prevNewHabit, [name]: newAttribute }));
  }

  // Handle add button click
  function handleClick(ev) {
    // Add new habit if all inputs filled
    if (newHabit.title !== "" && newHabit.goal > 0) {
      props.addHabit(newHabit);
      setNewHabit({ ...DEFAULT_NEW_HABIT });
      props.setOpenHabit(false);
    }
    ev.preventDefault();
  }

  return (
    <div className={styles.createArea}>
      <h2>CREATE</h2>
      <form>
        {/* Create Title */}
        <div className={styles.createGroup}>
          <p>NAME YOUR HABIT</p>
          <CreateTitle
            title={newHabit.title}
            setValue={(val) => setAttribute("title", val)}
          />
        </div>

        <div className={styles.createGroup}>
          <p>SET AN EMOJI</p>
          <CreateEmoji
            emoji={newHabit.emoji}
            setValue={(val) => setAttribute("emoji", val)}
          />
        </div>
        <div className={styles.createGroup}>
          <p>CHOOSE A PERIOD</p>
          <CreatePeriod
            period={newHabit.period}
            setValue={(val) => setAttribute("period", val)}
          />
        </div>
        <div className={styles.createGroup}>
          <p>SET YOUR GOAL</p>
          <CreateGoal
            period={newHabit.period}
            goal={newHabit.goal}
            setValue={(val) => setAttribute("goal", val)}
          />
        </div>
        <div className={styles.createGroup}>
          <p>CUSTOMISE THE COLOUR</p>
          <CreateColor
            color={newHabit.color}
            setValue={(val) => setAttribute("color", val)}
          />
        </div>

        {/* Add/Cancel Buttons - Material UI Package */}
        <Zoom in={true}>
          <Fab
            className={styles.addHabitIcon}
            type="submit"
            onClick={handleClick}
            color="primary"
          >
            <AddIcon />
          </Fab>
        </Zoom>
        <Zoom in={true}>
          <Fab
            className={styles.clearHabitIcon}
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
