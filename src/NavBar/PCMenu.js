import React from "react";
import "../App.scss";

export const PCMenu = ({ setDeployNewCharacterForm }) => {
  return (
    <main className="navbar">
      <b>Create new:</b>

      <button
        className="option-button sidebar"
        onClick={() => setDeployNewCharacterForm(true)}
        type="button"
      >
        CHARACTER
      </button>
    </main>
  );
};
