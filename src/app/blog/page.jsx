import BlogHero from "@/components/Blog/BlogHero";
import BlogsList from "@/components/Blog/BlogList";
import React from "react";

export default function Service() {
  return (
    <>
      <div className="my-20">
        <BlogHero />
        <BlogsList />
      </div>
    </>
  );
}
