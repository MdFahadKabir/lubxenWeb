import BlogHero from "@/components/Blog/BlogHero";
import BlogsList from "@/components/Blog/BlogList";
import CommingSoon from "@/components/Shared/CommingSoon";
import React from "react";

export default function Service() {
  return (
    <>
      <div className="bg-transparent dark:bg-gradient-to-b dark:from-black dark:to-[#101010] py-10">
        <CommingSoon />
      </div>
    </>
  );
}
