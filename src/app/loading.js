import React from "react";
import Image from "next/image";
import animation from "../../public/images/Animation.gif";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#F5F7F9]  backdrop-filter backdrop-blur-md">
      <div className="flex h-screen">
        <svg viewBox="0 0 100 20" className="w-full max-w-[600px] h-full">
          <defs>
            <linearGradient
              id="mobilOilGradient"
              gradientTransform="rotate(90)"
            >
              <stop offset="0%" stopColor="#BF1D2F" /> {/* Mobil Blue */}
              <stop offset="50%" stopColor="#BF1D2F" /> {/* Mobil Red */}
              <stop offset="100%" stopColor="#BF1D2F" /> {/* Mobil Blue */}
            </linearGradient>
            <pattern
              id="wave"
              x="0"
              y="-0.5"
              width="100%"
              height="100%"
              patternUnits="userSpaceOnUse"
            >
              <path
                id="wavePath"
                d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"
                mask="url(#mask)"
                fill="url(#mobilOilGradient)"
              >
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  dur="1.5s"
                  type="translate"
                  from="0,0"
                  to="40,0"
                  repeatCount="indefinite"
                />
              </path>
            </pattern>
          </defs>
          <text
            textAnchor="middle"
            x="50"
            y="15"
            fontSize="17"
            fill="white"
            fillOpacity="0.1"
          >
            LUBXEN
          </text>
          <text
            textAnchor="middle"
            x="50"
            y="15"
            fontSize="17"
            fill="url(#wave)"
            fillOpacity="1"
          >
            LUBXEN
          </text>
        </svg>
      </div>
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
