import React from "react";
import { NPCCard } from "./NPCCard";
import "../App.scss";
import "./NPCCardsContainer.scss";
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

    console.log("removeCharacter", removeCharacter);
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
    <main id="NPC-cards-container">
      <div className="new-npc-form-container">
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
