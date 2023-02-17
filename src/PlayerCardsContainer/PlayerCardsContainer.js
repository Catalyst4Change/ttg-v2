import React, { useState } from "react";
import { NewPlayerCharacterForm } from "../NewPlayerCharacterForm/NewPlayerCharacterForm";
import { PlayerCharacterCard } from "../PlayerCharacterCard/PlayerCharacterCard/PlayerCharacterCard";
import "../App.css";
import "./PlayerCardsContainer.scss";

export const PlayerCardsContainer = ({}) => {
  const [deployNewCharacterForm, setDeployNewCharacterForm] = useState(false);
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
    setDeployNewCharacterForm(false);
  };

  const displayCards = () => {
    return playerCharacters.map((card, i) => {
      return (
        <div className="player-card-container">
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
        </div>
      );
    });
  };

  const createNewPlayerCharacter = () => {
    setDeployNewCharacterForm(true);
  };

  return (
    <main className="cards-container">
      <button onClick={createNewPlayerCharacter} type="button">
        + PC
      </button>
      <section id="cards-row">
        <div className="new-form-container">
          {deployNewCharacterForm && (
            <NewPlayerCharacterForm addPlayerCharacter={addPlayerCharacter} />
          )}
        </div>

        {displayCards()}
      </section>
    </main>
  );
};
