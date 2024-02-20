"use client";
import React, { useState } from "react";

const AIBanner = () => {
  const [open, setOpen] = useState(true);

  function handleClose() {
    if (open) {
      setOpen(false);
    }
  }

  return (
    <div className={open ? "flex items-center content-center" : "hidden"}>
      <a href="/services/ai-service" className="w-full h-16 bg-gradient-to-r from-sky-200 via-sky-500 to-sky-200 flex items-center justify-center">
        <h1 className="text-white text-2xl font-bold">
          Introducing AI Integration Solutions!
        </h1>
      </a>
      <button
          onClick={handleClose}
          className="absolute right-5 text-sky-600 text-4xl items-center content-center"
        >
          🗙
        </button>
    </div>
  );
};

export default AIBanner;
