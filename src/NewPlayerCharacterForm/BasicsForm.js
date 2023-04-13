import React from "react";
import "../App.scss";

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
  setDeployNewCharacterForm,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    advanceFormPage();
  };

  return (
    <form onSubmit={handleSubmit} className="form-basics column center">
      <h3>The Basics:</h3>
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
      <input
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
        placeholder="Character Image URL (optional)"
        value={charImage}
        onChange={(e) => setCharImage(e.target.value)}
      />
      <div className="row space-evenly max-headroom">
        <button
          className="option-button negative"
          type="button"
          onClick={() => setDeployNewCharacterForm(false)}
        >
          CANCEL
        </button>

        <button className="option-button positive" type="submit">
          NEXT
        </button>
      </div>
    </form>
  );
};
