"use client";
import React, { useState } from "react";

const AnnouncementBanner = () => {
  const [open, setOpen] = useState(true);

  function handleClose() {
    if (open) {
      setOpen(false);
    }
  }

  return (
    <div className={open ? "flex items-center content-center" : "hidden"}>
      <a href="/gallery" className="w-full h-16 bg-gradient-to-r from-sky-200 via-sky-500 to-sky-200 flex items-center justify-center">
        <h1 className="text-white text-2xl font-bold max-w-[80%] sm:text-base">
          View the updated portfolio gallery!
        </h1>
      </a>
      <button
          onClick={handleClose}
          className="text-blue absolute right-5 text-sky-600 text-2xl items-center content-center sm:text-base"
        >
          ❌
        </button>
    </div>
  );
};

export default AnnouncementBanner;
