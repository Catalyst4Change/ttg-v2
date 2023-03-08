import React from "react";
import "../../../App.scss";

export const CardOptionsMenu = ({
  playerIndex,
  deletePlayerCharacter,
  // resetToOriginal,
}) => {
  return (
    <div id="card-options" className="row space-evenly">
      <button
        className="option-button primary"
        value={playerIndex}
        onClick={(event) => deletePlayerCharacter(event)}
      >
        DELETE
      </button>

      {/* <button onClick={resetToOriginal}>REFRESH</button> */}
    </div>
  );
};
