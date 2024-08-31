import BlogHero from "@/components/Blog/BlogHero";
import BlogsList from "@/components/Blog/BlogList";
import CommingSoon from "@/components/Shared/CommingSoon";
import React from "react";

export default function Service() {
  return (
    <>
      <div className="mt-5 mb-20 ">
        {/* <BlogHero />
        <BlogsList /> */}
        <div className="my-40">
          <CommingSoon />
        </div>
      </div>
    </>
  );
}
