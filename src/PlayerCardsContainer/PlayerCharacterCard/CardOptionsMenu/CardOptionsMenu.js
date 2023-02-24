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
    <main id="card-options" className="options-row row distribute">
      <button
        value={playerIndex}
        onClick={(event) => deletePlayerCharacter(event)}
      >
        DELETE
      </button>
      <button onClick={resetToOriginal}>REFRESH</button>
      <button onClick={toggleAntiJoker}>ANTI-JOKER</button>
    </main>
  );
};
