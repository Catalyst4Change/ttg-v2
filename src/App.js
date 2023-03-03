import "./App.scss";
import React, { useState, useEffect } from "react";
import { PlayerCardsContainer } from "./PlayerCardsContainer/PlayerCardsContainer";
import { NPCCardsContainer } from "./NPCCardsContainer/NPCCardsContainer";
import { PCMenu } from "./NavBar/PCMenu";
import { NPCMenu } from "./NavBar/NPCMenu";
import { stockPlayerCharacters } from "./PlayerCardsContainer/StockPlayerCharacters";
import { GenerateHealthBar } from "./PlayerCardsContainer/PlayerCharacterCard/CharHealth/GenerateHealthBar";

function App() {
  const [playerCharacters, setPlayerCharacters] = useState([]);
  const [deployNewCharacterForm, setDeployNewCharacterForm] = useState(false);
  const [NPCs, setNPCs] = useState([]);
  const [deployNewNPCForm, setDeployNewNPCForm] = useState(false);

  const initializePlayerCharacters = () => {
    // Create a copy of the original state
    console.log("stockPlayerCharacters", stockPlayerCharacters);
    let modifiedCharacters = stockPlayerCharacters;
    console.log("modifiedCharacters", modifiedCharacters);

    stockPlayerCharacters.reduce((acc, character, i) => {
      console.log(character);
      const { attributes, stats } = character;

      const newInitiative = attributes.presence + attributes.agility;
      const newCrit = attributes.charm;
      const newDodge = attributes.agility + attributes.wit - 2;
      const newDrive = attributes.wit + attributes.presence;
      const newMaxHealth = attributes.brawn * 3;

      // Find the object you want to modify and update it

      character.currentHealth = newMaxHealth;
      character.maxHealth = newMaxHealth;
      character.healthBar = [GenerateHealthBar(newMaxHealth)];
      character.stats = {
        ...stats,
        initiative: newInitiative,
        crit: newCrit,
        dodge: newDodge,
        drive: newDrive,
      };

      acc.push(character);
      modifiedCharacters = acc;

      return acc;
    }, []);

    setPlayerCharacters(modifiedCharacters);
  };

  useEffect(() => {
    initializePlayerCharacters();
    setPlayerCharacters(stockPlayerCharacters);
  }, [stockPlayerCharacters]);

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
