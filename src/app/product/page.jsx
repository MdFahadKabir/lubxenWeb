import ProductHero from "@/components/Product/ProductHero";
import ProductsList from "@/components/Product/ProductsList";
import React from "react";

export default function Product() {
  return (
    <>
      <div className="mt-5 mb-20 ">
        <ProductHero />
        <ProductsList />
      </div>
    </>
  );
}
