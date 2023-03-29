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

  const orderByInitiative = () => {
    return NPCs.sort((a, b) => b.initiative - a.initiative);
  };

  const displayNPCs = () => {
    if (NPCs) {
      return orderByInitiative().map((npc, i) => {
        return (
          <div className="npc-card-container" key={Math.random()}>
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
    }
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

      {displayNPCs()}
    </main>
  );
};
