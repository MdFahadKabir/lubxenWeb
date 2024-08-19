"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import services from "@/app/data/Service";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export default function ServicesList() {
  return (
    <motion.div
      className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {services.map((service) => (
          <motion.div key={service.id} variants={itemVariants}>
            <Link href={`/service/${service.slug}`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group w-full h-60 overflow-hidden bg-black m-auto cursor-pointer"
              >
                <Image
                  width={400}
                  height={400}
                  className="object-cover w-full h-full transform duration-700"
                  src={service.image}
                  alt={service.name}
                />
                <motion.div
                  className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute bg-gradient-to-t from-black/80 to-black/80 w-full h-full transform duration-500 inset-y-2/3 group-hover:-inset-y-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="absolute w-full flex place-content-center pt-3 px-5">
                    <div className="flex flex-col">
                      <motion.p
                        className="capitalize poppins-bold text-lg sm:text-xl md:text-xl lg:text-xl leading-normal shadow-2xl text-white px-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                      >
                        {service.name.substring(0, 30)}...
                      </motion.p>
                      <motion.p
                        className="mulish-regular text-sm text-white mt-2 px-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.9, ease: "easeInOut" }}
                      >
                        {service.content.substring(0, 100)}...
                      </motion.p>
                      <motion.p
                        className="text-[#BF1D2F] px-3 pt-2 mulish-semibold"
                        whileHover={{ scale: 1.1 }}
                      >
                        Let’s start
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
