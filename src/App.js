import "./App.scss";
import React, { useState } from "react";
import { PlayerCardsContainer } from "./PlayerCardsContainer/PlayerCardsContainer";
import { NPCCardsContainer } from "./NPCCardsContainer/NPCCardsContainer";
import { PCMenu } from "./NavBar/PCMenu";
import { NPCMenu } from "./NavBar/NPCMenu";

function App() {
  const [NPCs, setNPCs] = useState([]);
  const addNPC = (newNPC) => {
    setNPCs([...NPCs, newNPC], console.log("app", NPCs));
  };

  const [deployNewCharacterForm, setDeployNewCharacterForm] = useState(false);
  const [deployNewNPCForm, setDeployNewNPCForm] = useState(false);

  return (
    <div id="App">
      {/* header */}
      <div id="pcs-menu-container">
        <PCMenu setDeployNewCharacterForm={setDeployNewCharacterForm} />
      </div>
      <div id="npcs-menu-container">
        <NPCMenu addNPC={addNPC} setDeployNewNPCForm={setDeployNewNPCForm} />
      </div>
      <div id="player-cards-container-container">
        <PlayerCardsContainer
          deployNewCharacterForm={deployNewCharacterForm}
          setDeployNewCharacterForm={setDeployNewCharacterForm}
        />
      </div>
      <div id="npc-cards-container-container">
        <NPCCardsContainer
          addNPC={addNPC}
          NPCs={NPCs}
          setNPCs={setNPCs}
          deployNewNPCForm={deployNewNPCForm}
          setDeployNewNPCForm={setDeployNewNPCForm}
        />
      </div>
    </div>
  );
}

export default App;
