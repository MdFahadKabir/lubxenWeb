import React from "react";
import DistributorFrom from "@/components/Distributor/DistributorFrom";
import DistributorHero from "@/components/Distributor/DistributorHero";

export default function Distributor() {
  return (
    <>
      <div className="bg-transparent dark:bg-gradient-to-b dark:from-black dark:to-[#101010] py-10">
        <div className=" px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 ">
          <DistributorHero />
          <div className="py-5"></div>
          <DistributorFrom />
        </div>
      </div>
    </>
  );
}
