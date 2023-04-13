import React from "react";
import "../App.scss";

export const PCMenu = ({ setDeployNewCharacterForm, setDeployNewNPCForm }) => {
  const deployPlayerCharacterForm = () => {
    setDeployNewNPCForm(false);
    setDeployNewCharacterForm(true);
  };

  return (
    <main className="navbar">
      <b>Create new:</b>

      <button
        className="option-button sidebar"
        onClick={deployPlayerCharacterForm}
        type="button"
      >
        CHARACTER
      </button>
    </main>
  );
};
