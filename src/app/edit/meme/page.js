"use client";
import React, { createRef, useState } from "react";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const EditMemes = dynamic(() => import("../../../components/EditMeme"), {
  ssr: false,
});

const EditMeme = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      {" "}
      <EditMemes />
    </Suspense>
  );
};

export default EditMeme;
