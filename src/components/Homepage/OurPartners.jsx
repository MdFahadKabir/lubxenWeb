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
                <div className="flex items-center justify-center h-64 sm:h-80 md:h-96">
                  <Image
                    width={400}
                    height={300}
                    src={logo.src}
                    alt={logo.alt}
                    className="w-full h-full object-cover rounded-lg"
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
