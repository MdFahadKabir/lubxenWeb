"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BsCircleHalf } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import blogs from "@/app/data/Blog";
import { motion } from "framer-motion";

export default function BlogDetails({ blog }) {
  return (
    <div className="flex flex-col lg:flex-row justify-between  px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16">
      <div className="w-full lg:w-2/5 mb-8 lg:mb-0">
        <motion.ul
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {blogs.map((blogItem) => (
            <Link key={blogItem.id} href={`/blog/${blogItem.slug}`}>
              <motion.li
                whileHover={{ scale: 1.05 }}
                className={`border shadow-md p-4 mb-2 transform duration-700 poppins-bold text-lg rounded-r-full leading-normal  ${
                  blogItem.slug === blog.slug
                    ? "bg-[#BF1D2F] text-white text-lg"
                    : "hover:bg-[#BF1D2F] hover:text-white text-lg"
                }`}
              >
                {blogItem.name}
              </motion.li>
            </Link>
          ))}
        </motion.ul>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="poppins-bold text-lg sm:text-2xl md:text-2xl lg:text-2xl leading-normal  pb-3">
            Contact
          </p>
          <div>
            <div className="flex flex-row pb-3">
              <FaMapLocationDot className="text-2xl text-[#BF1D2F]" />
              <p className="mulish-regular  text-sm  leading-normal text-black pl-5">
                {blog.contact.location}
              </p>
            </div>
            <div className="flex flex-row pb-3">
              <IoMdCall className="text-2xl text-[#BF1D2F]" />
              <div>
                {blog.contact.contactNumber.map((contact, index) => (
                  <p
                    key={index}
                    className="mulish-regular  text-sm  leading-normal text-black pl-5"
                  >
                    {contact.number}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-row pb-3">
              <MdOutlineSupportAgent className="text-2xl text-[#BF1D2F]" />
              <p className="mulish-regular  text-sm  leading-normal text-black pl-5">
                {blog.contact.email}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="lg:mx-10"></div>
      <div className="w-full lg:w-3/5">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" mb-2 poppins-regular text-black text-sm sm:text-lg md:text-xl lg:text-xl"
        >
          {blog.date}
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="poppins-bold text-lg sm:text-2xl md:text-2xl lg:text-2xl leading-normal mb-4"
        >
          {blog.name}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            width={400}
            height={400}
            src={blog.image}
            alt={blog.name}
            className="mb-4 w-full h-auto rounded-lg"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mulish-regular  text-sm  leading-normal  text-black mb-3"
        >
          {blog.content}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-5"
        >
          {blog.list.map((item) => (
            <div key={item.id} className="flex flex-row">
              <BsCircleHalf className="text-xs text-[#BF1D2F] mt-1" />
              <p className="mulish-regular  text-sm  leading-normal  text-black pl-2">
                {item.content}
              </p>
            </div>
          ))}
        </motion.div>
        <motion.div
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
            {blog.sliderImg &&
              blog.sliderImg.map((img, index) => (
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
        </motion.div>
      </div>
    </div>
  );
}
