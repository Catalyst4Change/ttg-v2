import React from "react";
import "../../App.css";

export const CardOptionsMenu = ({ playerIndex, deletePlayerCharacter }) => {
  return (
    <main>
      <div className="row distribute">
        <button
          value={playerIndex}
          onClick={(event) => deletePlayerCharacter(event)}
        >
          ❌
        </button>
        <div>🔄</div>
      </div>
    </main>
  );
};
