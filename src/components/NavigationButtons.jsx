import React from "react";

import { motion } from "framer-motion";

function NavButton(props) {
  return (
    <motion.button
      onClick={() => props.onClick(true)}
      whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
      whileTap={{ scale: 0.9 }}
    >
      {props.text}
    </motion.button>
  );
}

function NavigationButtons(props) {
  return (
    <div className="navigation-buttons">
      <NavButton text="CREATE" onClick={props.setOpenHabit} />
      <NavButton text="EDIT" onClick={() => console.log("clicked")} />
      <NavButton text="FILTER" onClick={() => console.log("clicked")} />
    </div>
  );
}

export default NavigationButtons;
