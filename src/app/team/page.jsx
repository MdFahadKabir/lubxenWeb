import TeamHero from "@/components/Team/TeamHero";
import TeamMember from "@/components/Team/TeamMember";
import React from "react";

export default function team() {
  return (
    <>
      <div className=" mb-40 md:mt-36 ">
        <TeamHero />
        <TeamMember />
      </div>
    </>
  );
}
