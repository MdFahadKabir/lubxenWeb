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
  const searchParams = useSearchParams();

  useEffect(() => {
    if (initialVisit) {
      const timer = setTimeout(() => {
        setLoading(false);
        setInitialVisit(false);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 500);

      return () => clearTimeout(timer);
    }
  }, [pathname, searchParams, initialVisit]);

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
      <Navbar />
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
// "use client";
// import React, { useState, useEffect } from "react";
// import { usePathname, useSearchParams } from "next/navigation";
// import Navbar from "@/components/Shared/Navbar";
// import Footer from "@/components/Shared/Footer";
// import Loading from "./loading";
// import { MoonLoader } from "react-spinners"; // For page transitions
// import { FloatingWhatsApp } from "react-floating-whatsapp";

// export default function ClientWrapper({ children }) {
//   const [loading, setLoading] = useState(true); // Initially set to true for the initial loader
//   const [initialVisit, setInitialVisit] = useState(true); // Flag to track if it's the initial visit
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     if (initialVisit) {
//       // If it's the initial visit, show the custom loader for 3 seconds
//       const timer = setTimeout(() => {
//         setLoading(false);
//         setInitialVisit(false); // Mark that the initial visit is done
//       }, 3000); // 3 seconds for the initial loader

//       return () => clearTimeout(timer);
//     } else {
//       // For subsequent page transitions, show the MoonLoader for a short duration
//       setLoading(true);
//       const timer = setTimeout(() => setLoading(false), 1000); // Adjust time for smoother transitions

//       return () => clearTimeout(timer);
//     }
//   }, [pathname, searchParams, initialVisit]);

//   if (loading) {
//     // Show the custom loader on the initial visit, and MoonLoader on page transitions
//     return initialVisit ? (
//       <Loading />
//     ) : (
//       <div className="flex items-center justify-center min-h-screen">
//         <MoonLoader color="#BF1D2F" size={50} />
//       </div>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       {children}
//       <FloatingWhatsApp
//         phoneNumber="+971544997141"
//         accountName="LUBXEN Team"
//         avatar="images/LubxenLogo.png"
//         statusMessage="Typically replies within a few hours"
//         chatMessage="Hello! How can we help you today?"
//         allowEsc
//         notification
//         notificationSound
//       />
//       <Footer />
//     </>
//   );
// }
