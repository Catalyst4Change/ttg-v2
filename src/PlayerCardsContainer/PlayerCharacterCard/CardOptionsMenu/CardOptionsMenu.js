import React from "react";
import "../../../App.scss";

export const CardOptionsMenu = ({
  playerIndex,
  deletePlayerCharacter,
  resetToOriginal,
}) => {
  console.log("playerIndex", playerIndex);
  return (
    <div id="card-options" className="row space-evenly top-border">
      <button
        value={playerIndex}
        onClick={(event) => deletePlayerCharacter(event)}
      >
        DELETE
      </button>

      <button onClick={resetToOriginal}>REFRESH</button>
    </div>
  );
};
