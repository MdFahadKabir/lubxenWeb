import blogs from "@/app/data/Blog";
import BlogDetails from "@/components/Blog/BlogDetails";
import React from "react";

export default function BlogPage({ params }) {
  const { slug } = params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <p>Blog not found</p>;
  }
  return (
    <>
      <BlogDetails blog={blog} />
    </>
  );
}
