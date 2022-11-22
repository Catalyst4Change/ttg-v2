import './App.css'
import React, { useState } from 'react'
import { CardContainer } from './CardContainer/CardContainer';

function App() {
  const [playerCharacters, setPlayerCharacters] = useState([])

  /*
  {
    "playerName": "Catalyst",
    "charName": "Chefolopod",
    "charConcept": "Food Bard Squid",
    "charImage": "",
    "attributes": {
        "brawn": 3,
        "agility": 3,
        "intelligence": 1,
        "wit": 2,
        "charm": 2,
        "presence": 2
    },
    "chosenMasteries": [
        "Biology",
        "Engineering"
    ],
    "chosenProficiencies": [
        "Melee",
        "Survival"
    ]
}
  */


  const [numberOfCards, setNumberOfCards] = useState(0)

  const addPlayerCharacter = (newCharacter) => {
    setPlayerCharacters([...playerCharacters, newCharacter])
  }

  const createNewCard = () => {      
    console.log("card");
    setNumberOfCards(numberOfCards => numberOfCards + 1)
  }

  const displayCards = () => {
    for (let index = 0; index < numberOfCards; index++) {
      console.log("numberOfCards", numberOfCards);
      return (
        <CardContainer addPlayerCharacter={addPlayerCharacter} playerCharacter={playerCharacters[index]} />
      )
    }
  }
  
  return (
    <div className="App">
      <button onClick={createNewCard} type='button'>+</button>
      {displayCards()}
    </div>
  )
}

export default App;
