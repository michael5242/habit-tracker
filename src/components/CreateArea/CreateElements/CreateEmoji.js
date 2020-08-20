import React, { useRef } from "react";
import styles from "./CreateElements.module.css";
import { EmojiButton } from "@joeattardi/emoji-button";

function CreateEmoji(props) {
  const textEl = useRef(null);
  const picker = new EmojiButton({
    position: "bottom-start",
  });

  picker.on("emoji", (selection) => {
    props.setValue(selection.emoji);
  });

  return (
    <div className={styles.createEmoji}>
      <p ref={textEl} onClick={() => picker.togglePicker(textEl.current)}>
        {props.emoji ? `You chose: ${props.emoji}` : "No emoji chosen"}
      </p>
    </div>
  );
}

export default CreateEmoji;
