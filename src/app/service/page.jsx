import ServiceHero from "@/components/Service/ServiceHero";
import ServicesList from "@/components/Service/ServicesList";
import React from "react";

export default function Service() {
  return (
    <>
      <div className="mt-5 mb-20 md:mt-40">
        <ServiceHero />
        <ServicesList />
      </div>
    </>
  );
}
