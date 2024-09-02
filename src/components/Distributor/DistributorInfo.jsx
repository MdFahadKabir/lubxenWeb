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
      <div className=" shadow-inner p-5 rounded-xl shadow-[#BF1D2F] h-80 overflow-y-auto scrollbar-none">
        <div className="   justify-center flex items-center">
          {/* <CommingSoon /> */}
          <MasonryGallery />
        </div>
      </div>
    </div>
  );
}
