import ServiceHero from "@/components/Service/ServiceHero";
import ServicesList from "@/components/Service/ServicesList";
import React from "react";

export default function Service() {
  return (
    <>
      <div className="my-20">
        <ServiceHero />
        <ServicesList />
      </div>
    </>
  );
}
