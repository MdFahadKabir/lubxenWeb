import React from "react";

import DistributorFrom from "@/components/Distributor/DistributorFrom";
import Faq from "@/components/Homepage/Faq";
import DistributorInfo from "@/components/Distributor/DistributorInfo";
import DistributorHero from "@/components/Distributor/DistributorHero";

export default function Distributor() {
  return (
    <>
      <div className="mt-5 mb-5 ">
        <DistributorHero />
      </div>

      <div className=" px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 mb-10">
        <DistributorFrom />
      </div>
      {/* <div>
        <div className="flex flex-col md:flex-row md:justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 mb-10">
          <DistributorInfo />
          <div className="mx-10 my-5"></div>
          <DistributorFrom />
        </div>
      </div> */}
    </>
  );
}
