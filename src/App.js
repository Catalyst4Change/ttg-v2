import "./App.css";
import React, { useState } from "react";
import { PlayerCardsContainer } from "./PlayerCardsContainer/PlayerCardsContainer";

function App() {
  return (
    <div className="App">
      {/* header */}
      {/* nav */}
      <PlayerCardsContainer />
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
