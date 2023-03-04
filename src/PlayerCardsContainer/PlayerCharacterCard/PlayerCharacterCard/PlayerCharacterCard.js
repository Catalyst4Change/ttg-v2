import React, { useEffect, useState, useRef, Children } from "react";
import { CharAttributes } from "../CharAttributes/CharAttributes";
import { CharBasics } from "../CharBasics/CharBasics";
import { CharHealth } from "../CharHealth/CharHealth";
import { CharStats } from "../CharStats/CharStats";
import { CharMasteries } from "../CharMasteries/CharMasteries";
import { CharProficiencies } from "../CharProficiencies/CharProficiencies";
import { CardOptionsMenu } from "../CardOptionsMenu/CardOptionsMenu";
import { GenerateHealthBar } from "../CharHealth/GenerateHealthBar";
import "./PlayerCharacterCard.scss";
import "../../../App.scss";

export const PlayerCharacterCard = ({
  playerIndex,
  character,
  playerCharacters,
  setPlayerCharacters,
  deletePlayerCharacter,
}) => {
  const {
    playerName,
    charName,
    charConcept,
    charImage,
    maxHealth,
    currentHealth,
    healthBar,
    notes,
    antiJoker,
    attributes,
    stats,
    chosenMasteries,
    chosenProficiencies,
  } = character;

  const initializePlayerCharacter = () => {
    // Create a copy of the original state
    let modifiedCharacters = playerCharacters;

    playerCharacters.reduce((acc, character, i) => {
      if (i === playerIndex) {
        const newInitiative = attributes.presence + attributes.agility;
        const newCrit = attributes.charm;
        const newDodge = attributes.agility + attributes.wit - 2;
        const newDrive = attributes.wit + attributes.presence;
        const newMaxHealth = attributes.brawn * 3;

        character.currentHealth = newMaxHealth;
        character.maxHealth = newMaxHealth;
        character.healthBar = GenerateHealthBar(newMaxHealth);
        character.stats = {
          ...stats,
          initiative: newInitiative,
          crit: newCrit,
          dodge: newDodge,
          drive: newDrive,
        };

        acc.push(character);
        modifiedCharacters = acc;
      } else {
        acc.push(character);
        modifiedCharacters = acc;
      }

      return acc;
    }, []);

    setPlayerCharacters(modifiedCharacters);
  };

  useEffect(() => {
    initializePlayerCharacter();
  }, []);

  const updateCharacterStats = (statToChange, newValue) => {
    setPlayerCharacters(
      playerCharacters.map((character, i) => {
        if (i === playerIndex) {
          const updatedCharacter = {
            ...character,
            stats: {
              ...stats,
              [statToChange]: newValue,
            },
          };
          return updatedCharacter;
        }
        return character;
      })
    );
  };

  const statStepUp = (e) => {
    const { name, value } = e.target;
    const numValue = parseInt(value) + 1;
    updateCharacterStats(name, numValue);
  };

  const statStepDown = (e) => {
    const { name, value } = e.target;
    const numValue = parseInt(value) - 1;
    if (value > 0) {
      updateCharacterStats(name, numValue);
    }
  };

  const toggleAntiJoker = () => {
    setPlayerCharacters(
      playerCharacters.map((character, i) => {
        if (i === playerIndex) {
          const updatedCharacter = {
            ...character,
            antiJoker: !antiJoker,
          };
          return updatedCharacter;
        }
        return character;
      })
    );
  };

  const updateNotes = (e) => {
    const updatedNotes = e.target.value;
    setPlayerCharacters(
      playerCharacters.map((character, i) => {
        if (i === playerIndex) {
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

  const subtractHealth = () => {
    const lessOne = healthBar.slice(0, -1);

    if (currentHealth >= 1) {
      setPlayerCharacters(
        playerCharacters.map((character, i) => {
          if (i === playerIndex) {
            const updatedCharacter = {
              ...character,
              currentHealth: currentHealth - 1,
              healthBar: lessOne,
            };
            return updatedCharacter;
          }
          return character;
        })
      );
    }
  };

  const healthRatio = (currentHealth / maxHealth).toFixed(2);

  const addHealth = () => {
    if (currentHealth < maxHealth) {
      const emoji = () => {
        if (healthRatio < 0.33) {
          return "🔴";
        } else if (healthRatio >= 0.33 && healthRatio <= 0.66) {
          return "🟡";
        } else if (healthRatio >= 0.67) {
          return "🟢";
        }
      };

      let healthBarCopy = healthBar;
      healthBarCopy.push(emoji());

      setPlayerCharacters(
        playerCharacters.map((character, i) => {
          if (i === playerIndex) {
            const updatedCharacter = {
              ...character,
              currentHealth: currentHealth + 1,
              healthBar: healthBarCopy,
            };
            return updatedCharacter;
          }
          return character;
        })
      );
    }
  };

  const resetToOriginal = () => {
    // setCurrentHealth(maxHealth);
    // GenerateHealthBar(maxHealth, setHealthBar);
    // setStatuses({
    //   initiative: attributes.presence + attributes.agility,
    //   dodge: attributes.agility + attributes.wit - 2,
    //   drive: attributes.wit + attributes.presence,
    //   crit: attributes.charm,
    //   heroPoints: 0,
    // });
  };

  return (
    <main className="character-card">
      <div className="basics">
        <CharBasics
          playerName={playerName}
          charName={charName}
          charConcept={charConcept}
          charImage={charImage}
        />
      </div>
      <hr></hr>
      <div className="health">
        <CharHealth
          maxHealth={maxHealth}
          currentHealth={currentHealth}
          healthBar={healthBar}
          subtractHealth={subtractHealth}
          addHealth={addHealth}
          healthRatio={healthRatio}
        />
      </div>
      <hr></hr>
      <div className="attributes">
        <CharStats
          stats={stats}
          statStepUp={statStepUp}
          statStepDown={statStepDown}
          antiJoker={antiJoker}
          toggleAntiJoker={toggleAntiJoker}
        />
        <CharAttributes attributes={attributes} />
      </div>
      <hr></hr>
      <div className="masteries">
        <CharMasteries chosenMasteries={chosenMasteries} />
      </div>
      <div className="proficiencies ">
        <CharProficiencies chosenProficiencies={chosenProficiencies} />
      </div>
      <hr></hr>
      <div className="notes-area">
        <textarea
          value={notes}
          className="char-notes-text"
          placeholder="Notes..."
          onChange={(event) => updateNotes(event)}
        ></textarea>
      </div>

      <div className="card-options">
        <CardOptionsMenu
          playerIndex={playerIndex}
          deletePlayerCharacter={deletePlayerCharacter}
          resetToOriginal={resetToOriginal}
        />
      </div>
      {/* ultimates */}
    </main>
  );
};
