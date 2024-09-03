"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faq from "../../../public/images/faq-bg.png";
import { IoIosArrowDropdown } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import items from "@/app/data/Faq";
import Link from "next/link";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div>
        {/*  */}
        <div className="relative bg-cover bg-no-repeat px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 text-center bg-faq_image bg-[#101010] h-screen  ">
          {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

          <div className="relative flex h-full items-center justify-center ">
            <div className="">
              <div className="w-full">
                <motion.div
                  className="text-center text-white"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <p className="poppins-regular">FAQ</p>
                  <p className="poppins-bold text-lg sm:text-2xl md:text-2xl lg:text-2xl leading-normal">
                    Easy to work with us. Learn more from our {""}
                    <motion.span
                      className="text-[#BF1D2F] playfair-display-sc-bold-italic"
                      whileHover={{ scale: 1.1, color: "#FF5733" }}
                    >
                      details
                    </motion.span>
                  </p>
                  <motion.div
                    className="border-2 border-[#BF1D2F] w-full md:w-20 mt-2 mb-5 mx-auto"
                    initial={{ width: 0 }}
                    animate={{ width: "80px" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  ></motion.div>
                </motion.div>
                <div className="flex flex-col md:flex-row md:justify-between mt-3 md:mt-16 w-full">
                  <motion.div
                    className="w-full  text-white text-start my-auto"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <p className="poppins-bold text-base md:text-xl pb-4">
                      We are working with our experience
                    </p>

                    <div className="w-full md:w-4/5 mt-5">
                      <div className="flex justify-between pb-2">
                        <motion.div
                          className="w-10"
                          whileHover={{ scale: 1.2, rotate: 90 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                          <MdKeyboardDoubleArrowRight className="text-2xl" />
                        </motion.div>
                        <p className="w-full text-xs md:text-base">
                          Experience is the knowledge or mastery of an event.
                        </p>
                      </div>
                      <div className="flex justify-between pb-2">
                        <motion.div
                          className="w-10"
                          whileHover={{ scale: 1.2, rotate: 90 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                          <MdKeyboardDoubleArrowRight className="text-2xl" />
                        </motion.div>
                        <p className="w-full text-xs md:text-base">
                          Open the following link into the website you'll use
                          this resource on.{" "}
                          <span>
                            <Link
                              href="/lubxen_company_profile.pdf"
                              className="w-full text-xs md:text-lg text-[#BF1D2D] font-bold  transition-transform sc hover:scale-110 duration-700"
                            >
                              If you want to know more..
                            </Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="w-full overflow-y-auto scrollbar-none h-72 md:h-auto"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    {items.map((item, index) => (
                      <div key={index} className="mb-4">
                        <motion.div
                          className="flex justify-between items-center bg-[#222222] text-white p-2 md:p-4 rounded-lg cursor-pointer"
                          onClick={() => toggleAccordion(index)}
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <p className="poppins-semibold text-sm md:text-base ">
                            {item.header}
                          </p>
                          <motion.div
                            animate={{
                              rotate: activeIndex === index ? 180 : 0,
                            }}
                            transition={{ duration: 0.4 }}
                          >
                            <IoIosArrowDropdown className="text-xl md:text-2xl" />
                          </motion.div>
                        </motion.div>
                        <AnimatePresence initial={false}>
                          {activeIndex === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{
                                height: { duration: 0.6, ease: "easeInOut" },
                                opacity: { duration: 0.4, ease: "easeInOut" },
                              }}
                              className="overflow-hidden mulish-regular w-full text-xs md:text-sm bg-white mulish text-black p-2 md:p-4 rounded-lg mt-2 text-justify"
                            >
                              {item.content}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
