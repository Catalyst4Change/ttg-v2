import React from "react";
import { NewPlayerCharacterForm } from "../NewPlayerCharacterForm/NewPlayerCharacterForm";
import { PlayerCharacterCard } from "./PlayerCharacterCard/PlayerCharacterCard/PlayerCharacterCard";
import "../App.scss";
import "../CardsContainer.scss";

export const PlayerCardsContainer = ({
  playerCharacters,
  setPlayerCharacters,
  addPlayerCharacter,
  deletePlayerCharacter,
  deployNewCharacterForm,
  setDeployNewCharacterForm,
}) => {
  const orderByInitiative = () => {
    return playerCharacters.sort(
      (a, b) => b.stats.initiative - a.stats.initiative
    );
  };

  const displayCards = () => {
    return orderByInitiative().map((character, i) => {
      return (
        <div className="player-card-container" key={character.playerName}>
          <PlayerCharacterCard
            playerIndex={i}
            character={character}
            playerCharacters={playerCharacters}
            setPlayerCharacters={setPlayerCharacters}
            deletePlayerCharacter={deletePlayerCharacter}
          />
        </div>
      );
    });
  };

  return (
    <main className="cards-container">
      <div>
        {deployNewCharacterForm && (
          <NewPlayerCharacterForm
            addPlayerCharacter={addPlayerCharacter}
            setDeployNewCharacterForm={setDeployNewCharacterForm}
            playerCharacters={playerCharacters}
          />
        )}
      </div>
      {displayCards()}
    </main>
  );
};
