"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import Loading from "./loading";
import { FloatingWhatsApp } from "react-floating-whatsapp";

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
      <FloatingWhatsApp
        phoneNumber="+971544997141" // Replace with your actual phone number
        accountName="LUBXEN Team" // Replace with your account name
        avatar="images/LubxenLogo.png" // Optional: Replace with a valid URL for the avatar image
        statusMessage="Typically replies within a few Hours"
        chatMessage="Hello! How can we help you today?"
        // allowClickAway
        allowEsc
        notification
        notificationSound
      />
      <Footer />
    </>
  );
}
