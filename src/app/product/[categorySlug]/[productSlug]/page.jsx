import products from "@/app/data/Product";
import ProductDetails from "@/components/Product/ProductDetails";
import React from "react";

export default function ProductPage({ params }) {
  const { categorySlug, productSlug } = params;
  const productCategory = products.find(
    (category) => category.categorySlug === categorySlug
  );

  if (!productCategory) {
    return <p>Category not found</p>;
  }
  const product = productCategory.items.find(
    (item) => item.slug === productSlug
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <ProductDetails
      product={product}
      categorySlug={categorySlug}
      categoryProducts={productCategory.items}
    />
  );
}
