import React from "react";
import "../App.scss";
import "./NavBar.scss";
import { StockNPCs } from "../NPCCardsContainer/StockNPCs";

export const NPCMenu = ({ addNPC, setDeployNewNPCForm }) => {
  const generateNPCButtons = () => {
    return StockNPCs.map((npcObject, i) => {
      const npcArray = Object.values(npcObject);
      const npc = npcArray[0];
      return (
        <button key={i} onClick={() => addNPC(npcObject)}>
          {npc.type}
        </button>
      );
    });
  };

  return (
    <main id="NPC-menu" className="navbar">
      <button onClick={() => setDeployNewNPCForm(true)}>NEW NPC</button>
      {generateNPCButtons()}
    </main>
  );
};
