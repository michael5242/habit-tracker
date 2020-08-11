import React, { useState, useEffect } from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { motion, useAnimation } from "framer-motion";
import Collapse from "@material-ui/core/Collapse";

function Habit(props) {
  const controls = useAnimation();
  const [isExpanded, setExpanded] = useState(false);
  const [isNoteSet, setNoteSet] = useState(false);
  const [note, setNote] = useState("");
  const [widthPercent, setWidthPercent] = useState(0);

  // Increase/Decrease and onMount effects based off completion width percentage
  useEffect(() => {
    if (
      widthPercent < Math.round((100 * props.count) / props.goal) &&
      widthPercent < 100
    ) {
      setTimeout(() => setWidthPercent(widthPercent + 1), 3);
      // Framer-motion effect
      if (widthPercent === 99) {
        controls.start({
          x: [0, 400, -400, 0],
          opacity: [1, 0, 0, 1],
        });
      }
    } else if (
      widthPercent > Math.round((100 * props.count) / props.goal) &&
      widthPercent > 0
    ) {
      setTimeout(() => setWidthPercent(widthPercent - 1), 3);
    }
  }, [widthPercent, props.count, props.goal, controls]);

  return (
    <div className="habit">
      <motion.div
        // Framer-motion
        animate={controls}
        onClick={() => setExpanded(!isExpanded)}
        whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
        whileTap={{ scale: 1.1 }}
        // React
        className="habit-tile"
        style={{
          background: `linear-gradient(to right, ${props.color}
        ${widthPercent}%,
        #dedede ${widthPercent}%)`,
        }}
      >
        {/* Habit Title and Description */}
        <div className="habit-text">
          <h2>{props.title + " " + props.emoji}</h2>
          <p>{`${props.period}: ${
            props.count < 10 ? "0" + props.count : props.count
          } / ${props.goal < 10 ? "0" + props.goal : props.goal} COMPLETE`}</p>
        </div>

        {/* Habit Counter and Increase/Decrease Buttons */}
        <div className="habit-counter">
          <p>{props.count}</p>
          <div
            className="habit-increase-decrease"
            onClick={(ev) => ev.stopPropagation()}
          >
            <ExpandLessIcon
              className="count-button"
              onClick={(ev) => {
                props.setCount(props.id, props.count + 1);
                ev.stopPropagation();
              }}
            />
            <ExpandMoreIcon
              className="count-button"
              onClick={(ev) => {
                props.setCount(props.id, props.count - 1);
                ev.stopPropagation();
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Habit Information/Description */}
      <Collapse in={isExpanded}>
        <div
          className="habit-information"
          style={{
            backgroundColor: "#dedede",
          }}
        >
          <p>
            You have completed <strong>{props.count}</strong> in total!
          </p>
          <br />
          <p>
            Every{" "}
            {props.period === "DAILY"
              ? "day"
              : props.period.slice(0, -2).toLowerCase()}{" "}
            you have made a commitment to {props.title.toLowerCase()} at least{" "}
            {props.goal} times. For this{" "}
            {props.period === "DAILY"
              ? "day"
              : props.period.slice(0, -2).toLowerCase()}{" "}
            {props.goal <= props.count
              ? `you have reached your goal! 🥳🎉`
              : `you have ${props.goal - props.count} more remaining.`}
          </p>
          <br />
          <form>
            <textarea
              placeholder={isNoteSet ? "" : "Write a note..."}
              rows={3}
              readOnly={isNoteSet}
              value={note}
              onChange={(ev) => setNote(ev.target.value)}
              style={{
                backgroundColor: isNoteSet ? "#cccccc" : "white",
              }}
            />
            <button
              onClick={(ev) => {
                setNoteSet(!isNoteSet);
                ev.preventDefault();
              }}
            >
              {isNoteSet ? "Edit Note" : "Set Note"}
            </button>
          </form>
        </div>
      </Collapse>
    </div>
  );
}

export default Habit;
