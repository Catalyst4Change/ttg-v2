import React from "react";
import { CharAttributes } from "../CharAttributes/CharAttributes";
import { CharBasics } from "../CharBasics/CharBasics";
import { CharHealth } from "../CharHealth/CharHealth";
import { CharStats } from "../CharStats/CharStats";
import "./PlayerCharacterCard.scss";
import "../../App.css";
import { CharMasteries } from "../CharMasteries/CharMasteries";
import { CharProficiencies } from "../CharProficiencies/CharProficiencies";
import { CardOptionsMenu } from "../CardOptionsMenu/CardOptionsMenu";

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
  return (
    <main id={charName} className="character-info">
      <div className="card-options">
        <CardOptionsMenu
          playerIndex={playerIndex}
          deletePlayerCharacter={deletePlayerCharacter}
        />
      </div>
      <div className="basics">
        <CharBasics
          playerName={playerName}
          charName={charName}
          charConcept={charConcept}
          charImage={charImage}
        />
      </div>
      <div className="health">
        <CharHealth attributes={attributes} />
      </div>
      <div className="attributes">
        <CharAttributes attributes={attributes} />
      </div>
      <div className="stats">
        <CharStats attributes={attributes} />
      </div>
      <div className="masteries">
        <CharMasteries chosenMasteries={chosenMasteries} />
      </div>

      <div className="proficiencies">
        <CharProficiencies chosenProficiencies={chosenProficiencies} />{" "}
      </div>

      {/* ultimates */}
    </main>
  );
};
