import React from "react";
import { CharAttributes } from "../CharAttributes/CharAttributes";
import { CharBasics } from "../CharBasics/CharBasics";
import { CharHealth } from "../CharHealth/CharHealth";
import { CharStatus } from "../CharStatus/CharStatus";
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
      <CharBasics
        playerName={playerName}
        charName={charName}
        charConcept={charConcept}
        charImage={charImage}
      />
      <CharHealth attributes={attributes} />

      <CharAttributes attributes={attributes} />

      <CharStatus attributes={attributes} />

      {/* masteries */}
      {/* proficiencies */}
      {/* ultimates */}
    </main>
  );
};
