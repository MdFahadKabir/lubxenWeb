import AboutUs from "@/components/AboutUs/AboutUs";
import Faq from "@/components/Homepage/Faq";
import Hero from "@/components/Homepage/Hero";
import OurPartners from "@/components/Homepage/OurPartners";
import Testimonial from "@/components/Homepage/Testimonial";
import ProductCategory from "@/components/Product/ProductCategory";
import ProductHero from "@/components/Product/ProductHero";
import React from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mt-12 md:mt-20 pb-10 md:pb-14 ">
        <AboutUs />
      </div>
      <div className="pb-5 md:pb-20 ">
        <Testimonial />
      </div>
      <div className=" pb-20 ">
        <ProductHero />
        <ProductCategory />
      </div>
      <div>
        <Faq />
      </div>
      <div className=" bg-[#101010]">
        <OurPartners />
      </div>
    </div>
  );
}
