"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";

export default function ContactInfo({
  data = [
    { type: "phone", value: "+971544997141", label: "Call Us Now:" },
    {
      type: "address",
      value:
        " Al Attar Grand Building, Plot Number -522-0, Bank Street Building - 142 Khalid Bin Al Waleed Rd - Al Mankhool Dubai, UAE",
      label: "Head Office Address",
    },
    { type: "mail", value: "contact@lubxen.com", label: "Mail Us Now" },
  ],
  textColor = "text-[#BF1D2F]",
  textColor2 = "text-black",
  borderColor = "border-gray-300",
  hoverBorderColor = "#FB4F00",
  bgColor = "bg-white",
}) {
  const renderIcon = (type) => {
    switch (type) {
      case "phone":
        return <IoMdCall className={`text-4xl sm:text-5xl ${textColor}`} />;
      case "mail":
        return (
          <MdOutlineSupportAgent
            className={`text-4xl sm:text-5xl ${textColor}`}
          />
        );
      case "address":
        return (
          <FaMapLocationDot className={`text-4xl sm:text-5xl ${textColor}`} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
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
              <div className="flex items-center justify-center mb-4">
                {renderIcon(item.type)}
              </div>
              <p
                className={`text-xl sm:text-xl md:text-xl poppins-bold ${textColor}`}
              >
                {item.value}
              </p>
              <p
                className={`mt-2 text-base sm:text-lg md:text-lg mulish-bold ${textColor2}`}
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
