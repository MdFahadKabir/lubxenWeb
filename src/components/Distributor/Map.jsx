"use client";
import { GoogleMap } from "@react-google-maps/api";

const defaultMapContainerStyle = {
  width: "100%",
  height: "54vh",
  borderRadius: "15px 0px 0px 15px",
};

const defaultMapCenter = {
  lat: 35.8799866,
  lng: 76.5048004,
};

const defaultMapZoom = 18;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "roadmap",
};

export default function Map() {
  return (
    <div className=" w-full h-auto md:h-[20vh]  rounded-2xl">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      />
    </div>
  );
}
