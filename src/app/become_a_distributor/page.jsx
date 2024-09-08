import React from "react";
import DistributorFrom from "@/components/Distributor/DistributorFrom";
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
    </>
  );
}
