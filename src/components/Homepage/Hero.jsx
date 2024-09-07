"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import heroImage from "../../../public/images/bgimg.png";
import lubxen_product from "../../../public/images/lubxen_web_banner.png";
import Link from "next/link";
import { FaFileDownload } from "react-icons/fa";
export default function Hero() {
  // Floating animation variants
  const floatAnimation = {
    rest: { y: 0, transition: { type: "spring", stiffness: 50 } },
    hover: { y: -10, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <>
      <div className="relative bg-[#F5F7F9] md:-mt-80 ">
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
          className="flex flex-col md:flex-row md:justify-between w-full absolute inset-y-10 md:inset-y-96 px-4 sm:px-6 md:px-8 lg:px-20 xl:px-40"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="w-full md:w-5/12 my-auto">
            <motion.p
              className="text-[#BF1D2F] text-sm md:text-lg mulish-bold "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              "Where Efficiency Fuels Your Performance
            </motion.p>

            <motion.p
              className="text-3xl md:text-5xl mulish-bold py-5 "
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            >
              LUBXEN – Your Trusted{" "}
              <motion.span className="relative inline-block text-[#BF1D2F]">
                Energy
              </motion.span>{" "}
              Partner
            </motion.p>
            <motion.p
              className="text-sm md:text-base mulish-regular  text-black pb-5 text-justify"
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
            {/* <div className="hidden md:block">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mx-auto md:mt-10 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.4, delay: 0.8 }}
              >
                <div>
                  <a
                    href="/product_catalog.pdf"
                    download="product_catalog.pdf"
                    className="bg-[#BF1D2F] text-sm md:text-lg px-5 py-2 rounded-full text-white border border-[#BF1D2F] mulish-semibold hover:text-[#BF1D2F] hover:bg-white hover:border-black duration-700 flex justify-between "
                  >
                    <p>Corporate Profile</p>{" "}
                    <FaFileDownload className="text-sm my-auto" />
                  </a>
                </div>
                <div>
                  <a
                    href="/product_catalog.pdf"
                    download="product_catalog.pdf"
                    className="bg-white text-sm md:text-lg px-5 py-2 rounded-full text-black border border-black mulish-semibold hover:text-white hover:bg-[#BF1D2F] hover:border-[#BF1D2F] duration-700 flex justify-between "
                  >
                    <p>Product Catalog</p>{" "}
                    <FaFileDownload className="text-sm my-auto" />
                  </a>
                </div>
                <div>
                  <a
                    href="/product_catalog.pdf"
                    download="product_catalog.pdf"
                    className="bg-white text-sm md:text-lg px-5 py-2 rounded-full text-black border border-black mulish-semibold hover:text-white hover:bg-[#BF1D2F] hover:border-[#BF1D2F] duration-700 flex justify-between "
                  >
                    <p>Base Oil Catalog</p>{" "}
                    <FaFileDownload className="text-sm my-auto" />
                  </a>
                </div>
              </motion.div>
            </div> */}
          </div>

          <div className="w-full md:w-7/12 my-auto">
            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={floatAnimation}
            >
              <Image
                src={lubxen_product}
                alt="Lubxez hero"
                className="w-full h-full rounded-2xl"
              />
            </motion.div>
          </div>
          <div className="block md:hidden">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-1 w-full mx-auto -mt-2 md:mt-10 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.8 }}
            >
              <div>
                <a
                  href="/product_catalog.pdf"
                  download="product_catalog.pdf"
                  className="bg-[#BF1D2F] text-sm md:text-lg px-5 py-2 rounded-full text-white border border-[#BF1D2F] mulish-semibold hover:text-[#BF1D2F] hover:bg-white hover:border-black duration-700 flex justify-between "
                >
                  <p>Corporate Profile</p>{" "}
                  <FaFileDownload className="text-xs my-auto" />
                </a>
              </div>
              <div>
                <a
                  href="/product_catalog.pdf"
                  download="product_catalog.pdf"
                  className="bg-white text-sm md:text-lg px-5 py-2 rounded-full text-black border border-black mulish-semibold hover:text-white hover:bg-[#BF1D2F] hover:border-[#BF1D2F] duration-700 flex justify-between "
                >
                  <p>Product Catalog</p>{" "}
                  <FaFileDownload className="text-xs my-auto" />
                </a>
              </div>
              <div className="col-span-2 px-20">
                <a
                  href="/product_catalog.pdf"
                  download="product_catalog.pdf"
                  className="bg-white text-sm md:text-lg px-5 py-2 rounded-full text-black border border-black mulish-semibold hover:text-white hover:bg-[#BF1D2F] hover:border-[#BF1D2F] duration-700 flex justify-between mx-auto"
                >
                  <p>Base Oil Catalog</p>{" "}
                  <FaFileDownload className="text-xs my-auto" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
