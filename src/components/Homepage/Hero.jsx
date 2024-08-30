"use client";
import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import heroImage from "../../../public/images/bgimg.png";
import gola1 from "../../../public/images/gola1.png";
import gola2 from "../../../public/images/gola2.png";
import gola3 from "../../../public/images/gola3.png";
import gola4 from "../../../public/images/gola4.png";
import Link from "next/link";

export default function Hero({
  data = [
    { count: 20, label: "Years on market" },
    { count: 30, label: "Big projects" },
    { count: 60, label: "Trusted partners" },
  ],
}) {
  // Floating animation variants
  const floatAnimation = {
    rest: { y: 0, transition: { type: "spring", stiffness: 50 } },
    hover: { y: -10, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <>
      <div className="relative bg-[#F5F7F9] md:-mt-40 -z-10">
        <div className="bg-transparent flex justify-between w-full">
          <div className="w-full md:w-2/5 lg:w-2/5 xl:w-2/5">
            <Image
              src={heroImage}
              alt="heroimg"
              className="w-auto h-auto overflow-hidden"
            />
          </div>
          <div className="w-2/5 hidden md:block lg:block xl:block relative overflow-hidden">
            <div className="absolute -top-20 -right-40 ">
              <Image
                src={heroImage}
                alt="heroimg"
                className="w-auto h-auto overflow-hidden"
              />
            </div>
          </div>
        </div>
        <motion.div
          className="flex flex-col md:flex-row md:justify-between w-full absolute inset-y-10 md:inset-y-56 px-4 sm:px-6 md:px-8 lg:px-20 xl:px-40"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="w-full my-auto">
            <motion.p
              className="text-[#BF1D2F] text-sm md:text-lg mulish-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              "Where Efficiency Fuels Your Performance
            </motion.p>
            <motion.p
              className="text-3xl md:text-5xl mulish-bold py-5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            >
              LUBXEN – Your Trusted{" "}
              <motion.span
                className="relative inline-block "
                initial={{ backgroundPosition: "100% 0%" }}
                whileHover={{
                  backgroundPosition: "0% 100%",
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                style={{
                  backgroundImage:
                    "linear-gradient(to top, #BF1D2F 50%, #ffffff 50%), linear-gradient(to right, #ff0000, #ff9900)", // Bottom half red, top half white
                  backgroundSize: "100% 200%, 100% 200%", // First gradient for background, second for text color
                  backgroundRepeat: "no-repeat",
                  padding: "0 0.25rem",
                  WebkitBackgroundClip: "text", // Ensures the gradient applies to the text
                  WebkitTextFillColor: "transparent", // Makes the text color transparent to show the gradient
                  backgroundClip: "text",
                  textDecoration: "underline", // Add underline to the text
                  textDecorationColor: "#BF1D2F", // Underline color matches the background color
                  textDecorationThickness: "2px", // Thickness of the underline
                  textUnderlineOffset: "0.25rem",
                }}
              >
                Energy
              </motion.span>{" "}
              Partner
            </motion.p>
            <motion.p
              className="text-sm md:text-lg mulish-regular text-gray-500 pb-5 text-justify"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              From premium lubricants to advanced solutions powering your
              industry, home, or business, we deliver excellence at every turn.
              When reliability is non-negotiable, LUBXEN is the name you can
              trust to keep your world moving."
            </motion.p>

            <motion.div
              className="flex flex-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.8 }}
            >
              <Link
                href="/become_a_distributor"
                className="bg-[#BF1D2F] text-sm md:text-lg px-5 py-2 rounded-full text-white border border-[#BF1D2F] mulish-semibold hover:text-[#BF1D2F] hover:bg-white hover:border-black duration-700"
              >
                Become a distributor
              </Link>
              <Link
                href="/product"
                className="bg-white text-sm md:text-lg px-5 py-2 rounded-full text-black border border-black mulish-semibold hover:text-white hover:bg-[#BF1D2F] hover:border-[#BF1D2F] duration-700 ml-5"
              >
                Discover More
              </Link>
            </motion.div>
            {/* <motion.div
              className="grid grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.6, delay: 1 }}
            >
              {data.map((item, index) => (
                <motion.div
                  key={index}
                  className="px-6 py-10 bg-transparent"
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  <div>
                    <div className="flex">
                      <CountUp
                        start={0}
                        end={item.count}
                        duration={2.5}
                        className="text-2xl sm:text-5xl md:text-4xl poppins-bold text-[#BF1D2F]"
                      />
                      <p className="text-base  md:text-xl poppins-bold mb-0 pb-0 pt-2 text-[#BF1D2F]">
                        +
                      </p>
                    </div>
                    <p className="mt-2 text-xs md:text-sm mulish-bold text-gray-500">
                      {item.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div> */}
          </div>
          <div className="mx-10 mb-10 "></div>
          {/* Floating images */}
          <div className="w-full my-auto">
            <div className="grid grid-cols-2 gap-6">
              {[gola1, gola2, gola3, gola4].map((image, index) => (
                <motion.div
                  key={index}
                  className={`me-auto ${
                    index === 1 ? "mt-10" : index === 2 ? "-mt-12" : "-mt-2"
                  }`}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={floatAnimation}
                >
                  <Image
                    src={image}
                    alt={`gola${index + 1}`}
                    className="w-auto h-auto rounded-2xl"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
