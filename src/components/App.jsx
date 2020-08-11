import React, { useState } from "react";

import CreateArea from "./CreateArea";
import Habit from "./Habit";
import NavigationButtons from "./NavigationButtons";

import Dialog from "@material-ui/core/Dialog";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function App() {
  const [openHabit, setOpenHabit] = useState(false);
  const [isOpenSnackbar, setOpenSnackbar] = useState(false);
  // Habit List
  const [habitList, setHabitList] = useState([
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
  ]);

  // Add habit to list from CreateArea
  function addHabit(habitItem) {
    setHabitList((prevHabitList) => [...prevHabitList, habitItem]);
    setOpenSnackbar(true);
  }

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

  return (
    <>
      <h1>HABIT TRACKER</h1>
      <NavigationButtons setOpenHabit={setOpenHabit} />

      <Dialog
        PaperProps={{
          styles: { borderRadius: "0.5rem" },
        }}
        onClose={() => setOpenHabit(false)}
        aria-labelledby="customized-dialog-title"
        open={openHabit}
      >
        <CreateArea addHabit={addHabit} setOpenHabit={setOpenHabit} />
      </Dialog>
      {habitList.map((habitItem, index) => (
        <Habit key={index} id={index} {...habitItem} setCount={setCount} />
      ))}

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
    </>
  );
}

export default App;
