import ContactForm from "@/components/Contact/ContactFrom";
import React from "react";
import { MapProvider } from "../../../providers/map-provider";
import Map from "@/components/Contact/Map";
import ContactInfo from "@/components/Contact/ContactInfo";

export default function Contact() {
  return (
    <>
      <div className="mt-5 mb-20  px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16">
        <div className="pb-20">
          <ContactInfo />
        </div>
        <div className="flex flex-col md:justify-between md:flex-row ">
          <div className="w-full">
            <ContactForm />
          </div>
          <div className="mx-10 my-5 md:my-0"></div>
          <div className="w-full">
            <MapProvider>
              <Map />
            </MapProvider>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
