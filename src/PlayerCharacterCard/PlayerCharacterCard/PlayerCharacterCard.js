import React from "react";
import { CharAttributes } from "../CharAttributes/CharAttributes";
import { CharBasics } from "../CharBasics/CharBasics";
import { CharHealth } from "../CharHealth/CharHealth";
import { CharStats } from "../CharStats/CharStats";
import "./PlayerCharacterCard.scss";
import "../../App.css";

export const PlayerCharacterCard = ({
  playerName,
  charName,
  charConcept,
  charImage,
  attributes,
}) => {
  return (
    <main id={charName} className="character-info column center">
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

      {/* masteries */}
      {/* proficiencies */}
      {/* ultimates */}
    </main>
  );
};
