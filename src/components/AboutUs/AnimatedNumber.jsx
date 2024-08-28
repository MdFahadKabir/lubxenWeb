"use client";
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function AnimatedNumber({
  data = [
    { count: 100, label: "Total Distributor" },
    { count: 88, label: "Total Products" },
    { count: 12, label: "Happy Clients" },
    { count: 9, label: "Team Members" },
  ],
  textColor = "text-[#BF1D2F]",
  textColor2 = "text-black",
  borderColor = "border-gray-300",
  hoverBorderColor = "#FB4F00",
  bgColor = "bg-white",
}) {
  return (
    <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-40">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className={`relative border-2 border-dashed flex flex-col items-center justify-center px-6 py-10 ${bgColor} ${borderColor} rounded-lg`}
            whileHover={{
              scale: 1.05,
              borderColor: hoverBorderColor,
              boxShadow: `0px 0px 10px ${hoverBorderColor}`,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-lg"
              style={{ borderColor: hoverBorderColor }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>
            <div className="relative z-10 text-center">
              <div className="flex items-baseline justify-center">
                <CountUp
                  start={0}
                  end={item.count}
                  duration={2.5}
                  className={`text-xl  md:text-6xl poppins-bold ${textColor}`}
                />
                <p
                  className={`text-lg  md:text-4xl poppins-bold mb-0 pb-0 pt-2 ${textColor}`}
                >
                  +
                </p>
              </div>
              <p
                className={`mt-2 text-xs md:text-xl mulish-bold ${textColor2}`}
              >
                {item.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
