import React, { useEffect, useState, useRef } from "react";
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
    healthBar,
    currentStatus,
    heroPoints,
    notes,
    antiJoker,
    attributes,
    stats,
    chosenMasteries,
    chosenProficiencies,
  } = character;

  const { brawn, agility, intelligence, wit, charm, presence } = attributes;

  const { initiative, dodge, drive, crit } = stats;

  // const [maxHealth] = useState(attributes.brawn * 3);
  const [currentHealth, setCurrentHealth] = useState(attributes.brawn * 3);
  const notesRef = useRef(notes);

  useEffect(() => {
    const newInitiative = attributes.presence + attributes.agility;
    const newCrit = attributes.charm;
    const newDodge = attributes.agility + attributes.wit - 2;
    const newDrive = attributes.wit + attributes.presence;
    const newMaxHealth = brawn * 3;
    setPlayerCharacters(
      playerCharacters.map((character, i) => {
        if (i === playerIndex) {
          const updatedCharacter = {
            ...character,
            maxHealth: newMaxHealth,
            healthBar: [GenerateHealthBar(newMaxHealth)],
            stats: {
              initiative: newInitiative,
              crit: newCrit,
              dodge: newDodge,
              drive: newDrive,
              heroPoints: 0,
            },
          };
          return updatedCharacter;
        }
      })
    );
  }, []);

  const statStepUp = (e) => {
    const { name, value } = e.target;
    const numValue = parseInt(value);
    // setStatuses({ ...stats, [name]: numValue + 1 });
  };

  const statStepDown = (e) => {
    const { name, value } = e.target;
    const numValue = parseInt(value);
    if (stats[name] > 0) {
      // setStatuses({ ...stats, [name]: numValue - 1 });
    }
  };

  const handleNotes = (event) => {
    notesRef.current = event.target.value;
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
          setCurrentHealth={setCurrentHealth}
          healthBar={healthBar}
          // setHealthBar={setHealthBar}
        />
      </div>
      <hr></hr>
      <div className="attributes">
        <CharStats
          stats={stats}
          statStepUp={statStepUp}
          statStepDown={statStepDown}
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
          className="char-notes-text"
          ref={notesRef}
          placeholder="Notes..."
          onChange={(event) => handleNotes(event)}
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
