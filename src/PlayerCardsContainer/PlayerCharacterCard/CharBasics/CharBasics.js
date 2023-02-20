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
    <main id="basics" className="column center">
      <div>{playerName}</div>
      <div className="char-image-container column center">
        {!charImage ? (
          <div>No Image Available</div>
        ) : (
          <img src={charImage} alt="character" />
        )}
      </div>
      <h3>{charName}</h3>
      <div>{charConcept}</div>
    </main>
  );
};
