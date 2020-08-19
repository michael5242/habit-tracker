import React, { useState, useEffect } from "react";
import styles from "./Habit.module.css";

import HabitTitleDescription from "./HabitElements/HabitTitleDescription";
import HabitCounter from "./HabitElements/HabitCounter";
import HabitInformation from "./HabitElements/HabitInformation";

import { motion, useAnimation } from "framer-motion";
import Collapse from "@material-ui/core/Collapse";

function Habit(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [widthPercent, setWidthPercent] = useState(0);
  const controls = useAnimation();

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
    <div className={styles.habit}>
      <motion.div
        // Framer-motion
        animate={controls}
        onClick={() => setExpanded(!isExpanded)}
        whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
        whileTap={{ scale: 1.1 }}
        // React
        className={styles.habitTile}
        style={{
          background: `linear-gradient(to right, ${props.color}
        ${widthPercent}%,
        #dedede ${widthPercent}%)`,
        }}
      >
        <HabitTitleDescription
          title={props.title}
          emoji={props.emoji}
          period={props.period}
          count={props.count}
          goal={props.goal}
        />
        <HabitCounter
          setCount={props.setCount}
          id={props.id}
          count={props.count}
        />
      </motion.div>

      {/* Habit Information/Description */}
      <Collapse in={isExpanded}>
        <HabitInformation
          title={props.title}
          period={props.period}
          count={props.count}
          goal={props.goal}
        />
      </Collapse>
    </div>
  );
}

export default Habit;
