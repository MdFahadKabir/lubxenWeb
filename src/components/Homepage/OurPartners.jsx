"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logos from "@/app/data/Partner";

export default function OurPartners() {
  return (
    <div className="relative mx-40 overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-25%", "-50%", "-75%", "-100%", "0%"] }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          repeat: Infinity,
        }}
      >
        {logos.map((logo) => (
          <div key={logo.id} className="flex-shrink-0 mx-4">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={300}
              height={300}
              className="w-auto h-16 object-contain"
            />
          </div>
        ))}
        {logos.map((logo) => (
          <div key={`duplicate-${logo.id}`} className="flex-shrink-0 mx-4">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={300}
              height={300}
              className="w-auto h-16 object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
