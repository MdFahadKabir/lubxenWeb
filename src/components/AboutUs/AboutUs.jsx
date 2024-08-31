"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion
import img1 from "../../../public/images/car3.jpg";
import vision_icon from "../../../public/images/vision_icon.png";
import mission_icon from "../../../public/images/mission_icon.png";

export default function AboutUs() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16">
      <div className="flex flex-col lg:flex-row justify-between">
        <motion.div
          className="relative w-full md:w-5/12 mb-10 md:mb-0"
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
            className="w-full h-auto rounded-xl"
          />
        </motion.div>
        <div className="md:mx-10 mx-0 "></div>

        <motion.div
          className="w-full md:w-7/12 my-auto"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="poppins-regular text-black text-sm sm:text-lg md:text-xl lg:text-xl pb-5">
            About us
          </p>
          <p className="poppins-bold text-lg sm:text-2xl md:text-2xl lg:text-2xl leading-normal">
            Empowering Your Performance with World-Class Lubricant{" "}
            <span className="text-[#BF1D2F] playfair-display-sc-bold-italic">
              Solutions
            </span>
          </p>
          <div className="border-2 border-[#BF1D2F] w-16 sm:w-20 mt-2 mb-5"></div>
          <p className="mulish-regular  text-sm  leading-normal mx-auto text-black text-justify">
            LUBXEN manufactures its products in the UAE and serves a global
            market. As a rising leader in the United Arab Emirates, we deliver
            premium lubricant solutions tailored to meet the diverse needs of
            various industries. Whether you're running heavy machinery,
            competing in motorsports, or managing a fleet of commercial
            vehicles, our extensive range of oils and greases is engineered to
            enhance performance, extend equipment life, and ensure operational
            efficiency.
          </p>
          <p className="mulish-regular  text-sm  leading-normal mx-auto text-black pt-3 text-justify">
            At LUBXEN, we aim to be your go-to partner for superior lubricant
            solutions tailored to your specific needs. From heavy machinery and
            rally driving to daily commuting and sectors like automotive,
            marine, energy, or industrial, our comprehensive product lineup is
            designed to optimize your equipment’s performance and longevity. We
            pride ourselves on delivering world-class service and
            state-of-the-art products, which allow us to remain competitive and
            expand our global footprint. Our customer-centric approach enables
            us to meet the unique demands of both small to medium enterprises
            and large corporations, treating each customer as a valued partner,
            regardless of their size.
          </p>
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between mt-10">
        <motion.div
          className="w-full  my-auto"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-between">
            <Image
              src={mission_icon}
              alt="mission_icon"
              width={100}
              height={100}
              className="w-auto h-10"
            />
            <div className="mx-2"></div>
            <p className="poppins-bold text-lg sm:text-2xl md:text-2xl lg:text-2xl leading-normal my-auto w-full">
              Our {}
              <span className="text-[#BF1D2F] playfair-display-sc-bold-italic">
                Mission
              </span>
            </p>
          </div>

          <div className="border-2 border-[#BF1D2F] w-20  mt-2 mb-5"></div>
          <p className="mulish-regular  text-sm  leading-normal mx-auto text-black text-justify">
            Our mission at LUBXEN is to empower our customers by providing
            premium-quality products at competitive prices, meeting market
            demands, and exceeding expectations. We are committed to aligning
            our operations with the highest international standards, ensuring
            our products deliver consistent performance and reliability.
          </p>
        </motion.div>
        <div className="md:mx-10 mx-0 md:pb-0 pb-5"></div>
        <motion.div
          className="w-full  my-auto"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-between">
            <Image
              src={vision_icon}
              alt="vision_icon"
              width={100}
              height={100}
              className="w-auto h-10"
            />
            <div className="mx-2"></div>
            <p className="poppins-bold text-lg sm:text-2xl md:text-2xl lg:text-2xl leading-normal my-auto w-full">
              Our {}
              <span className="text-[#BF1D2F] playfair-display-sc-bold-italic">
                Vision
              </span>
            </p>
          </div>

          <div className="border-2 border-[#BF1D2F] w-20  mt-2 mb-5"></div>
          <p className="mulish-regular  text-sm  leading-normal mx-auto text-black text-justify">
            Our vision is to become a global leader in the lubricant
            manufacturing industry and a trusted, lifelong partner for our
            customers. We are dedicated to offering top-quality products and
            services while upholding the highest standards of Health, Safety,
            Security, and Environmental (HSSE) practices in the oil industry.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
