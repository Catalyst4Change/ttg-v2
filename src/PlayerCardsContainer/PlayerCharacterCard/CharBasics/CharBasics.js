import React from "react";
import "./CharBasics.scss";
import "../../../App.scss";

export const CharBasics = ({
  playerName,
  charName,
  charConcept,
  charImage,
}) => {
  return (
    <main id="basics">
      <div id="char-image-container">
        {!charImage ? (
          <div id="no-image-text">No Image Available</div>
        ) : (
          <img src={charImage} alt="character" />
        )}
      </div>
      <div id="char-info">
        <span>{playerName}</span>
        <h3>{charName}</h3>
        <span>{charConcept}</span>
      </div>
    </main>
  );
};
