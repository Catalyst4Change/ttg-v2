import React from "react";
import "./CharPractices.scss";
import "../../../App.scss";

export const CharPractices = ({ chosenPractices }) => {
  const practices = () => {
    return chosenPractices.map((practice, i) => {
      const lastIndex = () => {
        if (chosenPractices[chosenPractices.length - 1] === practice) {
          return "true";
        }
      };

      return (
        <span className="tooltip" key={i}>
          {practice.name}
          {lastIndex() ? "" : ","}
          <span className="tooltip-text">{practice.text}</span>
        </span>
      );
    });
  };
  return (
    <main className="column center">
      <h3>Practices (+2)</h3>
      <div id="practices">{practices()}</div>
    </main>
  );
};
