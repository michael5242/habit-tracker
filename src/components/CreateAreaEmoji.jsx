import React from "react";
import Picker from "emoji-picker-react";

function CreateAreaEmoji(props) {
  return (
    <div className="create-emoji">
      {props.emoji ? (
        <span>You chose: {props.emoji}</span>
      ) : (
        <span>No emoji chosen</span>
      )}
      <Picker
        onEmojiClick={(ev, emojiObject) =>
          props.setAttribute("emoji", emojiObject.emoji)
        }
      />
    </div>
  );
}

export default CreateAreaEmoji;
