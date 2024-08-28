import AboutUs from "@/components/AboutUs/AboutUs";
import AnimatedNumber from "@/components/AboutUs/AnimatedNumber";
import React from "react";

export default function page() {
  return (
    <>
      <div className="mt-5 mb-20 md:mt-40">
        <div className="pb-20 md:pb-20">
          <AboutUs />
        </div>
        <div>
          <AnimatedNumber />
        </div>
      </div>
    </>
  );
}
