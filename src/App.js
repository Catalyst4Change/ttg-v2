import "./App.scss";
import React, { useState, useEffect } from "react";
import { PlayerCardsContainer } from "./PlayerCardsContainer/PlayerCardsContainer";
import { NPCCardsContainer } from "./NPCCardsContainer/NPCCardsContainer";
import { PCMenu } from "./NavBar/PCMenu";
import { NPCMenu } from "./NavBar/NPCMenu";
import { stockPlayerCharacters } from "./PlayerCardsContainer/StockPlayerCharacters";

export const App = () => {
  if (!JSON.parse(localStorage.getItem("characters"))) {
    localStorage.setItem("characters", JSON.stringify(stockPlayerCharacters));
  }

  const [playerCharacters, setPlayerCharacters] = useState(
    JSON.parse(localStorage.getItem("characters"))
  );
  const [deployNewCharacterForm, setDeployNewCharacterForm] = useState(false);
  const [NPCs, setNPCs] = useState(JSON.parse(localStorage.getItem("npcs")));
  const [deployNewNPCForm, setDeployNewNPCForm] = useState(false);

  useEffect(() => {
    localStorage.setItem("characters", JSON.stringify(playerCharacters));
    localStorage.setItem("npcs", JSON.stringify(NPCs));
  }, [playerCharacters, NPCs]);

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
        <img
          src="https://ksr-ugc.imgix.net/assets/026/882/491/c474dc36ddd0310a4452832349605ee4_original.png?ixlib=rb-4.0.2&crop=faces&w=1552&h=873&fit=crop&v=1571337733&auto=format&frame=1&q=92&s=5c3d6e29ebb16dc578f23186defd251f"
          alt="Space King's Logo"
        />
        <PCMenu setDeployNewCharacterForm={setDeployNewCharacterForm} />
        <NPCMenu addNPC={addNPC} setDeployNewNPCForm={setDeployNewNPCForm} />
        <div className="creator-credit column center">
          <h3>
            Space Kings is property of{" "}
            <a href="https://supertry.itch.io/">Super∴Try Studios</a>{" "}
          </h3>
          <br />
          <h3>
            Character Tracker created by <br />
            <a className="catalyst" href="http://catalyst.sex">
              CATALYST
            </a>{" "}
          </h3>
        </div>
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
};
