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
    <main id="App">
      {/* header */}
      <section id="navbar">
        <PCMenu setDeployNewCharacterForm={setDeployNewCharacterForm} />
        <NPCMenu addNPC={addNPC} setDeployNewNPCForm={setDeployNewNPCForm} />
      </section>
      <section id="cards-section" className="column">
        <PlayerCardsContainer
          deployNewCharacterForm={deployNewCharacterForm}
          setDeployNewCharacterForm={setDeployNewCharacterForm}
        />
        <NPCCardsContainer
          addNPC={addNPC}
          NPCs={NPCs}
          setNPCs={setNPCs}
          deployNewNPCForm={deployNewNPCForm}
          setDeployNewNPCForm={setDeployNewNPCForm}
        />
      </section>
    </main>
  );
}

export default App;
