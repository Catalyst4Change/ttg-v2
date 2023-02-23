import React, { useState } from "react";
import { NewPlayerCharacterForm } from "../NewPlayerCharacterForm/NewPlayerCharacterForm";
import { PlayerCharacterCard } from "./PlayerCharacterCard/PlayerCharacterCard/PlayerCharacterCard";
import "../App.scss";
import "./PlayerCardsContainer.scss";
import { stockPlayerCharacters } from "./StockPlayerCharacters";

export const PlayerCardsContainer = ({
  deployNewCharacterForm,
  setDeployNewCharacterForm,
}) => {
  const [playerCharacters, setPlayerCharacters] = useState(
    stockPlayerCharacters
  );

  const addPlayerCharacter = (newChar) => {
    setPlayerCharacters([...playerCharacters, newChar]);
    setDeployNewCharacterForm(false);
  };

  const deletePlayerCharacter = (event) => {
    const indexToRemove = parseInt(event.target.value);

    const removeCharacter = playerCharacters.filter((char, index) => {
      if (index !== indexToRemove) {
        return true;
      }
    });
    setPlayerCharacters(removeCharacter);
  };

  const displayCards = () => {
    return playerCharacters.map((card, i) => {
      return (
        <div key={i} className="player-card-container">
          <PlayerCharacterCard
            playerIndex={i}
            deletePlayerCharacter={deletePlayerCharacter}
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

  return (
    <main id="player-cards-container">
      <section id="player-cards-area">
        <div className="new-form-container">
          {deployNewCharacterForm && (
            <NewPlayerCharacterForm
              addPlayerCharacter={addPlayerCharacter}
              setDeployNewCharacterForm={setDeployNewCharacterForm}
            />
          )}
        </div>
        <div id="player-cards-grid">{displayCards()}</div>
      </section>
    </main>
  );
};
