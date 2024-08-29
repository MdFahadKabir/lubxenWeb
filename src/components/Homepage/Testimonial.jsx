"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import glove from "../../../public/images/glove.png";
import { FaQuoteLeft } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import AnimatedNumber from "../AboutUs/AnimatedNumber";
import testimonials from "@/app/data/Testimonials";
import DistributorFrom from "../Distributor/DistributorFrom";

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="relative bg-cover bg-no-repeat px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 text-center bg-testimonial_image bg-[#101010] h-screen  md:rounded-tr-[200px] ">
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

        {/* Content */}
        <div className="relative flex h-full items-center justify-center  w-full">
          <div className="flex flex-col w-full">
            <div className="flex flex-col md:flex-row md:justify-between w-full">
              <div className="w-full md:w-2/6 -mt-12 md:mt-0">
                <DistributorFrom
                  bgColor="#222222"
                  bgColor2="#0C0C0C"
                  borderColor="#BF1D2F"
                  textColor="#FFFFFF"
                  buttonBgColor="#BF1D2F"
                />
              </div>
              {/* Testimonial Slider */}
              <div className="w-full md:w-3/6  text-white">
                <motion.div
                  className="relative mt-20 md:mt-20"
                  key={currentIndex}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -100 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                  <FaQuoteLeft className="text-2xl sm:text-3xl md:text-4xl text-[#0189FF] absolute -top-10 md:-top-5 left-5" />
                  <p className="p-6 sm:p-8 md:p-10 bg-[#222222] overflow-hidden text-white text-xs sm:text-sm md:text-base rounded-3xl  text-justify">
                    {testimonials[currentIndex].quote}
                  </p>
                  <AiFillCaretDown className="text-3xl sm:text-4xl md:text-5xl text-[#222222] absolute -bottom-8 left-5" />
                  <motion.div
                    className="flex justify-between absolute -bottom-24 left-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Image
                      src={testimonials[currentIndex].image}
                      width={80}
                      height={80}
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 rounded-full"
                      alt={testimonials[currentIndex].name}
                    />
                    <div className="my-auto pl-5 text-xs sm:text-sm md:text-base text-start">
                      <p>{testimonials[currentIndex].name}</p>
                      <p>{testimonials[currentIndex].designation}</p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Navigation Buttons */}
                <motion.div
                  className="relative w-full pt-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="flex absolute right-0 -bottom-12 md:-bottom-16 my-auto space-x-2 sm:space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IoIosArrowDropleft
                        className="text-2xl sm:text-3xl cursor-pointer"
                        onClick={handlePrev}
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IoIosArrowDropright
                        className="text-2xl sm:text-3xl cursor-pointer"
                        onClick={handleNext}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="hidden md:block w-full mt-10">
              <AnimatedNumber
                textColor="text-sky-500"
                textColor2="text-white"
                borderColor="border-gray-100/30"
                hoverBorderColor="#FB4F00"
                bgColor=""
              />
            </div>
          </div>{" "}
        </div>
      </div>
      <div className="md:hidden block  mt-12">
        <AnimatedNumber />{" "}
      </div>
    </>
  );
}
