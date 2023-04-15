import React from "react";
import { NewPlayerCharacterForm } from "../NewPlayerCharacterForm/NewPlayerCharacterForm";
import "../App.scss";
import "../NewPlayerCharacterForm/NewPlayerCharacterForm.scss";
import "./PlayerScreen.scss";
import { IndividualCharacterCard } from "./IndividualCharacterCard/IndividualCharacterCard";

export const PlayerScreen = ({
  addPlayerCharacter,
  playerCharacters,
  setPlayerCharacters,
  deletePlayerCharacter,
}) => {
  return (
    <main id="player-screen">
      {playerCharacters.length === 0 ? (
        <NewPlayerCharacterForm
          playerCharacters={playerCharacters}
          addPlayerCharacter={addPlayerCharacter}
        />
      ) : (
        <div className="player-card-container">
          <IndividualCharacterCard
            playerCharacters={playerCharacters}
            character={playerCharacters[0]}
            playerIndex={0}
            setPlayerCharacters={setPlayerCharacters}
            deletePlayerCharacter={deletePlayerCharacter}
          />
        </div>
      )}
    </main>
  );
};
