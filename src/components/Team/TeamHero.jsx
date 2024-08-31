"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TeamHero() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-8">
      <motion.div
        className="text-center text-black"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="poppins-regular text-black text-sm sm:text-lg md:text-xl lg:text-xl">
          Team
        </p>
        <p className="poppins-bold text-lg sm:text-2xl md:text-2xl lg:text-2xl leading-normal mx-auto w-full md:w-4/5 lg:w-2/5">
          We will serve you with the best of our capacity by expert{" "}
          <motion.span
            className="text-[#BF1D2F] playfair-display-sc-bold-italic"
            whileHover={{ scale: 1.1, color: "#FF5733" }}
          >
            team
          </motion.span>
        </p>
        <motion.div
          className="border-2 border-[#BF1D2F] w-20 mt-2 mb-5 mx-auto"
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        ></motion.div>
        <p className="mulish-regular  text-sm  leading-normal text-center mx-auto text-black w-full md:w-3/4 lg:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna.
        </p>
      </motion.div>
    </div>
  );
}
