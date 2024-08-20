import React from "react";
import Image from "next/image";
import animation from "../../public/images/Animation.gif";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#F5F7F9] backdrop-filter backdrop-blur-md">
      <Image
        src={animation}
        alt="Loading Animation"
        width={100} // Adjust as needed
        height={100} // Adjust as needed
      />
    </div>
  );
}
