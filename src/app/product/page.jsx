import ProductHero from "@/components/Product/ProductHero";
import ProductsList from "@/components/Product/ProductsList";
import React from "react";

export default function Product() {
  return (
    <>
      <div className="bg-transparent dark:bg-gradient-to-b dark:from-black dark:to-[#101010] py-10">
        <ProductHero />
        <ProductsList />
      </div>
    </>
  );
}
