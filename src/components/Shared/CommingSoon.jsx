"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
export default function CommingSoon() {
  // useEffect(() => {
  //   // Set the date we're counting down to (adjust the date and time)
  //   const countDownDate = new Date("Sep 30, 2024 00:00:00").getTime();

  //   // Update the countdown every 1 second
  //   const intervalId = setInterval(() => {
  //     // Get the current date and time
  //     const now = new Date().getTime();

  //     // Calculate the time remaining
  //     const distance = countDownDate - now;

  //     // Calculate days, hours, minutes, and seconds
  //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor(
  //       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     );
  //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //     // Display the countdown in the HTML
  //     document.getElementById("days").innerHTML = days + " D";
  //     document.getElementById("hours").innerHTML = hours + " H";
  //     document.getElementById("minutes").innerHTML = minutes + " M";
  //     document.getElementById("seconds").innerHTML = seconds + " S";

  //     // If the countdown is over, display a message
  //     if (distance < 0) {
  //       clearInterval(intervalId);
  //       document.getElementById("countdown").innerHTML = "EXPIRED";
  //     }
  //   }, 1000);

  //   // Cleanup interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, []);
  return (
    <>
      <div className="">
        <div className=" w-full flex items-center justify-center ">
          <div className="flex flex-col">
            <motion.div
              className=" w-full h-auto flex flex-col justify-center items-center "
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-mono bg-gradient-to-r from-[#BF1D2F] via-[#0A529B] to-[#BF1D2F] inline-block text-transparent bg-clip-text"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Coming
              </motion.h1>
            </motion.div>
            <motion.div
              className="  w-full h-auto flex flex-col items-center justify-center "
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center font-mono font-extrabold bg-gradient-to-r from-[#BF1D2F] via-[#0A529B] to-[#BF1D2F] inline-block text-transparent bg-clip-text"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Soon
              </motion.h1>
              {/* <motion.div
                id="countdown"
                className="flex flex-wrap items-center justify-center text-black  text-lg sm:text-xl md:text-2xl font-extrabold mt-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <span id="days" className="px-2"></span>
                <span id="hours" className="px-2"></span>
                <span id="minutes" className="px-2"></span>
                <span id="seconds" className="px-2"></span>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
