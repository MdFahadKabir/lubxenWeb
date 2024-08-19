import services from "@/app/data/Service";
import ServiceDetails from "@/components/Service/ServiceDetails";
import React from "react";

export default function ServicePage({ params }) {
  const { slug } = params;

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <p>Service not found</p>;
  }

  return <ServiceDetails service={service} />;
}
