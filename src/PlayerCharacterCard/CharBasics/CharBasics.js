import React from "react";
import "./CharBasics.scss";

export const CharBasics = ({
  playerName,
  charName,
  charConcept,
  charImage,
}) => {
  return (
    <main id="basics" className="column center ">
      <span>{playerName}</span>
      <div className="char-image-container column center">
        {!charImage ? <span>No Image Available</span> : <img src={charImage} />}
      </div>
      <h3>{charName}</h3>
      <p>{charConcept}</p>
    </main>
  );
};
