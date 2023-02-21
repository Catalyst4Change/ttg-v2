import React from "react";
import "../App.scss";
import "./NavBar.scss";

export const PCMenu = ({ setDeployNewCharacterForm }) => {
  return (
    <main id="PC-menu" className="navbar center">
      <button onClick={() => setDeployNewCharacterForm(true)} type="button">
        + PC
      </button>
    </main>
  );
};
