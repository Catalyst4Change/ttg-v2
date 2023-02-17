import React from "react";
import "./CharBasics.scss";

export const CharBasics = ({
  playerName,
  charName,
  charConcept,
  charImage,
}) => {
  return (
    <div>
      <span>{playerName}</span>
      <div className="char-image-container column center">
        {!charImage ? <span>No Image Available</span> : <img src={charImage} />}
      </div>
      <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>{charName}</span>
      <p>{charConcept}</p>
    </div>
  );
};
