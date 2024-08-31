import AboutUs from "@/components/AboutUs/AboutUs";
import BlogHero from "@/components/Blog/BlogHero";
import BlogsList from "@/components/Blog/BlogList";
import Faq from "@/components/Homepage/Faq";
import Hero from "@/components/Homepage/Hero";
import OurPartners from "@/components/Homepage/OurPartners";
import Testimonial from "@/components/Homepage/Testimonial";
import ProductHero from "@/components/Product/ProductHero";
import ProductsList from "@/components/Product/ProductsList";
import ProductsSwiper from "@/components/Product/ProductsSwiper";

import TeamHero from "@/components/Team/TeamHero";
import TeamMember from "@/components/Team/TeamMember";
import React from "react";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="mt-52 md:mt-20 pb-10 md:pb-14 ">
        <AboutUs />
      </div>
      <div className="pb-5 md:pb-20 ">
        <Testimonial />
      </div>
      <div className=" pb-20 ">
        <ProductHero />
        <ProductsSwiper />
      </div>
      {/* <div className=" pb-20 md:pb-40 ">
        <TeamHero />
        <TeamMember showBoardOnly={true} />
      </div> */}
      <div className="  ">
        <Faq />
      </div>

      {/* <div className=" pb-20 ">
        <BlogHero />
        <BlogsList />
      </div> */}
      <div className=" pb-20 bg-[#101010]">
        <OurPartners />
      </div>
    </div>
  );
}
