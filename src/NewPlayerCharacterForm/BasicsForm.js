import React from "react";

export const BasicsForm = ({
  playerName,
  setPlayerName,
  charName,
  setCharName,
  charConcept,
  setCharConcept,
  charImage,
  setCharImage,
  advanceFormPage,
}) => {
  return (
    <form className="form-basics column center">
      <h2>Character Basics:</h2>
      <input
        required
        className="form-input"
        type="text"
        placeholder="Player's Name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <input
        required
        className="form-input"
        type="text"
        placeholder="Character's Name"
        value={charName}
        onChange={(e) => setCharName(e.target.value)}
      />
      <textarea
        required
        className="form-input"
        type="text"
        placeholder="Character Concept"
        value={charConcept}
        onChange={(e) => setCharConcept(e.target.value)}
      />
      <input
        className="form-input"
        type="text"
        placeholder="Character Image URL"
        value={charImage}
        onChange={(e) => setCharImage(e.target.value)}
      />
    </form>
  );
};
