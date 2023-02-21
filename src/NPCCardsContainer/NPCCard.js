import React, { useState, useEffect } from "react";
import "../App.scss";
import { GenerateNPCHealthBar } from "./NPCHealth/GenerateNPCHealthBar";
import "./NPCCard.scss";
import { NPCHealth } from "./NPCHealth/NPCHealth.js";

export const NPCCard = ({ npc }) => {
  const { type, health, power, initiative, combatTraits, flavorText } = npc[0];
  const [maxHealth] = useState(health);
  const [currentHealth, setCurrentHealth] = useState(health);
  const [healthBar, setHealthBar] = useState("❗️");

  useEffect(() => {
    GenerateNPCHealthBar(maxHealth, setHealthBar);
  }, []);

  const displayCombatTraits = () => {
    return combatTraits.map((traitObject, i) => {
      const traitArray = Object.values(traitObject);
      const trait = traitArray[0];
      return (
        <div key={i}>
          <p className="row tooltip">
            <b>{trait.name}</b>{" "}
            <span className="tooltip-text">{trait.text}</span>
          </p>
        </div>
      );
    });
  };

  return (
    <main id="npc-card">
      <h3 className="title">{type}</h3>
      <div className="health">
        {
          <NPCHealth
            maxHealth={health}
            currentHealth={currentHealth}
            setCurrentHealth={setCurrentHealth}
            healthBar={healthBar}
            setHealthBar={setHealthBar}
          />
        }
      </div>
      <div className="row distribute">
        <span>Power: {power}</span> <span>Initiative: {initiative}</span>
      </div>
      <p className="flavor column ">{flavorText}</p>
      {combatTraits.length > 0 && (
        <div>
          <p className="column center">Combat Traits:</p>
          <span className="row distribute">{displayCombatTraits()}</span>
        </div>
      )}
    </main>
  );
};
