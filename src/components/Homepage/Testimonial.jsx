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
import ContactForm from "../Contact/ContactFrom";

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
      <div className="relative bg-[#101010]">
        <div className="">
          <Image src={glove} alt="glove" />
        </div>
        <div className="flex justify-between text-white absolute -top-20 w-full px-40 ">
          {/* Quote Form */}
          <div className="w-full">
            <ContactForm
              bgColor="#222222"
              bgColor2="#0C0C0C"
              borderColor="#BF1D2F"
              textColor="#FFFFFF"
              buttonBgColor="#BF1D2F"
            />
          </div>

          <div className="mx-10"></div>

          {/* Testimonial Slider */}
          <div className="w-1/2">
            <motion.div
              className="relative mt-10"
              key={currentIndex}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <FaQuoteLeft className="text-4xl text-[#0189FF] absolute -top-5 left-5" />
              <p className="p-10 bg-[#222222] overflow-hidden text-white text-sm rounded-lg">
                {testimonials[currentIndex].quote}
              </p>
              <AiFillCaretDown className="text-5xl text-[#222222] absolute -bottom-8 left-5" />
              <motion.div
                className="flex justify-between absolute -bottom-32 left-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Image
                  src={testimonials[currentIndex].image}
                  width={100}
                  height={100}
                  className="w-20 h-20 rounded-full"
                  alt={testimonials[currentIndex].name}
                />
                <div className="my-auto pl-5">
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
              <div className="flex absolute right-0 -bottom-16 my-auto space-x-4">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IoIosArrowDropleft
                    className="text-3xl cursor-pointer"
                    onClick={handlePrev}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IoIosArrowDropright
                    className="text-3xl cursor-pointer"
                    onClick={handleNext}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className=" absolute bottom-20 w-full">
          <AnimatedNumber
            textColor="text-sky-500"
            textColor2="text-white"
            borderColor="border-gray-100/30"
            hoverBorderColor="#FB4F00"
            bgColor=""
          />
        </div>
      </div>
    </>
  );
}
