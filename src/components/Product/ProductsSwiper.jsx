"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import products from "@/app/data/Product";

const ProductsSwiper = () => {
  return (
    <>
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          centeredSlides={false}
          autoplay={{ delay: 3000 }}
        >
          {products.map((product) =>
            product.items.map((item, index) => (
              <SwiperSlide key={index}>
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
                      <div className="absolute w-full flex pt-3 px-5">
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
                              {item.viscosityGrade.substring(0, 100)}
                            </motion.p>
                          )}

                          {item.classification && (
                            <motion.p
                              className="mulish-regular text-sm text-white mt-2 px-3"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.9, ease: "easeInOut" }}
                            >
                              Classification:{" "}
                              {item.classification.substring(0, 100)}
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
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </>
  );
};

export default ProductsSwiper;
