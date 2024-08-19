import React from "react";
import { FaHome, FaMailBulk } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";
import LubxenLogoFooter from "../../../public/images/LubxenLogo.png";
import factor1 from "../../../public/images/factor1.jpg";
import factor2 from "../../../public/images/factor2.jpg";
import factor3 from "../../../public/images/factor3.jpg";

import Link from "next/link";
export default function Footer() {
  return (
    <>
      <div className="bg-[#191514]  ">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4  lg:px-8 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 text-white">
            <div>
              <Image
                src={LubxenLogoFooter}
                alt="Lubxen"
                className="w-auto h-40"
              />
              <p className="mulish-semibold text-sm  leading-normal text-white py-5 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <div>
                <div className="flex flex-row pb-3">
                  <IoMdCall className="text-2xl text-[#BF1D2F]" />
                  <p className="mulish-semibold text-sm  leading-normal text-white pl-5">
                    +123 (4567) 890
                  </p>
                </div>
                <div className="flex flex-row pb-3">
                  <FaMailBulk className="text-2xl text-[#BF1D2F]" />
                  <p className="mulish-semibold text-sm  leading-normal text-white pl-5">
                    info@grabo.com
                  </p>
                </div>
                <div className="flex flex-row pb-3">
                  <FaHome className="text-2xl text-[#BF1D2F]" />
                  <p className="mulish-semibold text-sm  leading-normal text-white pl-5 ">
                    380 St Kilda Road, Melbourne VIC 3004, Australia
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="poppins-bold text-lg sm:text-2xl md:text-2xl lg:text-3xl leading-normal mt-5 md:mt-28 lg:mt-28 xl:mt-28 mb-3 md:mb-8 lg:mb-8 xl:mb-8">
                Links
              </p>
              <ul>
                <li className="flex flex-row pb-3">
                  <MdArrowForwardIos className="text-2xl text-[#BF1D2F]" />
                  <Link
                    className="mulish-semibold text-sm  leading-normal text-white pl-5"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="flex flex-row pb-3">
                  <MdArrowForwardIos className="text-2xl text-[#BF1D2F]" />
                  <Link
                    className="mulish-semibold text-sm  leading-normal text-white pl-5"
                    href="/service"
                  >
                    Service
                  </Link>
                </li>
                <li className="flex flex-row pb-3">
                  <MdArrowForwardIos className="text-2xl text-[#BF1D2F]" />
                  <Link
                    className="mulish-semibold text-sm  leading-normal text-white pl-5"
                    href="/blog"
                  >
                    Blog
                  </Link>
                </li>
                <li className="flex flex-row pb-3">
                  <MdArrowForwardIos className="text-2xl text-[#BF1D2F]" />
                  <Link
                    className="mulish-semibold text-sm  leading-normal text-white pl-5"
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="flex flex-row pb-3">
                  <MdArrowForwardIos className="text-2xl text-[#BF1D2F]" />
                  <Link
                    className="mulish-semibold text-sm  leading-normal text-white pl-5"
                    href="/team"
                  >
                    Team
                  </Link>
                </li>
                <li className="flex flex-row pb-3">
                  <MdArrowForwardIos className="text-2xl text-[#BF1D2F]" />
                  <Link
                    className="mulish-semibold text-sm  leading-normal text-white pl-5"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="poppins-bold text-lg sm:text-2xl md:text-2xl lg:text-3xl leading-normal mt-5 md:mt-28 lg:mt-28 xl:mt-28 mb-3 md:mb-8 lg:mb-8 xl:mb-8">
                Links
              </p>
              <ul>
                <li className="flex flex-row pb-3">
                  <MdArrowForwardIos className="text-2xl text-[#BF1D2F]" />
                  <Link
                    className="mulish-semibold text-sm  leading-normal text-white pl-5"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="flex flex-row pb-3">
                  <MdArrowForwardIos className="text-2xl text-[#BF1D2F]" />
                  <Link
                    className="mulish-semibold text-sm  leading-normal text-white pl-5"
                    href="/service"
                  >
                    Service
                  </Link>
                </li>
                <li className="flex flex-row pb-3">
                  <MdArrowForwardIos className="text-2xl text-[#BF1D2F]" />
                  <Link
                    className="mulish-semibold text-sm  leading-normal text-white pl-5"
                    href="/blog"
                  >
                    Blog
                  </Link>
                </li>
                <li className="flex flex-row pb-3">
                  <MdArrowForwardIos className="text-2xl text-[#BF1D2F]" />
                  <Link
                    className="mulish-semibold text-sm  leading-normal text-white pl-5"
                    href="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="flex flex-row pb-3">
                  <MdArrowForwardIos className="text-2xl text-[#BF1D2F]" />
                  <Link
                    className="mulish-semibold text-sm  leading-normal text-white pl-5"
                    href="/team"
                  >
                    Team
                  </Link>
                </li>
                <li className="flex flex-row pb-3">
                  <MdArrowForwardIos className="text-2xl text-[#BF1D2F]" />
                  <Link
                    className="mulish-semibold text-sm  leading-normal text-white pl-5"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="poppins-bold text-lg sm:text-2xl md:text-2xl lg:text-3xl leading-normal mt-5 md:mt-28 lg:mt-28 xl:mt-28 mb-3 md:mb-8 lg:mb-8 xl:mb-8">
                Links
              </p>
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <Image
                    src={factor1}
                    alt="factory 1"
                    className="w-auto h-auto"
                  />
                </div>
                <div>
                  <Image
                    src={factor1}
                    alt="factory 1"
                    className="w-auto h-auto"
                  />
                </div>
                <div>
                  <Image
                    src={factor1}
                    alt="factory 1"
                    className="w-auto h-auto"
                  />
                </div>
                <div>
                  <Image
                    src={factor1}
                    alt="factory 1"
                    className="w-auto h-auto"
                  />
                </div>
                <div>
                  <Image
                    src={factor1}
                    alt="factory 1"
                    className="w-auto h-auto"
                  />
                </div>
                <div>
                  <Image
                    src={factor1}
                    alt="factory 1"
                    className="w-auto h-auto"
                  />
                </div>
                <div>
                  <Image
                    src={factor1}
                    alt="factory 1"
                    className="w-auto h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 lg:px-8">
            {" "}
            <p className="text-white mulish-regular text-sm  leading-normal">
              2024 All rights reserved by{" "}
              <span className="text-[#BF1D2F] mulish-bold">Octoriz</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
