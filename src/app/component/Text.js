"use client";
import React, { useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
  // states
  const [editMode, setEditMode] = useState(false); // will decide whether to show the input or text
  const [text, setText] = useState("double click to edit"); // text to be displayed

  return (
    <Draggable>
      {editMode ? (
        <input
          onDoubleClick={() => {
            setEditMode(false);
          }}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      ) : (
        <h1
          onDoubleClick={() => {
            setEditMode(true);
          }}
        >
          {text}
        </h1>
      )}
    </Draggable>
  );
};

export default Text;
