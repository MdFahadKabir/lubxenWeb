"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion
import img1 from "../../../public/images/about.jpg";
import signature from "../../../public/images/signature.png";
import { GoTrophy } from "react-icons/go";

export default function AboutUs() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16">
      <div className="flex flex-col lg:flex-row justify-between">
        <motion.div
          className="relative w-full lg:w-1/2 mb-10 lg:mb-0"
          initial={{ opacity: 0, x: -50 }} // Initial animation state
          animate={{ opacity: 1, x: 0 }} // Final animation state
          transition={{ duration: 1 }} // Animation duration
        >
          <Image
            src={img1}
            alt=""
            width={400}
            height={400}
            priority
            className="w-full h-auto"
          />
          <div className="absolute right-1/2 lg:-right-16 transform translate-x-1/2 lg:translate-x-0 -bottom-20   bg-white border border-white rounded-full shadow-md p-10 w-40 h-40 lg:w-40 lg:h-40 text-center">
            <GoTrophy className="mx-auto text-3xl lg:text-4xl text-[#BF1D2F]" />
            <p className="leading-tight mulish-semibold">Best Awarded</p>
          </div>
        </motion.div>
        <div className="lg:mx-10 mx-0 lg:pb-0 pb-20"></div>

        <motion.div
          className="w-full lg:w-1/2 my-auto"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="poppins-regular text-gray-500 text-sm sm:text-lg md:text-xl lg:text-xl pb-5">
            About us
          </p>
          <p className="poppins-bold text-lg sm:text-2xl md:text-2xl lg:text-2xl leading-normal">
            We are here to increase your knowledge with{" "}
            <span className="text-[#BF1D2F] playfair-display-sc-bold-italic">
              experience
            </span>
          </p>
          <div className="border-2 border-[#BF1D2F] w-16 sm:w-20 mt-2 mb-5"></div>
          <p className="mulish-semibold text-sm  leading-normal mx-auto text-gray-500">
            LUBXEN is an emerging lubricant manufacturing company, established
            to represent a group of experienced oil exporters in the UAE. We are
            at the forefront of the industry, supplying premium lubricants and
            greases to meet the evolving demands of our clients.
          </p>
          <p className="mulish-semibold text-sm  leading-normal mx-auto text-gray-500 pt-3">
            Our commitment to quality is unmatched
          </p>
          <div className="flex flex-col sm:flex-row pt-5 items-start">
            <Image
              src={signature}
              alt=""
              width={200}
              height={50}
              priority
              className="w-auto h-auto"
            />
            <div className="my-auto sm:ml-5 mt-3 sm:mt-0">
              <p className="poppins-bold text-lg sm:text-2xl md:text-2xl lg:text-2xl leading-normal">
                Natalia Duke
              </p>
              <p className="mulish-regular  text-sm  leading-normal mx-auto text-gray-500">
                (Chairman and founder)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
