"use client";
import React from "react";
import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

export default function BlogHero() {
  return (
    <motion.div
      className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16"
      initial="hidden"
      animate="visible"
      variants={heroVariants}
    >
      <div className="flex flex-col lg:flex-row justify-between w-full mb-10">
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <p className="poppins-regular text-black text-sm sm:text-lg md:text-xl lg:text-xl">
            Blogs
          </p>
          <motion.p
            className="poppins-bold text-lg sm:text-2xl md:text-2xl lg:text-2xl leading-normal w-3/5"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            We are here to serve you with our best{" "}
            <span className="text-[#BF1D2F] playfair-display-sc-bold-italic">
              blogs
            </span>
          </motion.p>
          <motion.div
            className="border-2 border-[#BF1D2F] w-20 mt-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </motion.div>
        <motion.div
          className="w-full my-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <p className="mulish-regular  text-sm  leading-normal mx-auto text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            possimus sint unde voluptatum? Harum ducimus sequi soluta deleniti
            culpa quod. Quasi, error ipsa? Illo placeat aliquam fugit facilis
            doloremque illum nostrum consequatur minima tenetur enim, labore
            ullam officia, animi eos, sint et similique !
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
