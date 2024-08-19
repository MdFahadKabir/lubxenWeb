"use client";
import React from "react";

import { motion } from "framer-motion";

export default function ContactForm({
  bgColor = "#EEF1F5",
  bgColor2 = "#ffffff",
  borderColor = "#BF1D2F",
  textColor = "#222222",
  buttonBgColor = "#BF1D2F",
}) {
  return (
    <>
      <div>
        {/* Quote Form */}
        <motion.div
          className="w-full  p-8 rounded-md"
          style={{ backgroundColor: bgColor }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2
            className="text-3xl mb-2 poppins-bold"
            style={{ color: textColor }}
          >
            Get a quote{" "}
            <span className="poppins-bold-italic text-[#BF1D2F]">now</span>
          </h2>
          <p className="border-2 border-[#BF1D2F] inline-block px-10 mb-4"></p>
          <form className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <input
                id="name"
                type="text"
                className="w-full p-2  rounded-md  text-sm"
                style={{ backgroundColor: bgColor2, color: textColor }}
                placeholder="Your Name"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <input
                id="email"
                type="email"
                className="w-full p-2  rounded-md text-white text-sm"
                style={{ backgroundColor: bgColor2, color: textColor }}
                placeholder="Your Email"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <textarea
                id="message"
                className="w-full p-2  rounded-md  text-sm"
                style={{ backgroundColor: bgColor2, color: textColor }}
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              className="w-full p-2 bg-[#BF1D2F] rounded-md text-white "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </>
  );
}
