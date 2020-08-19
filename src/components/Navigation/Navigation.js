import React from "react";
import styles from "./Navigation.module.css";
import { motion } from "framer-motion";

const NavButton = (props) => (
  <motion.button
    onClick={() => props.onClick(true)}
    whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
    whileTap={{ scale: 0.9 }}
  >
    {props.children}
  </motion.button>
);

const Navigation = (props) => (
  <div className={styles.navigation}>
    <NavButton onClick={props.setOpenHabit}>CREATE</NavButton>
    <NavButton onClick={() => console.log("clicked")}>EDIT</NavButton>
    <NavButton onClick={() => console.log("clicked")}>FILTER</NavButton>
  </div>
);

export default Navigation;
