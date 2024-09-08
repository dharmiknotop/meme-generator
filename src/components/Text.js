"use client";
import React, { useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
  // states
  const [editMode, setEditMode] = useState(true); // will decide whether to show the input or text
  const [text, setText] = useState("double click to edit"); // text to be displayed

  return (
    <Draggable>
      {editMode ? (
        <input
          className="w-32 cursor-pointer mb-0.5 rounded-lg border border-slate-200 px-3 text-sm font-medium placeholder-slate-400 outline-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 disabled:placeholder-slate-400focus:border-blue-600 py-2 "
          onDoubleClick={() => {
            setEditMode(false);
          }}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setEditMode(false);
            }
          }}
        />
      ) : (
        <h1
          className="cursor-pointer"
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
