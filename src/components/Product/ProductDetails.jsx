"use client";
import React from "react";

import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BsCircleHalf } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductDetails({
  product,
  categoryProducts,
  categorySlug,
}) {
  if (!product || !categoryProducts) {
    return <p>Product details not available</p>;
  }
  console.log(categorySlug);
  return (
    <div className="flex flex-col lg:flex-row justify-between  px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16">
      {/* Sidebar with product list */}
      <div className="w-full md:w-1/5 mb-8 lg:mb-0 ">
        <div className="overflow-x-auto md:overflow-y-auto md:h-80 overflow-hidden  scrollbar-none   mb-5">
          <motion.ul
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-row md:flex-col w-full"
          >
            {/* List of products */}

            {categoryProducts.map((item, index) => (
              <Link key={index} href={`/product/${categorySlug}/${item.slug}`}>
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  className={`border shadow-md  p-4 mb-2 mx-2 min-w-max transform duration-700 poppins-bold text-xs md:text-sm rounded-r-full leading-normal ${
                    product.slug === item.slug
                      ? "bg-[#BF1D2F] text-white text-lg"
                      : "hover:bg-[#BF1D2F] hover:text-white text-lg"
                  }`}
                >
                  {item.name}
                </motion.li>
              </Link>
            ))}
          </motion.ul>
        </div>
        {/* Contact information */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="poppins-bold text-lg sm:text-2xl md:text-2xl lg:text-2xl leading-normal pb-3">
              Contact
            </p>
            <div>
              <div className="flex flex-row pb-3">
                <FaMapLocationDot className="text-2xl text-[#BF1D2F] w-10" />
                <p className="mulish-regular  text-sm leading-normal text-black pl-5 w-full text-justify">
                  {product.contact.location}
                </p>
              </div>
              <div className="flex flex-row pb-3">
                <IoMdCall className="text-2xl text-[#BF1D2F] w-10" />
                <div>
                  {product.contact.contactNumber.map((contact, index) => (
                    <p
                      key={index}
                      className="mulish-regular  text-sm leading-normal text-black pl-5 w-full"
                    >
                      {contact.number} {/* Access the 'number' property */}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex flex-row pb-3">
                <MdOutlineSupportAgent className="text-2xl text-[#BF1D2F] w-10" />
                <p className="mulish-regular  text-sm leading-normal text-black pl-5 w-full">
                  {product.contact.email}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="lg:mx-10"></div>

      {/* Main content area for product details */}
      <div className="w-full md:w-4/5">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="w-full my-auto">
            {" "}
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="poppins-bold text-lg sm:text-2xl md:text-2xl lg:text-2xl leading-normal mb-2"
            >
              {product.name}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="poppins-regular text-xs sm:text-sm md:text-sm lg:text-sm leading-normal mb-2 uppercase"
            >
              Product Type : {product.producttype}
            </motion.p>
            {/* <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="poppins-regular text-xs sm:text-sm md:text-sm lg:text-sm leading-normal mb-2 uppercase"
            >
              {product.viscosityGrade}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="poppins-regular text-xs sm:text-sm md:text-sm lg:text-sm leading-normal mb-2 uppercase"
            >
              Classification : {product.classification}
            </motion.p> */}
            {product.viscosityGrade && (
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="poppins-regular text-xs sm:text-sm md:text-sm lg:text-sm leading-normal mb-2 uppercase"
              >
                {product.viscosityGrade}
              </motion.p>
            )}
            {product.classification && (
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="poppins-regular text-xs sm:text-sm md:text-sm lg:text-sm leading-normal mb-2 uppercase"
              >
                Classification: {product.classification}
              </motion.p>
            )}
          </div>
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                width={400}
                height={400}
                src={product.image.src}
                alt={product.name}
                className="mb-4 w-auto h-auto md:h-60 rounded-lg"
              />
            </motion.div>
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mulish-regular  text-sm leading-normal text-black mb-3 text-justify"
        >
          {product.productDescription}
        </motion.p>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col md:flex-row md:justify-between">
            {/* Render Performance Levels if available */}

            {product.performanceLevels &&
              product.performanceLevels.length > 0 && (
                <div className="w-full">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-5"
                  >
                    <motion.p
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="poppins-bold text-xs sm:text-sm md:text-sm lg:text-sm leading-normal mb-2 uppercase"
                    >
                      Performance Levels (Meets & Exceeds):
                    </motion.p>
                    {product.performanceLevels.map((item, index) => (
                      <div key={index} className="flex flex-row">
                        <BsCircleHalf className="text-xs text-[#BF1D2F] mt-1" />
                        <p className="mulish-regular text-sm leading-normal text-black pl-2 text-justify">
                          {item.content}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                </div>
              )}
            {/* Render OEM Approvals if available */}
            {product.oemApprovals && product.oemApprovals.length > 0 && (
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-5"
                >
                  <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="poppins-bold text-xs sm:text-sm md:text-sm lg:text-sm leading-normal mb-2 uppercase"
                  >
                    OEM Approvals:
                  </motion.p>
                  {product.oemApprovals.map((item, index) => (
                    <div key={index} className="flex flex-row">
                      <BsCircleHalf className="text-xs text-[#BF1D2F] mt-1" />
                      <p className="mulish-regular text-sm leading-normal text-black pl-2 text-justify">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>
            )}
            {/* Render NLGI Grades if available */}
            {product.nlgiGrades && product.nlgiGrades.length > 0 && (
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-5"
                >
                  <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="poppins-bold text-xs sm:text-sm md:text-sm lg:text-sm leading-normal mb-2 uppercase"
                  >
                    NLGI Grades:
                  </motion.p>
                  {product.nlgiGrades.map((item, index) => (
                    <div key={index} className="flex flex-row">
                      <BsCircleHalf className="text-xs text-[#BF1D2F] mt-1" />
                      <p className="mulish-regular text-sm leading-normal text-black pl-2 text-justify">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full"
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              // 1280: { slidesPerView: 3 },
            }}
            loop={true}
            centeredSlides={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {product.sliderImg &&
              product.sliderImg.map((img, index) => (
                <SwiperSlide key={index}>
                  <div>
                    <Image
                      width={400}
                      height={300}
                      src={img.image1}
                      alt={img.alt}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </motion.div> */
}
