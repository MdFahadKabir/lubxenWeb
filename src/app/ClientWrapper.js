"use client";
import React, { useState, useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import Loading from "./loading";
import { MoonLoader } from "react-spinners";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function ClientWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const [initialVisit, setInitialVisit] = useState(true);
  const pathname = usePathname();
  const [lang, setLang] = useState("en");
  const searchParams = useSearchParams();

  useEffect(() => {
    if (initialVisit) {
      const timer = setTimeout(() => {
        setLoading(false);
        setInitialVisit(false);
      }, 2100);

      return () => clearTimeout(timer);
    } else {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 500);

      return () => clearTimeout(timer);
    }
  }, [pathname, searchParams, initialVisit]);
  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  if (loading) {
    if (initialVisit) {
      return <Loading />;
    }
    return (
      <div className="flex items-center justify-center min-h-screen">
        <MoonLoader color="#BF1D2F" size={50} />
      </div>
    );
  }

  return (
    <>
      <Navbar setLang={setLang} />
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <FloatingWhatsApp
        phoneNumber="+971544997141"
        accountName="LUBXEN Team"
        avatar="images/LubxenLogo.png"
        statusMessage="Typically replies within a few hours"
        chatMessage="Hello! How can we help you today?"
        allowEsc
        notification
        notificationSound
      />
      <Footer />
    </>
  );
}
