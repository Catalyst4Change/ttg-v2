import React, { useState, useEffect } from "react";
import "../../App.scss";
import "./NPCCard.scss";
import { NPCHealth } from "./NPCHealth/NPCHealth.js";

export const NPCCard = ({ npc, NPCs, setNPCs, deleteNPC, NPCindex }) => {
  const {
    type,
    currentHealth,
    maxHealth,
    power,
    initiative,
    combatTraits,
    notes,
    flavorText,
  } = npc;
  const [healthBar, setHealthBar] = useState("❗️");
  console.log(npc.combatTraits);

  const GenerateNPCHealthBar = (health, setHealthBar) => {
    let bar = [];
    for (let i = 0; i < health; i++) {
      bar.push("🔴");
    }
    setHealthBar(bar);
  };

  const subtractHealth = () => {
    if (currentHealth >= 1) {
      const reducedHealth = currentHealth - 1;
      setNPCs(
        NPCs.map((character, i) => {
          if (i === NPCindex) {
            console.log(character, i);
            const updatedCharacter = {
              ...character,
              currentHealth: reducedHealth,
            };
            return updatedCharacter;
          }
          return character;
        })
      );
    }
  };

  const addHealth = () => {
    if (currentHealth < maxHealth) {
      const increasedHealth = currentHealth + 1;
      setNPCs(
        NPCs.map((character, i) => {
          if (i === NPCindex) {
            console.log(character, i);
            const updatedCharacter = {
              ...character,
              currentHealth: increasedHealth,
            };
            return updatedCharacter;
          }
          return character;
        })
      );
    }
  };

  useEffect(() => {
    GenerateNPCHealthBar(currentHealth, setHealthBar);
  }, [currentHealth]);

  const displayCombatTraits = () => {
    console.log(combatTraits);
    return combatTraits.map((trait, i) => {
      const lastIndex = () => {
        if (trait[combatTraits.length - 1] === trait) {
          return "true";
        }
      };
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

  const updateNPCNotes = (event) => {
    const newNotes = event.target.value;
    setNPCs(
      NPCs.map((character, i) => {
        if (i === NPCindex) {
          console.log(character, i);
          const updatedCharacter = {
            ...character,
            notes: newNotes,
          };
          return updatedCharacter;
        }
        return character;
      })
    );
  };

  return (
    <main className="npc-card">
      <h3 className="title row space-evenly">{type}</h3>
      <div className="health">
        {
          <NPCHealth
            maxHealth={maxHealth}
            currentHealth={currentHealth}
            healthBar={healthBar}
            subtractHealth={subtractHealth}
            addHealth={addHealth}
          />
        }
      </div>
      <hr></hr>
      <span className="row center">
        <b>Stats:</b>
      </span>
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
      {combatTraits.length > 0 && (
        <div>
          <p className="column center">
            <b>Combat Traits:</b>
          </p>
          <div className="row space-evenly">{displayCombatTraits()}</div>
        </div>
      )}
      <hr></hr>
      <div className="column center">
        <span className="flavor column ">{flavorText}</span>
        <hr></hr>
        <textarea
          className="npc-notes"
          value={notes}
          placeholder="Notes..."
          onChange={(event) => updateNPCNotes(event)}
        ></textarea>
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
