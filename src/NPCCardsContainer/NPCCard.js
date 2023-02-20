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
    return combatTraits.map((trait, i) => {
      return (
        <div key={i}>
          <p>
            <b>{trait.name}</b>
          </p>
          <span className="tooltip">{trait.text}</span>
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
      <p className="column center">Combat Traits: {displayCombatTraits()}</p>
    </main>
  );
};
