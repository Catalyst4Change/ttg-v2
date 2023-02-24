import React, { useEffect, useState } from "react";
import { CharAttributes } from "../CharAttributes/CharAttributes";
import { CharBasics } from "../CharBasics/CharBasics";
import { CharHealth } from "../CharHealth/CharHealth";
import { CharStats } from "../CharStats/CharStats";
import "./PlayerCharacterCard.scss";
import "../../../App.scss";
import { CharMasteries } from "../CharMasteries/CharMasteries";
import { CharProficiencies } from "../CharProficiencies/CharProficiencies";
import { CardOptionsMenu } from "../CardOptionsMenu/CardOptionsMenu";
import { GenerateHealthBar } from "../CharHealth/GenerateHealthBar";

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

  useEffect(() => {
    GenerateHealthBar(maxHealth, setHealthBar);
  }, []);

  const [stats, setStatuses] = useState({
    initiative: attributes.presence + attributes.agility,
    dodge: attributes.agility + attributes.wit - 2,
    drive: attributes.wit + attributes.presence,
    crit: attributes.charm,
  });

  const statStepUp = (e) => {
    const { name, value } = e.target;
    const numValue = parseInt(value);
    if (stats[name]) {
      setStatuses({ ...stats, [name]: numValue + 1 });
    }
  };

  const statStepDown = (e) => {
    const { name, value } = e.target;
    const numValue = parseInt(value);
    if (stats[name] > 0) {
      setStatuses({ ...stats, [name]: numValue - 1 });
    }
  };

  const resetToOriginal = () => {
    setCurrentHealth(maxHealth);
    GenerateHealthBar(maxHealth, setHealthBar);
    setStatuses({
      initiative: attributes.presence + attributes.agility,
      dodge: attributes.agility + attributes.wit - 2,
      drive: attributes.wit + attributes.presence,
      crit: attributes.charm,
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

      <div className="health top-border">
        <CharHealth
          maxHealth={maxHealth}
          currentHealth={currentHealth}
          setCurrentHealth={setCurrentHealth}
          healthBar={healthBar}
          setHealthBar={setHealthBar}
        />
      </div>

      <div className="attributes top-border">
        <CharStats
          stats={stats}
          statStepUp={statStepUp}
          statStepDown={statStepDown}
        />
        <CharAttributes attributes={attributes} />
      </div>

      <div className="masteries top-border">
        <CharMasteries chosenMasteries={chosenMasteries} />
      </div>
      <div className="proficiencies ">
        <CharProficiencies chosenProficiencies={chosenProficiencies} />
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
