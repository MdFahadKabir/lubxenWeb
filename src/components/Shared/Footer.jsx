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
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-2 md:gap-10 text-white">
            <div>
              <Link href="/">
                <Image
                  src={LubxenLogoFooter}
                  alt="Lubxen"
                  className="w-auto h-40"
                />
              </Link>
              <p className="mulish-semibold text-sm  leading-normal text-white py-5 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div>
              <p className="poppins-bold text-sm md:text-lg  leading-normal mt-5 md:mt-14 mb-3 md:mb-8 lg:mb-8 xl:mb-8">
                Company
              </p>
              <ul>
                <li className="flex flex-row pb-3">
                  <MdArrowForwardIos className="text-2xl text-[#BF1D2F]" />
                  <Link
                    className="mulish-semibold text-sm  leading-normal text-white pl-5"
                    href="/product"
                  >
                    Product
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
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="poppins-bold text-sm md:text-lg  leading-normal mt-5 md:mt-14 mb-3 md:mb-8 lg:mb-8 xl:mb-8">
                Legal & Regulatory
              </p>
              <ul>
                <li className="flex flex-row pb-3">
                  <MdArrowForwardIos className="text-2xl text-[#BF1D2F]" />
                  <Link
                    className="mulish-semibold text-sm  leading-normal text-white pl-5"
                    href="/terms_&_conditions"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li className="flex flex-row pb-3">
                  <MdArrowForwardIos className="text-2xl text-[#BF1D2F]" />
                  <Link
                    className="mulish-semibold text-sm  leading-normal text-white pl-5"
                    href="/privecy_policy"
                  >
                    Privecy policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="poppins-bold text-sm md:text-lg  leading-normal mt-5 md:mt-14 mb-3 md:mb-8 lg:mb-8 xl:mb-8">
                Get in touch
              </p>
              <div>
                <div className="flex flex-row pb-3">
                  <IoMdCall className="text-2xl text-[#BF1D2F] w-6" />
                  <p className="mulish-semibold text-sm  leading-normal text-white pl-5 w-full">
                    +971544997141
                  </p>
                </div>
                <div className="flex flex-row pb-3">
                  <FaMailBulk className="text-2xl text-[#BF1D2F] w-6" />
                  <p className="mulish-semibold text-sm  leading-normal text-white pl-5 w-full">
                    contact@lubxen.com
                  </p>
                </div>
                <div className="flex flex-row pb-3">
                  <FaHome className="text-2xl text-[#BF1D2F] w-6" />
                  <p className="mulish-semibold text-sm  leading-normal text-white text-justify pl-5 w-full">
                    Head Office Address: Al Attar Grand Building, Plot Number
                    -522-0, Bank Street Building - 142 Khalid Bin Al Waleed Rd -
                    Al Mankhool Dubai, UAE
                  </p>
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
