import "./App.scss";
import React, { useState } from "react";
import { PlayerCardsContainer } from "./PlayerCardsContainer/PlayerCardsContainer";
import { NPCCardsContainer } from "./NPCCardsContainer/NPCCardsContainer";
import { PCMenu } from "./NavBar/PCMenu";
import { NPCMenu } from "./NavBar/NPCMenu";
import { stockPlayerCharacters } from "./PlayerCardsContainer/StockPlayerCharacters";

function App() {
  const [playerCharacters, setPlayerCharacters] = useState(
    stockPlayerCharacters
  );
  const [NPCs, setNPCs] = useState([]);
  const [deployNewCharacterForm, setDeployNewCharacterForm] = useState(false);
  const [deployNewNPCForm, setDeployNewNPCForm] = useState(false);

  const addNPC = (newNPC) => {
    setNPCs([...NPCs, newNPC]);
  };

  const addPlayerCharacter = (newChar) => {
    setPlayerCharacters([...playerCharacters, newChar]);
    setDeployNewCharacterForm(false);
  };

  const deletePlayerCharacter = (event) => {
    const indexToRemove = parseInt(event.target.value);

    const removeCharacter = playerCharacters.filter((char, index) => {
      if (index !== indexToRemove) {
        return true;
      }
    });
    setPlayerCharacters(removeCharacter);
  };

  return (
    <main id="App">
      {/* header */}
      <section id="navbar">
        <PCMenu setDeployNewCharacterForm={setDeployNewCharacterForm} />
        <NPCMenu addNPC={addNPC} setDeployNewNPCForm={setDeployNewNPCForm} />
      </section>
      <section id="cards-section" className="column">
        <PlayerCardsContainer
          playerCharacters={playerCharacters}
          setPlayerCharacters={setPlayerCharacters}
          addPlayerCharacter={addPlayerCharacter}
          deletePlayerCharacter={deletePlayerCharacter}
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
