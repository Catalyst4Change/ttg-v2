import "./App.css";
import React, { useState } from "react";
import { PlayerCardsContainer } from "./PlayerCardsContainer/PlayerCardsContainer";
import { NPCCardsContainer } from "./NPCCardsContainer/NPCCardsContainer";

function App() {
  return (
    <div className="App">
      {/* header */}
      {/* nav */}
      <PlayerCardsContainer />
      <NPCCardsContainer />
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
