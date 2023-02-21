import React, { useState } from "react";
import { NPCCard } from "./NPCCard";
import "../App.scss";
import "./NPCCardsContainer.scss";
import { StockNPCs } from "./StockNPCs";
import { NPCCombatTraits } from "./NPCCombatTraits";

export const NPCCardsContainer = ({ NPCs, setNPCs }) => {
  const deleteNPC = (event) => {
    const indexToRemove = parseInt(event.target.value);

    const removeCharacter = NPCs.filter((char, index) => {
      if (index != indexToRemove) {
        return true;
      }
    });
    setNPCs(removeCharacter);
  };

  const displayNPCs = () => {
    return NPCs.map((npc, i) => {
      return (
        <NPCCard
          key={i}
          npc={Object.values(npc)}
          deleteNPC={deleteNPC}
          NPCindex={i}
        />
      );
    });
  };

  return (
    <main id="NPC-cards-container" className="">
      {NPCs.length > 0 ? displayNPCs() : ""}
    </main>
  );
};
