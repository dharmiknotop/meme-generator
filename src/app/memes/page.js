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
    <div>
      <div class="relative w-[1120px] mx-auto max-w-full my-32" id="home">
        <div
          aria-hidden="true"
          class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40"
        >
          <div class="blur-[106px] h-[400px] bg-gradient-to-br from-orange-300 to-orange-200"></div>
          <div class="blur-[106px] h-[400px] bg-gradient-to-r from-orange-500 to-orange-300"></div>
        </div>

        <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 mb-48">
          <div class="relative pt-36 ml-auto">
            <div class="lg:w-2/3 text-center mx-auto">
              <h1 class=" font-bold text-5xl md:text-6xl xl:text-7xl bg-gradient-to-r from-orange-400 via-orange-500 to-orange-700 inline-block text-transparent bg-clip-text">
                Meme Generator{" "}
              </h1>
              <p class="mt-8 text-1xl text-gray-700">
                Feeling left out from your company's meme channel? Do you want
                to be the genz memer in yout company? then you are just a one
                click away from finding all the genz meme templates.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[920px] mx-auto max-w-full">
        <div className="text-center mt-28 mb-12">
          <h1 class="font-bold text-4xl text-orange-400">Meme Templates </h1>
        </div>
        <div class="grid grid-flow-row-dense grid-cols-4 gap-6">
          {data.map((item) => (
            <MemeCard data={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meme;
