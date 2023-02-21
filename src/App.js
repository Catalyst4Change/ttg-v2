import "./App.scss";
import React, { useState } from "react";
import { PlayerCardsContainer } from "./PlayerCardsContainer/PlayerCardsContainer";
import { NPCCardsContainer } from "./NPCCardsContainer/NPCCardsContainer";
import { PCMenu } from "./NavBar/PCMenu";
import { NPCMenu } from "./NavBar/NPCMenu";

function App() {
  const [NPCs, setNPCs] = useState([]);
  const addNPC = (newNPC) => {
    setNPCs([...NPCs, newNPC]);
  };

  const [deployNewCharacterForm, setDeployNewCharacterForm] = useState(false);

  return (
    <div id="App">
      {/* header */}
      <div id="pcs-menu-container">
        <PCMenu setDeployNewCharacterForm={setDeployNewCharacterForm} />
      </div>
      <div id="npcs-menu-container">
        <NPCMenu addNPC={addNPC} />
      </div>
      <div id="player-cards-container-container">
        <PlayerCardsContainer
          deployNewCharacterForm={deployNewCharacterForm}
          setDeployNewCharacterForm={setDeployNewCharacterForm}
        />
      </div>
      <div id="npc-cards-container-container">
        <NPCCardsContainer NPCs={NPCs} setNPCs={setNPCs} />
      </div>
    </div>
  );
}

export default App;
