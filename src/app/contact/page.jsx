import ContactForm from "@/components/Contact/ContactFrom";
import React from "react";
import { MapProvider } from "../../../providers/map-provider";
import Map from "@/components/Contact/Map";
import ContactInfo from "@/components/Contact/ContactInfo";

export default function Contact() {
  return (
    <>
      <div className="bg-transparent dark:bg-gradient-to-b dark:from-black dark:to-[#101010] py-10">
        <div className="pb-10">
          <ContactInfo />
        </div>
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
