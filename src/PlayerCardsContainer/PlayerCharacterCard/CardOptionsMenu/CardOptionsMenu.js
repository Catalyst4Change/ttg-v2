import React from "react";
import "../../../App.scss";

export const CardOptionsMenu = ({
  playerIndex,
  deletePlayerCharacter,
  resetToOriginal,
}) => {
  return (
    <main id="card-options" className="row distribute top-border">
      <button
        value={playerIndex}
        onClick={(event) => deletePlayerCharacter(event)}
      >
        DELETE
      </button>
      <button onClick={resetToOriginal}>REFRESH</button>
    </main>
  );
};
