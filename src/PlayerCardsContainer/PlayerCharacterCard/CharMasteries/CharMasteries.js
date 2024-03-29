import React from "react";
import "./CharMasteries.scss";
import "../../../App.scss";

export const CharMasteries = ({ chosenMasteries }) => {
  const masteries = () => {
    return chosenMasteries.map((mastery, i) => {
      const lastIndex = () => {
        if (chosenMasteries[chosenMasteries.length - 1] === mastery) {
          return "true";
        }
      };

      return (
        <span className="tooltip" key={i}>
          {mastery.name}
          {lastIndex() ? "" : ","}
          <span className="tooltip-text">{mastery.text}</span>
        </span>
      );
    });
  };
  return (
    <main className="column center">
      <h3>Masteries (+4)</h3>
      <div id="masteries">{masteries()}</div>
    </main>
  );
};
