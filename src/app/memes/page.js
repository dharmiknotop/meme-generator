"use client";
import React, { useEffect, useState } from "react";
import MemeCard from "../component/MemeCard";

const Meme = () => {
  //states
  const [data, setData] = useState([]); // all the meme templates data

  // APIs

  // Get all the meme templates
  const getAllMemes = async () => {
    try {
      const response = await fetch("https://api.imgflip.com/get_memes");
      let data = await response.json();

      setData(data.data.memes);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffects
  useEffect(() => {
    getAllMemes();
  }, []);

  return (
    <div className="w-[820px] mx-auto max-w-full">
      <div class="grid grid-flow-row-dense grid-cols-3 gap-6">
        {data.map((item) => (
          <MemeCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Meme;
