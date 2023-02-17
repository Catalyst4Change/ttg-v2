import React, { useState } from "react";
import { CharacterSheet } from "./CharacterSheet";
import "../App.css";
import { PlayerCharacterCard } from "./PlayerCharacterCard/PlayerCharacterCard";

export const PlayerCardsContainer = ({ numberOfPlayerCards }) => {
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

  const displayCards = () => {
    return playerCharacters.map((card, i) => {
      console.log(card);
      return (
        <PlayerCharacterCard
          key={i}
          playerName={card.playerName}
          charName={card.charName}
          charConcept={card.charConcept}
          charImage={card.charImage}
          attributes={card.attributes}
          chosenMasteries={card.chosenMasteries}
          chosenProficiencies={card.chosenProficiencies}
        />
      );
    });
  };

  return (
    <main className="card-container border">
      <div>{displayCards()}</div>
    </main>
  );
};
