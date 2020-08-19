import React, { useState } from "react";
import styles from "./App.module.css";

import CreateArea from "../CreateArea/CreateArea";
import Habit from "../Habit/Habit";
import Navigation from "../Navigation/Navigation";

import { motion, useAnimation } from "framer-motion";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const DEFAULT_HABIT_LIST = [
  {
    title: "WAKE UP EARLY",
    emoji: "🌞",
    count: 3,
    goal: 8,
    period: "WEEKLY",
    color: "#f8c51b",
  },
  {
    title: "WORKOUT",
    emoji: "💪",
    count: 4,
    goal: 5,
    period: "WEEKLY",
    color: "#f96262",
  },
  {
    title: "SAVE MONEY",
    emoji: "💸",
    count: 3,
    goal: 4,
    period: "DAILY",
    color: "#6ecfbb",
  },
];

function App() {
  const [isOpenCreateHabit, setOpenCreateHabit] = useState(false);
  const [isOpenSnackbar, setOpenSnackbar] = useState(false);
  const [habitList, setHabitList] = useState(DEFAULT_HABIT_LIST);
  const controlsHabitList = useAnimation();
  const controlsCreateHabit = useAnimation();

  // Increase/Decrease count from Habit
  function setCount(id, newCount) {
    if (newCount < 0) return;
    setHabitList((prevHabitList) =>
      prevHabitList.map((item, index) => {
        return index === id ? { ...item, count: newCount } : item;
      })
    );
  }

  // Handle snackbar close
  function handleSnackbarClose(ev, reason) {
    if (reason === "clickaway") return;
    setOpenSnackbar(false);
  }

  // Handle CreateHabit open
  function handleOpenCreateHabit() {
    if (isOpenCreateHabit) return;
    controlsCreateHabit.start({
      x: [720, 0],
      opacity: [0, 1],
    });
    controlsHabitList.start({
      x: [0, -720],
      opacity: [1, 0],
    });
    setOpenCreateHabit(true);
  }

  // Handle add habit to list from CreateArea
  function handleFinishCreateHabit(habitItem) {
    setHabitList((prevHabitList) => [...prevHabitList, habitItem]);
    controlsCreateHabit.start({
      x: [0, -720],
      opacity: [1, 0],
    });
    controlsHabitList.start({
      x: [720, 0],
      opacity: [0, 1],
    });
    setOpenCreateHabit(false);
    setOpenSnackbar(true);
  }

  // Handle CreateHabit close (without new habit)
  function handleCancelCreateHabit() {
    controlsCreateHabit.start({
      x: [0, 720],
      opacity: [1, 0],
    });
    controlsHabitList.start({
      x: [-720, 0],
      opacity: [0, 1],
    });
    setOpenCreateHabit(false);
  }

  return (
    <div className={styles.app}>
      <h1>HABIT TRACKER</h1>
      <Navigation handleOpenCreateHabit={handleOpenCreateHabit} />

      {/* Main - Habit List & Create Habit */}
      <div className={styles.mainContainer}>
        <motion.div
          className={styles.createAreaContainer}
          animate={controlsCreateHabit}
        >
          <CreateArea
            handleFinishCreateHabit={handleFinishCreateHabit}
            handleCancelCreateHabit={handleCancelCreateHabit}
          />
        </motion.div>
        <motion.div
          className={styles.habitListContainer}
          animate={controlsHabitList}
        >
          {habitList.map((habitItem, index) => (
            <Habit key={index} id={index} {...habitItem} setCount={setCount} />
          ))}
        </motion.div>
      </div>

      {/* Snackbar when new habit is created - Material UI */}
      <Snackbar
        open={isOpenSnackbar}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity="success"
        >
          New habit created!
        </MuiAlert>
      </Snackbar>
    </div>
  );
}

export default App;
