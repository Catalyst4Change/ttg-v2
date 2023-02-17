import React from "react";
import "../../App.css";
import "./CharMasteries.scss";

export const CharMasteries = ({ chosenMasteries }) => {
  const masteries = () => {
    return chosenMasteries.map((mastery, i) => {
      return (
        <div>
          <p key={i}>{mastery}</p>
        </div>
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
