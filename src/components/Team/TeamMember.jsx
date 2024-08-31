"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import teamMembers from "@/app/data/Team";

export default function TeamMember({ showBoardOnly = false }) {
  const boardMembers = teamMembers.filter(
    (member) => member.category === "board"
  );
  const otherMembers = teamMembers.filter(
    (member) => member.category === "other"
  );

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-y-20 gap-x-6">
        {boardMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
      {!showBoardOnly && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-y-20 gap-x-6 mt-20">
          {otherMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} variant="orange" />
          ))}
        </div>
      )}
    </div>
  );
}

function TeamMemberCard({ member, variant }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Image
        src={member.image}
        alt={member.name}
        className="w-full h-auto" // Ensure the image is responsive
      />
      <div
        className={`absolute ${
          variant === "orange" ? "w-full" : "-bottom-10 w-68"
        } right-0`}
      >
        <motion.div
          className={`${
            variant === "orange"
              ? "bg-[#BF1D2F] rounded-b-lg text-center"
              : "bg-white rounded-l-full"
          } shadow-md p-5`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p
            className={`poppins-bold text-base ${
              variant === "orange" ? "text-white" : "text-black"
            }`}
          >
            {member.name}
          </p>
          <p
            className={`mulish-regular text-sm ${
              variant === "orange" ? "text-white" : "text-black"
            }`}
          >
            {member.title}
          </p>
        </motion.div>
      </div>
      <motion.div
        className="absolute top-5 right-0 pr-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col text-white">
          <Link href={member.socialLinks.facebook} className="mb-4 text-xl">
            <FaFacebook />
          </Link>
          <Link href={member.socialLinks.instagram} className="mb-4 text-xl">
            <FaInstagram />
          </Link>
          <Link href={member.socialLinks.linkedin} className="mb-4 text-xl">
            <FaLinkedin />
          </Link>
          <Link href={member.socialLinks.whatsapp} className="mb-4 text-xl">
            <FaWhatsapp />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
