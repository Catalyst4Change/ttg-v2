import React from "react";
import "../../App.css";

export const CardOptionsMenu = ({
  playerIndex,
  deletePlayerCharacter,
  resetToOriginal,
}) => {
  return (
    <main>
      <div className="row distribute">
        <button
          value={playerIndex}
          onClick={(event) => deletePlayerCharacter(event)}
        >
          ❌
        </button>
        <button onClick={resetToOriginal}>🔄</button>
      </div>
    </main>
  );
};
