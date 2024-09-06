"use client"; // Mark the component as a client component
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link for navigation
import Image from "next/image";
import products from "@/app/data/Product"; // Adjust path as necessary
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// Container animation (category grid container)
const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      staggerChildren: 0.3, // Delay between the appearance of child elements
    },
  },
};

// Individual item animation (category cards)
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

// Image hover effect
const imageHover = {
  scale: 1.1,
  transition: { duration: 0.5, ease: "easeInOut" },
};

// "See More" hover effect
const buttonHover = {
  scale: 1.05,
  backgroundColor: "#0A529B", // Change background color on hover
  transition: { duration: 0.3 },
};

export default function ProductCategory() {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {products.map((category) => {
        const firstProduct = category.items[0]; // Get the first product in the category
        const productLink = `/product/${category.categorySlug}/${firstProduct.slug}`; // Generate the link

        return (
          <motion.div
            key={category.categorySlug}
            className="relative group overflow-hidden bg-[#F5F7F9] p-4 rounded-lg shadow-md"
            variants={itemVariants} // Animation for each category card
            whileHover={{ scale: 1.02 }} // Scale slightly on hover for the entire card
          >
            {/* Image */}
            <motion.div
              className="w-full h-48 relative mb-4"
              whileHover={imageHover} // Animate image hover
            >
              <Image
                src={category.catImage}
                alt={category.productcategory}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </motion.div>

            {/* Category Name and Description */}
            <motion.div
              className="text-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.h3
                className="poppins-bold text-lg sm:text-xl md:text-xl lg:text-xl leading-normal shadow-2xl mb-2"
                whileHover={{ color: "#BF1D2F" }} // Change color on hover
                transition={{ duration: 0.3 }}
              >
                {category.productcategory}
              </motion.h3>
              <motion.p className="mb-4 mulish-regular text-sm">
                {category.catContent}
              </motion.p>
            </motion.div>

            {/* "See More" Button */}
            <Link href={productLink} legacyBehavior>
              <motion.a
                className="bg-[#BF1D2F] text-white px-4 py-2 rounded-full text-sm inline-block "
                whileHover={buttonHover} // Button hover animation
              >
                <p className="flex flex-row ">
                  See More
                  <MdKeyboardDoubleArrowRight className="my-auto ml-5 text-xl" />
                </p>
              </motion.a>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
