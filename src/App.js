import "./App.css";
import React, { useState } from "react";
import { CardContainer } from "./Card/CardContainer";

function App() {
  const [numberOfCards, setNumberOfCards] = useState(0);

  const createNewCard = () => {
    setNumberOfCards((numberOfCards) => numberOfCards + 1);
  };

  return (
    <div className="App">
      {/* header */}
      {/* create nav */}
      <button onClick={createNewCard} type="button">
        + PC
      </button>
      <CardContainer numberOfCards={numberOfCards} />
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
