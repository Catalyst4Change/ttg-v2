import React, { useEffect, useState } from "react";
import "../App.scss";
import "./NewPlayerCharacterForm.scss";
import { NPCCombatTraits } from "../NPCCardsContainer/NPCCombatTraitsList";

export const NewNPCForm = ({ setDeployNewNPCForm, addNPC, NPCs }) => {
  const [type, setType] = useState("");
  const [health, setHealth] = useState(1);
  const [power, setPower] = useState(1);
  const [initiative, setInitiative] = useState(1);
  const [combatTraits, setCombatTraits] = useState([]);
  const [flavorText, setFlavorText] = useState("");
  const [combatTraitsCheckboxes, setCombatTraitsCheckboxes] = useState(
    new Array(NPCCombatTraits.length).fill(false)
  );

  const healthStepUp = (e) => {
    setHealth(health + 1);
  };

  const healthStepDown = (e) => {
    if (health >= 2) {
      setHealth(health - 1);
    }
  };

  const powerStepUp = (e) => {
    setPower(power + 1);
  };

  const powerStepDown = (e) => {
    if (power >= 2) {
      setPower(power - 1);
    }
  };

  const initiativeStepUp = (e) => {
    setInitiative(initiative + 1);
  };

  const initiativeStepDown = (e) => {
    if (initiative >= 2) {
      setInitiative(initiative - 1);
    }
  };

  const displayCombatTraitsSelection = () => {
    return NPCCombatTraits.map((trait, i) => {
      return (
        <div className="combat-trait" key={i}>
          <label className="tooltip">
            <input
              type="checkbox"
              id={i}
              value={trait}
              checked={combatTraitsCheckboxes[i]}
              onChange={(event) => checkCombatTrait(event)}
            />
            {trait.name}
            <p className="tooltip-text">{trait.text}</p>
          </label>
        </div>
      );
    });
  };

  const checkCombatTrait = (event) => {
    const position = parseInt(event.target.id);

    const updatedCombatTraitsCheckboxes = combatTraitsCheckboxes.map(
      (trait, index) => (index === position ? !trait : trait)
    );
    setCombatTraitsCheckboxes(updatedCombatTraitsCheckboxes);
  };

  useEffect(() => {
    addCheckedCombatTraits();
  }, [combatTraitsCheckboxes]);

  const addCheckedCombatTraits = () => {
    const selectedNPCCombatTraits = [];
    combatTraitsCheckboxes.forEach((checkbox, checkboxIndex) => {
      if (combatTraitsCheckboxes[checkboxIndex]) {
        selectedNPCCombatTraits.push(NPCCombatTraits[checkboxIndex]);
      }
    });
    setCombatTraits(selectedNPCCombatTraits);
  };

  const submitNewNPC = (event) => {
    event.preventDefault();
    // addCheckedCombatTraits();

    const newNPC = {
      type: type,
      currentHealth: health,
      maxHealth: health,
      power: power,
      initiative: initiative,
      combatTraits: combatTraits,
      flavorText: flavorText,
    };
    addNPC(newNPC);
  };

  const handleCancel = () => {
    setDeployNewNPCForm(false);
  };

  return (
    <main className="new-form-container column center">
      <h3>New NPC</h3>
      <form onSubmit={(event) => submitNewNPC(event)} className="column center">
        <input
          required
          className="form-input"
          type="text"
          placeholder="Character's Name"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <div className="form-attribute-stepper ">
          <button
            className="stepper-button"
            type="button"
            name="health"
            value={health}
            onClick={healthStepDown}
          >
            🔽
          </button>
          <div>
            <span className="tooltip">
              Health:{" "}
              <span className="tooltip-text">
                How much damage this NPC takes before being deaded.
              </span>
            </span>{" "}
            {health}
          </div>
          <button
            className="stepper-button"
            type="button"
            name="health"
            value={health}
            onClick={healthStepUp}
          >
            🔼
          </button>
        </div>
        <div className="form-attribute-stepper ">
          <button
            className="stepper-button"
            type="button"
            name="power"
            value={power}
            onClick={powerStepDown}
          >
            🔽
          </button>
          <div>
            <span className="tooltip">
              Power:
              <span className="tooltip-text">
                How many cards this NPC flips on an action/attack.
              </span>
            </span>{" "}
            {power}
          </div>
          <button
            className="stepper-button"
            type="button"
            name="power"
            value={power}
            onClick={powerStepUp}
          >
            🔼
          </button>
        </div>
        <div className="form-attribute-stepper ">
          <button
            className="stepper-button"
            type="button"
            name="initiative"
            value={initiative}
            onClick={initiativeStepDown}
          >
            🔽
          </button>
          <div>
            <span className="tooltip">
              Initiative:
              <span className="tooltip-text">
                When this character acts in combat.
              </span>
            </span>{" "}
            {initiative}
          </div>
          <button
            className="stepper-button"
            type="button"
            name="initiative"
            value={initiative}
            onClick={initiativeStepUp}
          >
            🔼
          </button>
        </div>
        <div className="combat-traits-container">
          {displayCombatTraitsSelection()}
        </div>
        <textarea
          className="npc-flavor-text"
          placeholder="Description"
          value={flavorText}
          onChange={(event) => setFlavorText(event.target.value)}
        />
        <p></p>
        <div className="row space-evenly">
          <button type="submit">ADD NPC</button>
          <button onClick={handleCancel}>DONE</button>
        </div>
      </form>
    </main>
  );
};
