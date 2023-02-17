import React, { useState } from "react";
import "../App.css";
import { Attributes } from "../CharForm/Attributes";
import { Basics } from "../CharForm/Basics";
import { Masteries } from "../CharForm/Masteries";
import { Proficiencies } from "../CharForm/Proficiencies";
import "./CharacterSheet.scss";

export const CharacterSheet = ({ addPlayerCharacter }) => {
  const [formPage, setFormPage] = useState(0);

  const [playerName, setPlayerName] = useState("");
  const [charName, setCharName] = useState("");
  const [charConcept, setCharConcept] = useState("");
  const [charImage, setCharImage] = useState("");

  const [attributes, setAttributes] = useState({
    brawn: 1,
    agility: 1,
    intelligence: 1,
    wit: 1,
    charm: 1,
    presence: 1,
  });

  const [skills, setSkills] = useState([
    "Athletics",
    "Biology",
    "Computers",
    "Empathy",
    "Engineering",
    "Explosives",
    "Firearms",
    "Investigation",
    "Lying",
    "Melee",
    "Perform",
    "Persuasion",
    "Piloting",
    "Sneaking",
    "Spacewise",
    "Survival",
    "Telekinesis",
    "Telepathy",
  ]);

  const [chosenMasteries, setChosenMasteries] = useState([]);
  const [chosenProficiencies, setChosenProficiencies] = useState([]);

  const advanceFormPage = () => {
    setFormPage((formPage) => formPage + 1);
  };

  const submitNewCharacter = () => {
    advanceFormPage();
    const newChar = {
      playerName: playerName,
      charName: charName,
      charConcept: charConcept,
      charImage: charImage,
      attributes: attributes,
      chosenMasteries: chosenMasteries,
      chosenProficiencies: chosenProficiencies,
    };
    addPlayerCharacter(newChar);
  };

  return (
    <main id="char-sheet">
      {/* create character */}
      <section id="0" className="form column center">
        {formPage === 0 && (
          <Basics
            playerName={playerName}
            setPlayerName={setPlayerName}
            charName={charName}
            setCharName={setCharName}
            charConcept={charConcept}
            setCharConcept={setCharConcept}
            charImage={charImage}
            setCharImage={setCharImage}
            setFormPage={setFormPage}
          />
        )}
        {formPage === 1 && (
          <Attributes attributes={attributes} setAttributes={setAttributes} />
        )}
        {formPage === 2 && (
          <Masteries
            chosenMasteries={chosenMasteries}
            setChosenMasteries={setChosenMasteries}
            skills={skills}
            setSkills={setSkills}
          />
        )}
        {formPage === 3 && (
          <Proficiencies
            chosenProficiencies={chosenProficiencies}
            setChosenProficiencies={setChosenProficiencies}
            skills={skills}
            setSkills={setSkills}
            intelligence={attributes.intelligence}
          />
        )}
        {formPage < 3 && (
          <button
            className="form-button"
            type="button"
            onClick={advanceFormPage}
          >
            NEXT
          </button>
        )}
        {formPage === 3 && (
          <button
            className="form-button"
            type="button"
            onClick={submitNewCharacter}
          >
            DONE
          </button>
        )}

        {formPage === 4 &&
          {
            /* display character */
          }}
      </section>
      <p> reset button</p>
      <div className="badge anti-joker grey">
        🚫
        <p className="tooltip">
          When Jokers and Anti-Jokers collide, they obliterate each other. Use
          wisely to avoid the chaotic effects of flipping a Joker.
        </p>
        <p>use radials for skill choices</p>
        <p>tooltips on ereything</p>
        <p>profs</p>
        <p>masters</p>
      </div>
    </main>
  );
};
