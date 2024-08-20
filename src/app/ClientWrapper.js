"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import Loading from "./loading";

export default function ClientWrapper({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
