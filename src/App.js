import "./App.scss";
import React, { useState } from "react";
import { PlayerCardsContainer } from "./PlayerCardsContainer/PlayerCardsContainer";
import { NPCCardsContainer } from "./NPCCardsContainer/NPCCardsContainer";
import { PCMenu } from "./NavBar/PCMenu";
import { NPCMenu } from "./NavBar/NPCMenu";

function App() {
  const [deployNewCharacterForm, setDeployNewCharacterForm] = useState(false);

  return (
    <div id="App">
      {/* header */}
      <div id="pcs-menu-container">
        <PCMenu setDeployNewCharacterForm={setDeployNewCharacterForm} />
      </div>
      <div id="npcs-menu-container">
        <NPCMenu />
      </div>
      <div id="player-cards-container-container">
        <PlayerCardsContainer
          deployNewCharacterForm={deployNewCharacterForm}
          setDeployNewCharacterForm={setDeployNewCharacterForm}
        />
      </div>
      <div id="npc-cards-container-container">
        <NPCCardsContainer />
      </div>
    </div>
  );
}

export default App;

/*
playerName,
charName,
charConcept,
charImage,
attributes,
chosenMasteries,
chosenProficiencies,
*/
