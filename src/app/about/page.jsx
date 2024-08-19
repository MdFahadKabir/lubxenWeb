import AboutUs from "@/components/AboutUs/AboutUs";
import AnimatedNumber from "@/components/AboutUs/AnimatedNumber";
import React from "react";

export default function page() {
  return (
    <>
      <div className="my-20">
        <div className="pb-40">
          <AboutUs />
        </div>
        <div>
          <AnimatedNumber />
        </div>
      </div>
    </>
  );
}
