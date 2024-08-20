"use client";
import { Libraries, useJsApiLoader } from "@react-google-maps/api";
import { ReactNode } from "react";

const libraries = ["places", "drawing", "geometry"];

export const MapProvider = ({ children }) => {
  // Load the Google Maps JavaScript API asynchronously
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API,
    libraries: libraries,
  });

  if (loadError) return <p>Encountered error while loading Google Maps</p>;

  if (!scriptLoaded) return <p>Map Script is loading ...</p>;

  return <>{children}</>;
};
