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
  deletePlayerCharacter,
  playerName,
  charName,
  charConcept,
  charImage,
  attributes,
  chosenMasteries,
  chosenProficiencies,
}) => {
  const [maxHealth] = useState(attributes.brawn * 3);
  const [currentHealth, setCurrentHealth] = useState(attributes.brawn * 3);
  const [healthBar, setHealthBar] = useState(["❗️"]);
  const notesRef = useRef(""); // {current: ""}

  useEffect(() => {
    GenerateHealthBar(maxHealth, setHealthBar);
  }, []);

  const [stats, setStatuses] = useState({
    initiative: attributes.presence + attributes.agility,
    dodge: attributes.agility + attributes.wit - 2,
    drive: attributes.wit + attributes.presence,
    crit: attributes.charm,
    heroPoints: 0,
  });

  const statStepUp = (e) => {
    const { name, value } = e.target;
    const numValue = parseInt(value);
    setStatuses({ ...stats, [name]: numValue + 1 });
  };

  const statStepDown = (e) => {
    const { name, value } = e.target;
    const numValue = parseInt(value);
    if (stats[name] > 0) {
      setStatuses({ ...stats, [name]: numValue - 1 });
    }
  };

  const handleNotes = (event) => {
    notesRef.current = event.target.value;
  };

  const resetToOriginal = () => {
    setCurrentHealth(maxHealth);
    GenerateHealthBar(maxHealth, setHealthBar);
    setStatuses({
      initiative: attributes.presence + attributes.agility,
      dodge: attributes.agility + attributes.wit - 2,
      drive: attributes.wit + attributes.presence,
      crit: attributes.charm,
      heroPoints: 0,
    });
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
          setHealthBar={setHealthBar}
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
