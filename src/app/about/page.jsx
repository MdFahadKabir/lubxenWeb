import AboutUs from "@/components/AboutUs/AboutUs";
import AnimatedNumber from "@/components/AboutUs/AnimatedNumber";
import React from "react";

export default function page() {
  return (
    <>
      <div className="bg-transparent dark:bg-gradient-to-b dark:from-black dark:to-[#101010] py-10">
        <AboutUs />
        <div className="py-5"></div>
        <AnimatedNumber />
      </div>
    </>
  );
}
