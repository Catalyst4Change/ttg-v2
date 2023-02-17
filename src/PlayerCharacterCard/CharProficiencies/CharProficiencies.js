import React from "react";
import "./CharProficiencies.scss";
import "../../App.css";

export const CharProficiencies = ({ chosenProficiencies }) => {
  const proficiencies = () => {
    return chosenProficiencies.map((prof, i) => {
      return (
        <div>
          <p key={i}>{prof}</p>
        </div>
      );
    });
  };
  return (
    <main className="column center">
      <h3>Proficiencies (+2)</h3>
      <div id="proficiencies">{proficiencies()}</div>
    </main>
  );
};
