import React, { useState } from "react";
import "../App.css";
import "./NPCCard.scss";

export const NPCCard = ({ npc }) => {
  const { type, health, power, initiative, combatTraits, flavorText } = npc[0];
  const displayCombatTraits = () => {
    return combatTraits.map((trait, i) => {
      console.log(combatTraits);
      return (
        <div>
          <p className="trait">
            <b>{trait.name}</b>
          </p>
          {/* <p>{trait.text}</p> */}
        </div>
      );
    });
  };
  return (
    <main id="npc-card">
      <h3 className="title">{type}</h3>
      <span className="health">Health: {health}</span>
      <span className="power">Power: {power}</span>
      <span className="init">Initiative: {initiative}</span>
      <span className="flavor">{flavorText}</span>
      {displayCombatTraits()}
    </main>
  );
};
