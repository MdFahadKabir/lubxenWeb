"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";
import CommingSoon from "../Shared/CommingSoon";
import MasonryGallery from "../Shared/MasonryGallery";

export default function DistributorInfo({
  data = [
    {
      id: 0,
      name: "xyz",
      address: "adjoha",
      mobileNumber: ["018723642", "2840924"],
      distributorEmail: "dhjqg@gmail.com",
    },
    {
      id: 0,
      name: "xyz",
      address: "adjoha",
      mobileNumber: ["018723642", "2840924"],
      distributorEmail: "dhjqg@gmail.com",
    },
    {
      id: 0,
      name: "xyz",
      address: "adjoha",
      mobileNumber: ["018723642", "2840924"],
      distributorEmail: "dhjqg@gmail.com",
    },
    {
      id: 0,
      name: "xyz",
      address: "adjoha",
      mobileNumber: ["018723642", "2840924"],
      distributorEmail: "dhjqg@gmail.com",
    },
    {
      id: 0,
      name: "xyz",
      address: "adjoha",
      mobileNumber: ["018723642", "2840924"],
      distributorEmail: "dhjqg@gmail.com",
    },
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
        return <IoMdCall className={`text-xl  ${textColor}`} />;
      case "mail":
        return <MdOutlineSupportAgent className={`text-xl  ${textColor}`} />;
      case "address":
        return <FaMapLocationDot className={`text-xl  ${textColor}`} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full my-auto">
      <div className=" shadow-inner p-5 rounded-xl shadow-[#BF1D2F]">
        {/* <div>
          <motion.p
            className="poppins-bold text-lg sm:text-2xl md:text-2xl lg:text-2xl leading-normal w-full md:w-3/5"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            List{" "}
            <span className="text-[#BF1D2F] playfair-display-sc-bold-italic">
              distributors
            </span>
          </motion.p>
          <motion.div
            className="border-2 border-[#BF1D2F] w-20 mb-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6  h-80  overflow-y-auto scrollbar-none">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className={`relative border-2 border-dashed flex flex-col  p-3 ${bgColor} ${borderColor} rounded-lg`}
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
                <p
                  className={`poppins-bold text-lg sm:text-2xl md:text-2xl lg:text-2xl leading-normal poppins-bold ${textColor} mb-4`}
                >
                  {item.name}
                </p>

                <div className="flex   mb-2">
                  {renderIcon("address")}
                  <p
                    className={`ml-2 mulish-regular text-sm  leading-normal ${textColor2}`}
                  >
                    {item.address}
                  </p>
                </div>

                <div className="flex flex-col  mb-2">
                  {item.mobileNumber.map((number, idx) => (
                    <div key={idx} className="flex  mb-1">
                      {renderIcon("phone")}
                      <p
                        className={`ml-2 mulish-regular text-sm  leading-normal ${textColor2}`}
                      >
                        {number}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex ">
                  {renderIcon("mail")}
                  <p
                    className={`ml-2 mulish-regular text-sm  leading-normal ${textColor2}`}
                  >
                    {item.distributorEmail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div> */}
        <div className="h-80  overflow-y-auto scrollbar-none justify-center flex items-center">
          {/* <CommingSoon /> */}
          <MasonryGallery />
          {/* <motion.div
            className="border-2 border-[#BF1D2F] w-20 mb-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          /> */}
        </div>
      </div>
    </div>
  );
}
