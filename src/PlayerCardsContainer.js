import React, { useState } from "react";
import { NewPlayerCharacterForm } from "./NewPlayerCharacterForm/NewPlayerCharacterForm";
import "./App.css";
import { PlayerCharacterCard } from "./PlayerCharacterCard/PlayerCharacterCard/PlayerCharacterCard";

export const PlayerCardsContainer = ({ numberOfPlayerCards }) => {
  const [playerCharacters, setPlayerCharacters] = useState([
    {
      playerName: "Catalyst",
      charName: "Chef O'Lapod",
      charConcept: "Food Bard",
      charImage:
        "https://ih1.redbubble.net/image.1380368364.4611/st,small,845x845-pad,1000x1000,f8f8f8.jpg",
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
