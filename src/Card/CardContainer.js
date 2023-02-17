import React from "react";
import { CharacterSheet } from "./CharacterSheet";

export const CardContainer = ({ addPlayerCharacter, playerChar }) => {
  // this component contains the form and resulting character sheet

  const playerCards = () => {};

  return (
    <div className="card-container">
      <CharacterSheet addPlayerCharacter={addPlayerCharacter} />
    </div>
  );
};
