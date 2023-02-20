import React, { useState, useEffect } from "react";
import "../App.css";
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
      <span className="power">Power: {power}</span>
      <span className="init">Initiative: {initiative}</span>
      <span className="flavor">{flavorText}</span>
      {displayCombatTraits()}
    </main>
  );
};
