import React, { useState } from "react";
import "../../App.css";
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
    <main>
      <div className="row distribute">
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
      <p></p>
    </main>
  );
};
