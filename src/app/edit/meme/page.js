"use client";
import React, { createRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Text from "../../component/Text";
import { exportComponentAsJPEG } from "react-component-export-image";

const EditMeme = () => {
  //ref
  const memeRef = createRef(); // refrence to meme div

  //hooks
  const searchParams = useSearchParams();
  const imgURL = searchParams.get("url");

  //states
  const [count, setCount] = useState(0); //count of the text that user has added

  //functions
  const addText = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-4xl font-mono font-bold my-12">Edit meme </div>
      <div ref={memeRef} class="border-2 rounded-1xl">
        <img src={imgURL} width="250px" />
      </div>

      {Array(count)
        .fill(0)
        .map((item) => (
          <Text />
        ))}
      <div className="flex mt-12">
        <button
          class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          onClick={addText}
        >
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add Text
          </span>
        </button>

        <button
          class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          onClick={(item) => {
            exportComponentAsJPEG(memeRef);
          }}
        >
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Save
          </span>
        </button>
      </div>
    </div>
  );
};

export default EditMeme;
