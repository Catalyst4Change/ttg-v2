import React from "react";
import "../App.scss";
import { StockNPCs } from "../NPCCardsContainer/StockNPCs";

export const NPCMenu = ({
  addNPC,
  setDeployNewNPCForm,
  setDeployNewCharacterForm,
}) => {
  const deployNPCForm = () => {
    setDeployNewNPCForm(true);
    setDeployNewCharacterForm(false);
  };

  const generateNPCButtons = () => {
    return StockNPCs.map((npc, i) => {
      return (
        <button
          className="option-button sidebar"
          key={i}
          onClick={() => addNPC(npc)}
        >
          {npc.type}
        </button>
      );
    });
  };

  return (
    <main id="NPC-menu" className="navbar">
      <button className="option-button sidebar" onClick={deployNPCForm}>
        NPC
      </button>
      <b>Deploy NPC:</b>
      {generateNPCButtons()}
    </main>
  );
};
