import AboutUs from "@/components/AboutUs/AboutUs";
import BlogHero from "@/components/Blog/BlogHero";
import BlogsList from "@/components/Blog/BlogList";
import Faq from "@/components/Homepage/Faq";
import Hero from "@/components/Homepage/Hero";
import OurPartners from "@/components/Homepage/OurPartners";
import Testimonial from "@/components/Homepage/Testimonial";
import ServiceHero from "@/components/Service/ServiceHero";
import ServicesList from "@/components/Service/ServicesList";
import TeamHero from "@/components/Team/TeamHero";
import TeamMember from "@/components/Team/TeamMember";
import React from "react";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="mt-52 md:mt-20 pb-32 md:pb-60 ">
        <AboutUs />
      </div>
      <div className="pb-5 md:pb-20 ">
        <Testimonial />
      </div>
      {/* <div className=" pb-20 ">
        <ServiceHero />
        <ServicesList />
      </div> */}
      <div className=" pb-20 md:pb-40 ">
        <TeamHero />
        <TeamMember showBoardOnly={true} />
      </div>
      <div className=" pb-10 md:pb-24 ">
        <Faq />
      </div>

      <div className=" pb-20 ">
        <BlogHero />
        <BlogsList />
      </div>
      <div className=" pb-20 ">
        <OurPartners />
      </div>
    </div>
  );
}
