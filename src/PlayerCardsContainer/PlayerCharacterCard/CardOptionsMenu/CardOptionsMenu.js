import React from "react";
import "../../../App.scss";

export const CardOptionsMenu = ({
  playerIndex,
  deletePlayerCharacter,
  resetToOriginal,
}) => {
  return (
    <main id="card-options" className="row space-evenly top-border">
      <button
        value={playerIndex}
        onClick={(event) => deletePlayerCharacter(event)}
      >
        <b>DELETE</b>
      </button>
      <button onClick={resetToOriginal}>
        <b>REFRESH</b>
      </button>
    </main>
  );
};
