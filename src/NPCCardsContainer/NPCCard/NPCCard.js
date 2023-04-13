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
  const [healthBar, setHealthBar] = useState(["❗️"]);

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
    return combatTraits.map((trait, i) => {
      const lastIndex = () => {
        if (i === combatTraits.length - 1) {
          return "true";
        }
      };
      return (
        <div key={i}>
          <p className="row tooltip">
            {trait.name}
            {lastIndex() ? "" : ","}
            <span className="tooltip-text">{trait.text}</span>
          </p>
        </div>
      );
    });
  };

  const updateNPCNotes = (event) => {
    const updatedNotes = event.target.value;
    setNPCs(
      NPCs.map((character, i) => {
        if (i === NPCindex) {
          const updatedCharacter = {
            ...character,
            notes: updatedNotes,
          };
          return updatedCharacter;
        }
        return character;
      })
    );
  };

  return (
    <main className="npc-card column center">
      <h2 className="title">{type}</h2>
      {
        <NPCHealth
          maxHealth={maxHealth}
          currentHealth={currentHealth}
          healthBar={healthBar}
          subtractHealth={subtractHealth}
          addHealth={addHealth}
        />
      }
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
      <span className="flavor column center">{flavorText}</span>
      <hr></hr>

      <form className="notes-area column center">
        <textarea
          value={notes}
          className="npc-notes"
          placeholder="Notes..."
          onChange={(event) => updateNPCNotes(event)}
        ></textarea>
      </form>

      <button
        className="option-button secondary"
        value={NPCindex}
        onClick={(event) => deleteNPC(event)}
      >
        DELETE
      </button>
    </main>
  );
};
