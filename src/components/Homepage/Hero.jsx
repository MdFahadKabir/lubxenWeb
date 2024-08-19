"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaPlay, FaPlus } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import sliderData from "@/app/data/SliderData";
import serviceCard from "@/app/data/ServiceCard";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    //
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentSlide = sliderData[currentIndex];

  return (
    <>
      <div className="relative">
        <div
          className="
        relative min-h-screen select-none overflow-hidden text-white antialiased border border-black"
        >
          <AnimatePresence>
            <BackgroundImage key={currentIndex} currentSlide={currentSlide} />
            <div className="absolute z-20 h-full w-full   ">
              <div className="">
                <div className="absolute px-40 top-64 w-full">
                  <SlideInfo key={currentIndex} currentSlide={currentSlide} />
                </div>
                <div className="absolute top-80 w-full px-10">
                  <Controls
                    currentIndex={currentIndex}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                    sliderLength={sliderData.length}
                  />
                </div>
              </div>
            </div>
          </AnimatePresence>
        </div>
        <div className="absolute z-20 -bottom-40 flex justify-center items-center   w-full">
          <div>
            <div className="mx-40">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {serviceCard.map((service, index) => (
                  <div
                    key={service.id}
                    className={`group relative text-center text-white px-10 py-16 overflow-hidden transition-all duration-500 ease-in-out rounded-md ${
                      index === 1
                        ? "bg-blue-500 hover:bg-black"
                        : "bg-black hover:bg-blue-500"
                    }`}
                  >
                    {/* Gradient overlay effect */}
                    <div
                      className={`absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out ${
                        index === 1
                          ? "bg-gradient-to-b from-black to-transparent scale-y-0 origin-top group-hover:scale-y-100"
                          : "bg-gradient-to-t from-blue-500 to-transparent scale-y-0 origin-bottom group-hover:scale-y-100"
                      }`}
                    ></div>
                    <div
                      className={`absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out ${
                        index === 1
                          ? "bg-gradient-to-t from-blue-500 to-transparent scale-y-0 origin-bottom group-hover:scale-y-100"
                          : "bg-gradient-to-b from-black to-transparent scale-y-0 origin-top group-hover:scale-y-100"
                      }`}
                    ></div>

                    {/* Card content */}
                    <div className="relative z-10">
                      <Image
                        src={service.icon}
                        alt={service.name}
                        width={40}
                        height={40}
                        priority
                        className="w-16 h-16 mx-auto bg-white"
                      />
                      <p className="poppins-semibold text-2xl py-5">
                        {service.name}
                      </p>
                      <p className="mulish-regular">{service.content}</p>
                    </div>

                    {/* FaPlus icon with hover effect */}
                    <div className="absolute z-30 left-1/2 transform -translate-x-1/2 top-1/2 group-hover:translate-y-28 group-hover:scale-100 group-hover:opacity-100 transition-transform duration-500 ease-in-out opacity-0 scale-75">
                      <div className="border rounded-full p-3 border-[#BF1D2F] bg-[#BF1D2F]">
                        <FaPlus className="text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function BackgroundImage({ currentSlide }) {
  return (
    <motion.div
      key={currentSlide.img}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0 z-10 h-full w-full object-cover"
    >
      <Image
        src={currentSlide.img}
        alt={currentSlide.title}
        layout="fill"
        className="brightness-50"
        priority
      />
    </motion.div>
  );
}

function SlideInfo({ currentSlide }) {
  return (
    <div className="relative flex flex-col gap-2">
      <motion.h1
        key={currentSlide.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-3xl poppins-bold w-1/2"
      >
        {currentSlide.title}
      </motion.h1>
      <motion.span
        key={currentSlide.description}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        className="text-lg"
      >
        {currentSlide.description}
      </motion.span>
      <motion.span
        key={currentSlide.location}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
        className="text-lg"
      >
        <div className="flex flex-row">
          <div className="border-2 rounded-full p-5 border-[#BF1D2F]">
            <FaPlay />
          </div>
          <Link
            href="/service"
            className="my-auto ml-5 border border-[#BF1D2F] bg-[#BF1D2F] text-white rounded-full px-4 py-2 hover:bg-white hover:text-[#BF1D2F] duration-700 cursor-pointer"
          >
            Check our service
          </Link>
        </div>
      </motion.span>
    </div>
  );
}

function Controls({ handleNext, handlePrev }) {
  return (
    <div className="flex justify-between gap-4">
      <SliderButton handleClick={handlePrev}>
        <IoIosArrowBack className="text-3xl text-white/30  hover:text-[#BF1D2F] duration-700" />
      </SliderButton>
      <SliderButton handleClick={handleNext}>
        <IoIosArrowForward className="text-3xl text-white/30 hover:text-[#BF1D2F] duration-700" />
      </SliderButton>
    </div>
  );
}

function SliderButton({ children, handleClick }) {
  return (
    <button
      className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/30 transition duration-700 ease-in-out hover:border-[#BF1D2F] hover:text-[#BF1D2F]"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
