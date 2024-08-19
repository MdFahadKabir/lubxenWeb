import React from "react";
import { FaHome, FaMailBulk } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import Image from "next/image";
import LubxenLogoFooter from "../../../public/images/LubxenLogo.png";
export default function Footer() {
  return (
    <>
      <div className="bg-[#191514]  ">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 text-white">
          <div>
            <Image
              src={LubxenLogoFooter}
              alt="Lubxen"
              className="w-auto h-40"
            />
            <p className="mulish-semibold text-sm  leading-normal text-white py-5 w-4/5">
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
                <p className="mulish-semibold text-sm  leading-normal text-white pl-5 w-3/5">
                  380 St Kilda Road, Melbourne VIC 3004, Australia
                </p>
              </div>
            </div>
          </div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </div>
    </>
  );
}
