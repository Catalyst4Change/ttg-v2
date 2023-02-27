import React, { useState, useEffect } from "react";
import "../../App.scss";
import { GenerateNPCHealthBar } from "./NPCHealth/GenerateNPCHealthBar";
import "./NPCCard.scss";
import { NPCHealth } from "./NPCHealth/NPCHealth.js";

export const NPCCard = ({ npc, deleteNPC, NPCindex }) => {
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
          <span className="row tooltip">
            <b>{trait.name}</b>
            <span className="tooltip-text">{trait.text}</span>
          </span>
        </div>
      );
    });
  };

  return (
    <main className="npc-card">
      <h3 className="title row space-evenly">
        {type}
        <button
          className="delete-npc-button"
          value={NPCindex}
          onClick={(event) => deleteNPC(event)}
        >
          ❌
        </button>
      </h3>
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
      <div className="row space-evenly">
        <span className="tooltip">
          Power: {power}
          <span className="tooltip-text">
            How many cards this character flips when attacking or taking an
            action.
          </span>
        </span>
        <span className="tooltip">
          Initiative: {initiative}{" "}
          <span className="tooltip-text">
            Initiative determines your turn in battle.
          </span>
        </span>
      </div>
      <p className="flavor column ">{flavorText}</p>
      {combatTraits.length > 0 && (
        <div>
          <p className="column center">Combat Traits:</p>
          <div className="row space-evenly">{displayCombatTraits()}</div>
        </div>
      )}
    </main>
  );
};
