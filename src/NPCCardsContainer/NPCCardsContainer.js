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
        <div className="npc-card-container" key={`${Object.keys(npc)}${i}`}>
          <NPCCard
            npc={Object.values(npc)}
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
            setDeployNewNPCForm={setDeployNewNPCForm}
            addNPC={addNPC}
          />
        )}
      </div>

      {NPCs.length > 0 ? displayNPCs() : ""}
    </main>
  );
};
