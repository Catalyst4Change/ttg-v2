import React from "react";
import { NPCCard } from "./NPCCard/NPCCard";
import "../App.scss";
import "../CardsContainer.scss";

import { NewNPCForm } from "../NewNPCForm/NewNPCForm";

export const NPCCardsContainer = ({
  addNPC,
  NPCs,
  setNPCs,
  deployNewNPCForm,
  setDeployNewNPCForm,
}) => {
  const deleteNPC = (event) => {
    const indexToRemove = parseInt(event.target.value);

    const removeCharacter = NPCs.filter((char, index) => {
      if (index !== indexToRemove) {
        return true;
      }
    });

    setNPCs(removeCharacter);
  };

  const displayNPCs = () => {
    return NPCs.map((npc, i) => {
      return (
        <div className="npc-card-container" key={npc.name}>
          <NPCCard
            npc={npc}
            NPCs={NPCs}
            setNPCs={setNPCs}
            deleteNPC={deleteNPC}
            NPCindex={i}
          />
        </div>
      );
    });
  };

  return (
    <main className="cards-container">
      <div>
        {deployNewNPCForm && (
          <NewNPCForm
            NPCs={NPCs}
            setDeployNewNPCForm={setDeployNewNPCForm}
            addNPC={addNPC}
          />
        )}
      </div>

      {NPCs.length > 0 ? displayNPCs() : ""}
    </main>
  );
};
