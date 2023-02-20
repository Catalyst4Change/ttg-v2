import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
import { IndividualPlayerCharacterCard } from "../../../IndividualPlayerCard/IndividualPlayerCharacterCard";
import "./CardOptionsMenu.scss";

export const CardOptionsMenu = ({
  playerIndex,
  deletePlayerCharacter,
  playerName,
  charName,
  charConcept,
  charImage,
  attributes,
  chosenMasteries,
  chosenProficiencies,
  resetToOriginal,
}) => {
  const [antiJoker, setAntiJoker] = useState(true);

  const toggleAntiJoker = () => {
    setAntiJoker(!antiJoker);
  };

  return (
    <main id="card-options">
      <div className="options-row row distribute">
        <button
          className="options-icon delete"
          value={playerIndex}
          onClick={(event) => deletePlayerCharacter(event)}
        >
          ❌
        </button>
        <button onClick={resetToOriginal} className="options-icon refresh">
          🔄
        </button>
        <button
          onClick={toggleAntiJoker}
          className={`options-icon joker ${antiJoker && "grey"}`}
        >
          🃏
        </button>
        <Link
          to={
            <IndividualPlayerCharacterCard
              playerIndex={playerIndex}
              deletePlayerCharacter={deletePlayerCharacter}
              resetToOriginal={resetToOriginal}
              playerName={playerName}
              charName={charName}
              charConcept={charConcept}
              charImage={charImage}
              attributes={attributes}
              chosenMasteries={chosenMasteries}
              chosenProficiencies={chosenProficiencies}
            />
          }
        >
          <button className={`options-icon magnify`}>🔍</button>
        </Link>
      </div>
    </main>
  );
};
