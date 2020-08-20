import React from "react";
import styles from "./Navigation.module.css";
import { motion } from "framer-motion";

const NavButton = (props) => (
  <motion.button
    onClick={props.onClick}
    whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
    whileTap={{ scale: 0.9 }}
    disabled={props.disabled}
  >
    {props.children}
  </motion.button>
);

const Navigation = (props) => (
  <div className={styles.navigation}>
    <NavButton onClick={props.handleOpenCreateHabit} disabled={false}>
      CREATE
    </NavButton>
    <NavButton
      onClick={() => console.log("clicked")}
      disabled={props.isOpenCreateHabit}
    >
      EDIT
    </NavButton>
    <NavButton
      onClick={() => console.log("clicked")}
      disabled={props.isOpenCreateHabit}
    >
      FILTER
    </NavButton>
  </div>
);

export default Navigation;
