import React from "react";
import styles from "./CreateElements.module.css";
import Picker from "emoji-picker-react";

const CreateEmoji = (props) => (
  <div className={styles.createEmoji}>
    {props.emoji ? (
      <span>You chose: {props.emoji}</span>
    ) : (
      <span>No emoji chosen</span>
    )}
    <Picker
      onEmojiClick={(ev, emojiObject) => props.setValue(emojiObject.emoji)}
    />
  </div>
);

export default CreateEmoji;
