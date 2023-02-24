import React from "react";
import "./CharProficiencies.scss";
import "../../../App.scss";

export const CharProficiencies = ({ chosenProficiencies }) => {
  const proficiencies = () => {
    return chosenProficiencies.map((prof, i) => {
      return (
        <span className="tooltip" key={i}>
          {prof.name}
          <span className="tooltip-text">{prof.text}</span>
        </span>
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
