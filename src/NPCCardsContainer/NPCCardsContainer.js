import React, { useState } from "react";
import { NPCCard } from "./NPCCard";
import "../App.scss";
import "./NPCCardsContainer.scss";
import { NPCList } from "./NPCList";
import { NPCCombatTraits } from "./NPCCombatTraits";

export const NPCCardsContainer = () => {
  const displayNPCs = () => {
    return NPCList.map((npc, i) => {
      return <NPCCard key={i} npc={Object.values(npc)} />;
    });
  };

  return (
    <main id="NPC-cards-container" className="">
      {displayNPCs()}
    </main>
  );
};
