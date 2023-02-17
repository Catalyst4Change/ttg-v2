import React, { useState } from "react";
import { CharacterSheet } from "./CharacterSheet";
import "../App.css";

export const CardContainer = ({ numberOfCards }) => {
  // this component contains the form and resulting character sheet
  const [playerCharacters, setPlayerCharacters] = useState([
    {
      playerName: "Catalyst",
      charName: "Chefolopod",
      charConcept: "Food Bard Squid",
      charImage: "",
      attributes: {
        brawn: 3,
        agility: 3,
        intelligence: 1,
        wit: 2,
        charm: 2,
        presence: 2,
      },
      chosenMasteries: ["Biology", "Engineering"],
      chosenProficiencies: ["Melee", "Survival"],
    },
  ]);

  const addPlayerCharacter = (newChar) => {
    setPlayerCharacters([...playerCharacters, newChar]);
  };

  const playerCards = () => {};

  const displayCards = () => {
    let cards = [];
    for (let index = 0; index < numberOfCards; index++) {
      cards.push({});
    }
    return cards;
  };

  return (
    <div className="card-container">
      <CharacterSheet addPlayerCharacter={addPlayerCharacter} />
    </div>
  );
};
