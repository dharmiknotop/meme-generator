import React from "react";

const SideBar = () => {
  return (
    <div>
      <span
        class="absolute text-white text-4xl top-5 left-4 cursor-pointer"
        onclick="openSidebar()"
      >
        <i class="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
      </span>
      <div class="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
        <div class="text-gray-100 text-xl">
          <div class="p-2.5 mt-1 flex items-center">
            <h1 class="font-bold text-gray-200 text-[15px]">Meme Generator</h1>
            <i
              class="bi bi-x cursor-pointer ml-28 lg:hidden"
              onclick="openSidebar()"
            ></i>
          </div>
          <div class="my-2 bg-gray-600 h-[1px]"></div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
