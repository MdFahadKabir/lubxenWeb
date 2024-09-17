import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#FFFFF1] backdrop-filter backdrop-blur-md">
      <video
        src="/videos/lubxen.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="md:w-auto md:h-auto w-full h-full "
      />
    </div>
  );
}

{
  /* <Image
        src={animation}
        alt="Loading Animation"
        width={100} // Adjust as needed
        height={100} // Adjust as needed
      /> */
}
