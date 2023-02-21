import React from "react";
import "../App.scss";
import "./NavBar.scss";
import { NPCList } from "../NPCCardsContainer/NPCList";

export const NPCMenu = () => {
  const generateNPCButtons = () => {
    return NPCList.map((npcObject, i) => {
      const npcArray = Object.values(npcObject);
      const npc = npcArray[0];
      return <button key={i}>{npc.type}</button>;
    });
  };

  return (
    <main id="NPC-menu" className="navbar">
      <button>NEW NPC</button>
      {generateNPCButtons()}
    </main>
  );
};
