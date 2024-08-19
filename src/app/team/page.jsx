import TeamHero from "@/components/Team/TeamHero";
import TeamMember from "@/components/Team/TeamMember";
import React from "react";

export default function team() {
  return (
    <>
      <div className="mt-16 mb-20">
        <TeamHero />
        <TeamMember />
      </div>
    </>
  );
}
