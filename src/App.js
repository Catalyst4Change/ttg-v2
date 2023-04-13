import "./App.scss";
import React, { useState, useEffect } from "react";
import { stockPlayerCharacters } from "./PlayerCardsContainer/StockPlayerCharacters";
import useMediaQuery from "./Components/MediaQuery";
import { HostScreen } from "./HostScreen/HostScreen";
import { PlayerScreen } from "./PlayerScreen/PlayerScreen";

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
    setPlayerCharacters([newChar, ...playerCharacters]);
    setDeployNewCharacterForm(false);
  };

  const deletePlayerCharacter = (event) => {
    console.log(event);
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
          setDeployNewCharacterForm={setDeployNewCharacterForm}
          deployNewNPCForm={deployNewNPCForm}
          setDeployNewNPCForm={setDeployNewNPCForm}
          addPlayerCharacter={addPlayerCharacter}
          deletePlayerCharacter={deletePlayerCharacter}
        />
      ) : (
        <PlayerScreen
          addPlayerCharacter={addPlayerCharacter}
          playerCharacters={playerCharacters}
          setPlayerCharacters={setPlayerCharacters}
          deletePlayerCharacter={deletePlayerCharacter}
        />
      )}
    </main>
  );
};
