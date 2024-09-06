"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import products from "@/app/data/Product";

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

export default function ProductsList() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Function to get unique categories
  const getUniqueCategories = () => {
    const uniqueCategories = [];
    products.forEach((product) => {
      if (!uniqueCategories.includes(product.categorySlug)) {
        uniqueCategories.push(product.categorySlug);
      }
    });
    return uniqueCategories;
  };

  // Set the default category to the first one
  useEffect(() => {
    if (products.length > 0) {
      setSelectedCategory(products[0].categorySlug);
    }
  }, []);

  const uniqueCategories = getUniqueCategories();

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.categorySlug === selectedCategory)
    : products;
  return (
    <>
      <motion.div
        className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="overflow-x-auto md:overflow-hidden scrollbar-none ">
          <div className="flex flex-row md:grid md:grid-cols-4 md:gap-6 mb-10 min-w-max">
            {uniqueCategories.map((categorySlug) => (
              <button
                key={categorySlug}
                onClick={() => setSelectedCategory(categorySlug)}
                className={`${
                  selectedCategory === categorySlug
                    ? "bg-[#BF1D2F]"
                    : "bg-[#0A529B]"
                } rounded-full text-xs md:text-sm text-white px-5 py-3 mix-w-max mx-2`}
              >
                {
                  products.find(
                    (product) => product.categorySlug === categorySlug
                  ).productcategory
                }
              </button>
            ))}
          </div>
        </div>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {filteredProducts.map((product) =>
            product.items.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <Link href={`/product/${product.categorySlug}/${item.slug}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group w-full h-60 overflow-hidden bg-black m-auto cursor-pointer"
                  >
                    <Image
                      width={400}
                      height={400}
                      className="object-cover w-full h-full transform duration-700"
                      src={item.image}
                      alt={item.name}
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
                      <div className="absolute w-full flex  pt-3 px-5">
                        <div className="flex flex-col">
                          <motion.p
                            className="capitalize poppins-bold text-lg sm:text-xl md:text-xl lg:text-xl leading-normal shadow-2xl text-white px-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, ease: "easeInOut" }}
                          >
                            {item.name.substring(0, 30)}...
                          </motion.p>
                          <motion.p
                            className="mulish-regular text-sm text-white mt-2 px-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.9, ease: "easeInOut" }}
                          >
                            Product Type : {item.producttype.substring(0, 100)}
                          </motion.p>
                          {/* <motion.p
                            className="mulish-regular text-sm text-white mt-2 px-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.9, ease: "easeInOut" }}
                          >
                            {item.synthetic.substring(0, 100)}
                          </motion.p> */}
                          {/* <motion.p
                            className="mulish-regular text-sm text-white mt-2 px-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.9, ease: "easeInOut" }}
                          >
                            {item.viscosityGrade.substring(0, 100)}
                          </motion.p>
                          <motion.p
                            className="mulish-regular text-sm text-white mt-2 px-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.9, ease: "easeInOut" }}
                          >
                            Classification :{" "}
                            {item.classification.substring(0, 100)}
                          </motion.p> */}
                          {item.viscosityGrade && (
                            <motion.p
                              className="mulish-regular text-sm text-white mt-2 px-3"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.9, ease: "easeInOut" }}
                            >
                              {item.viscosityGrade}
                            </motion.p>
                          )}

                          {item.classification && (
                            <motion.p
                              className="mulish-regular text-sm text-white mt-2 px-3"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.9, ease: "easeInOut" }}
                            >
                              Classification: {item.classification}
                            </motion.p>
                          )}

                          <motion.p
                            className="text-[#BF1D2F] px-3 pt-2 mulish-semibold"
                            whileHover={{ scale: 1.1 }}
                          >
                            See More
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            ))
          )}
        </motion.div>

        <div className="flex justify-center mt-10">
          <a
            href="/product_catalog.pdf" // PDF path in the public folder
            download="product_catalog.pdf" // Optional: specify a custom download name
            className="bg-[#BF1D2F] text-white py-2 px-4 rounded-full hover:bg-[#0A529B] transition-colors duration-700"
          >
            Download our full Product Catalog
          </a>
        </div>
      </motion.div>
    </>
  );
}
