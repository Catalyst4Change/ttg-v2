import React from "react";
import "../App.scss";
import "./NavBar.scss";

export const PCMenu = ({ setDeployNewCharacterForm }) => {
  return (
    <main className="navbar">
      <b>Create new:</b>

      <button
        className="new-character-button"
        onClick={() => setDeployNewCharacterForm(true)}
        type="button"
      >
        CHARACTER
      </button>
    </main>
  );
};
