import React from "react";
import "../App.scss";
import "./NavBar.scss";
import { StockNPCs } from "../NPCCardsContainer/StockNPCs";

export const NPCMenu = ({ addNPC, setDeployNewNPCForm }) => {
  const generateNPCButtons = () => {
    return StockNPCs.map((npc, i) => {
      return (
        <button key={i} onClick={() => addNPC(npc)}>
          {npc.type}
        </button>
      );
    });
  };

  return (
    <main id="NPC-menu" className="navbar">
      <button
        className="new-character-button"
        onClick={() => setDeployNewNPCForm(true)}
      >
        NPC
      </button>
      <b>Deploy NPC:</b>
      {generateNPCButtons()}
    </main>
  );
};
