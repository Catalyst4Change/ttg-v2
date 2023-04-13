import "./App.scss";
import React, { useState, useEffect } from "react";
import { PlayerCardsContainer } from "./PlayerCardsContainer/PlayerCardsContainer";
import { NPCCardsContainer } from "./NPCCardsContainer/NPCCardsContainer";
import { PCMenu } from "./NavBar/PCMenu";
import { NPCMenu } from "./NavBar/NPCMenu";
import { stockPlayerCharacters } from "./PlayerCardsContainer/StockPlayerCharacters";
import useMediaQuery from "./Components/MediaQuery";
import { HostScreen } from "./HostScreen/HostScreen";

export const App = () => {
  if (
    !JSON.parse(localStorage.getItem("characters")) ||
    JSON.parse(localStorage.getItem("characters")).length === 0
  ) {
    localStorage.setItem("characters", JSON.stringify(stockPlayerCharacters));
  }

  const [playerCharacters, setPlayerCharacters] = useState(
    JSON.parse(localStorage.getItem("characters"))
  );
  const [deployNewCharacterForm, setDeployNewCharacterForm] = useState(false);
  const [NPCs, setNPCs] = useState(
    JSON.parse(localStorage.getItem("npcs")) || []
  );
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
      {useMediaQuery("(min-width: 700px)") ? (
        <HostScreen
          playerCharacters={playerCharacters}
          setPlayerCharacters={setPlayerCharacters}
          NPCs={NPCs}
          setNPCs={setNPCs}
          addNPC={addNPC}
          deployNewCharacterForm={deployNewCharacterForm}
          deployNewNPCForm={deployNewNPCForm}
          setDeployNewNPCForm={setDeployNewNPCForm}
          addPlayerCharacter={addPlayerCharacter}
          deletePlayerCharacter={deletePlayerCharacter}
        />
      ) : (
        <h1>phone</h1>
      )}
    </main>
  );
};
