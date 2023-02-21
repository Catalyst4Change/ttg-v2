import React, { useState } from "react";
import { NPCCard } from "./NPCCard";
import "../App.scss";
import "./NPCCardsContainer.scss";
import { StockNPCs } from "./StockNPCs";
import { NPCCombatTraits } from "./NPCCombatTraits";

export const NPCCardsContainer = ({ NPCs }) => {
  const displayNPCs = () => {
    return NPCs.map((npc, i) => {
      return <NPCCard key={i} npc={Object.values(npc)} />;
    });
  };

  return (
    <main id="NPC-cards-container" className="">
      {NPCs.length > 0 ? displayNPCs() : ""}
    </main>
  );
};
