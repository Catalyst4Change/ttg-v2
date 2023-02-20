import React, { useState } from "react";
import "../../../App.scss";
import "./CardOptionsMenu.scss";

export const CardOptionsMenu = ({
  playerIndex,
  deletePlayerCharacter,
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
      </div>
    </main>
  );
};
