import BlogHero from "@/components/Blog/BlogHero";
import BlogsList from "@/components/Blog/BlogList";
import React from "react";

export default function Service() {
  return (
    <>
      <div className="mt-5 mb-20 md:mt-40">
        <BlogHero />
        <BlogsList />
      </div>
    </>
  );
}
