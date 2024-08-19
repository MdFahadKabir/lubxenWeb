"use client";
import React from "react";

const Loader = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <iframe
        src="https://lottie.host/embed/4b1afd4a-6b15-4c0e-9293-99e5db442e71/85JhkWeNWY.json"
        className="w-1/2 h-1/2 border-none"
        title="Loader Animation"
      />
    </div>
  );
};

export default Loader;
