import React, { useState } from "react";
import { CharAttributes } from "../PlayerCardsContainer/PlayerCharacterCard/CharAttributes/CharAttributes";
import { CharBasics } from "../PlayerCardsContainer/PlayerCharacterCard/CharBasics/CharBasics";
import { CharHealth } from "../PlayerCardsContainer/PlayerCharacterCard/CharHealth/CharHealth";
import { CharStats } from "../PlayerCardsContainer/PlayerCharacterCard/CharStats/CharStats";
import "./PlayerCharacterCard.scss";
import "../../../App.scss";
import { CharMasteries } from "../PlayerCardsContainer/PlayerCharacterCard/CharMasteries/CharMasteries";
import { CharProficiencies } from "../PlayerCardsContainer/PlayerCharacterCard/CharProficiencies/CharProficiencies";
import { CardOptionsMenu } from "../PlayerCardsContainer/PlayerCharacterCard/CardOptionsMenu/CardOptionsMenu";

export const IndividualPlayerCharacterCard = ({
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
  const [health, setHealth] = useState(attributes.brawn * 3);
  const [healthBar, setHealthBar] = useState(["🔴", "🟡", "🟢"]);

  const buildHealthBar = () => {
    let red = [];
    let yellow = [];
    let green = [];
    let bar = [];
    for (let i = 0; i < maxHealth / 3; i++) {
      red.push("🔴");
      yellow.push("🟡");
      green.push("🟢");
    }
    bar = red.concat(yellow, green);
    setHealthBar(bar);
  };

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
    setHealth(maxHealth);
    buildHealthBar();
    setStatuses({
      initiative: attributes.presence + attributes.agility,
      dodge: attributes.agility + attributes.wit - 2,
      drive: attributes.wit + attributes.presence,
      crit: attributes.charm,
    });
  };

  return (
    <main id={charName} className="character-info">
      <div className="basics">
        <CharBasics
          playerName={playerName}
          charName={charName}
          charConcept={charConcept}
          charImage={charImage}
        />
      </div>

      <div className="health">
        <CharHealth
          maxHealth={maxHealth}
          health={health}
          setHealth={setHealth}
          buildHealthBar={buildHealthBar}
          healthBar={healthBar}
          setHealthBar={setHealthBar}
        />
      </div>

      <div className="attributes">
        <CharAttributes attributes={attributes} />
      </div>

      <div className="stats">
        <CharStats
          stats={stats}
          statStepUp={statStepUp}
          statStepDown={statStepDown}
        />
      </div>

      <div className="masteries">
        <CharMasteries chosenMasteries={chosenMasteries} />
      </div>

      <div className="proficiencies">
        <CharProficiencies chosenProficiencies={chosenProficiencies} />
      </div>

      <div className="card-options">
        <CardOptionsMenu
          playerIndex={playerIndex}
          deletePlayerCharacter={deletePlayerCharacter}
          resetToOriginal={resetToOriginal}
          playerName={playerName}
          charName={charName}
          charConcept={charConcept}
          charImage={charImage}
          attributes={attributes}
          chosenMasteries={chosenMasteries}
          chosenProficiencies={chosenProficiencies}
        />
      </div>
      {/* ultimates */}
    </main>
  );
};
