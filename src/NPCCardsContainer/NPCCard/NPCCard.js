import React, { useState, useEffect } from "react";
import "../../App.scss";
import "./NPCCard.scss";
import { NPCHealth } from "./NPCHealth/NPCHealth.js";

export const NPCCard = ({ npc, deleteNPC, NPCindex }) => {
  const { type, health, power, initiative, combatTraits, flavorText } = npc[0];
  const [maxHealth] = useState(health);
  const [currentHealth, setCurrentHealth] = useState(health);
  const [healthBar, setHealthBar] = useState("❗️");

  const GenerateNPCHealthBar = (health, setHealthBar) => {
    let bar = [];
    for (let i = 0; i < health; i++) {
      bar.push("🔴");
    }
    setHealthBar(bar);
  };

  useEffect(() => {
    GenerateNPCHealthBar(health, setHealthBar);
  }, []);

  const displayCombatTraits = () => {
    return combatTraits.map((traitObject, i) => {
      const traitArray = Object.values(traitObject);
      const lastIndex = () => {
        if (combatTraits[combatTraits.length - 1] === traitObject) {
          return "true";
        }
      };
      const trait = traitArray[0];
      return (
        <div key={i}>
          <span className="row tooltip">
            {trait.name}
            {lastIndex() ? "" : ","}
            <span className="tooltip-text">{trait.text}</span>
          </span>
        </div>
      );
    });
  };

  return (
    <main className="npc-card">
      <h3 className="title row space-evenly">{type}</h3>
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
          <p className="column center">
            <b>Combat Traits:</b>
          </p>
          <div className="row space-evenly">{displayCombatTraits()}</div>
        </div>
      )}
      <div className="top-border column center">
        <button
          className="delete-npc-button"
          value={NPCindex}
          onClick={(event) => deleteNPC(event)}
        >
          DELETE
        </button>
      </div>
    </main>
  );
};
