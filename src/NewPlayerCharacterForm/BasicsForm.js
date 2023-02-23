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
  setDeployNewCharacterForm,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    advanceFormPage();
  };

  return (
    <form onSubmit={handleSubmit} className="form-basics column center">
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
        placeholder="Character Image URL (optional)"
        value={charImage}
        onChange={(e) => setCharImage(e.target.value)}
      />
      <div className="row distribute">
        <button className="form-button" type="submit">
          NEXT
        </button>

        <button
          className="form-button"
          type="button"
          onClick={() => setDeployNewCharacterForm(false)}
        >
          CANCEL
        </button>
      </div>
    </form>
  );
};
