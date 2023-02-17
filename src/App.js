import "./App.css";
import React, { useState } from "react";
import { PlayerCardsContainer } from "./Card/PlayerCardsContainer";

function App() {
  const [numberOfPlayerCards, setNumberOfPlayerCards] = useState(0);

  const createNewCard = () => {
    setNumberOfPlayerCards((numberOfPlayerCards) => numberOfPlayerCards + 1);
  };

  return (
    <div className="App">
      {/* header */}
      {/* create nav */}
      <button onClick={createNewCard} type="button">
        + PC
      </button>
      <PlayerCardsContainer numberOfPlayerCards={numberOfPlayerCards} />
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
