import React from "react";
import Link from "next/link";

const MemeCard = (item) => {
  let { name, url } = item.data;

  return (
    <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <img
        class="w-full h-32 rounded-t-xl object-contain"
        src={url}
        alt="Image Description"
      />
      <div class="p-4 md:p-5">
        <h3 class="text-lg font-bold text-gray-800 dark:text-white">{name}</h3>

        <Link
          class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          href={`/edit/meme?url=${url}`}
        >
          Go somewhere
        </Link>
      </div>
    </div>
  );
};

export default MemeCard;
