"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logos from "@/app/data/Partner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";

export default function OurPartners() {
  return (
    <>
      {/* <div className="relative overflow-hidden px-4 sm:px-8 md:mx-40 ">
        <div className="absolute top-0 left-0 h-full w-10 sm:w-16 md:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-10 sm:w-16 md:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-20%", "-40%", "-60%", "-80%", "-100%", "0%"] }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            times: [0, 0.16, 0.32, 0.48, 0.64, 0.8, 1],
            repeat: Infinity,
          }}
        >
          {logos.map((logo) => (
            <div key={logo.id} className="flex-shrink-0 mx-2 sm:mx-4">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={200}
                className="w-auto h-12 sm:h-14 md:h-10 object-contain"
              />
            </div>
          ))}
          {logos.map((logo) => (
            <div
              key={`duplicate-${logo.id}`}
              className="flex-shrink-0 mx-2 sm:mx-4"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={200}
                className="w-auto h-12 sm:h-14 md:h-10 object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div> */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16">
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
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div>
                  <Image
                    width={400}
                    height={300}
                    src={logo.src}
                    alt={logo.alt}
                    className="rounded-lg w-full h-80"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </>
  );
}
