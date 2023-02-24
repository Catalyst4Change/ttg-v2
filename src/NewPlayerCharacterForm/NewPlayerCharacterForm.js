import React, { useState } from "react";
import "../App.scss";
import { AttributesForm } from "./AttributesForm";
import { BasicsForm } from "./BasicsForm";
import { MasteriesForm } from "./MasteriesForm";
import { ProficienciesForm } from "./ProficienciesForm";
import { skillList } from "./SkillsList";
import "./NewPlayerCharacterForm.scss";

export const NewPlayerCharacterForm = ({
  addPlayerCharacter,
  setDeployNewCharacterForm,
}) => {
  // form itself
  const [formPage, setFormPage] = useState(0);

  const advanceFormPage = () => {
    setFormPage((formPage) => formPage + 1);
  };

  const retardFormPage = () => {
    setFormPage((formPage) => formPage - 1);
  };

  const submitNewCharacter = () => {
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

  // basics
  const [playerName, setPlayerName] = useState("");
  const [charName, setCharName] = useState("");
  const [charConcept, setCharConcept] = useState("");
  const [charImage, setCharImage] = useState("");
  // attributes
  const [attributes, setAttributes] = useState({
    brawn: 1,
    agility: 1,
    intelligence: 1,
    wit: 1,
    charm: 1,
    presence: 1,
  });
  // skills
  const [skills, setSkills] = useState(
    Object.values(skillList).map((skill) => {
      return Object.values(skill)[0];
    })
  );

  const [skillCheckboxes, setSkillCheckboxes] = useState(
    new Array(skillList.length).fill(false)
  );

  const [chosenMasteries, setChosenMasteries] = useState([]);
  const [chosenProficiencies, setChosenProficiencies] = useState([]);

  return (
    <main id="char-sheet">
      {/* create character */}
      <section id="0" className="column center">
        {formPage === 0 && (
          <BasicsForm
            playerName={playerName}
            setPlayerName={setPlayerName}
            charName={charName}
            setCharName={setCharName}
            charConcept={charConcept}
            setCharConcept={setCharConcept}
            charImage={charImage}
            setCharImage={setCharImage}
            advanceFormPage={advanceFormPage}
            setDeployNewCharacterForm={setDeployNewCharacterForm}
          />
        )}
        {formPage === 1 && (
          <AttributesForm
            attributes={attributes}
            setAttributes={setAttributes}
            advanceFormPage={advanceFormPage}
            retardFormPage={retardFormPage}
            setDeployNewCharacterForm={setDeployNewCharacterForm}
          />
        )}
        {formPage === 2 && (
          <MasteriesForm
            skillCheckboxes={skillCheckboxes}
            setSkillCheckboxes={setSkillCheckboxes}
            chosenMasteries={chosenMasteries}
            setChosenMasteries={setChosenMasteries}
            skills={skills}
            setSkills={setSkills}
            advanceFormPage={advanceFormPage}
            retardFormPage={retardFormPage}
            setDeployNewCharacterForm={setDeployNewCharacterForm}
          />
        )}
        {formPage === 3 && (
          <ProficienciesForm
            chosenMasteries={chosenMasteries}
            chosenProficiencies={chosenProficiencies}
            setChosenProficiencies={setChosenProficiencies}
            skills={skills}
            setSkills={setSkills}
            skillCheckboxes={skillCheckboxes}
            setSkillCheckboxes={setSkillCheckboxes}
            intelligence={attributes.intelligence}
            submitNewCharacter={submitNewCharacter}
            retardFormPage={retardFormPage}
            setDeployNewCharacterForm={setDeployNewCharacterForm}
          />
        )}
      </section>
      {/* <p>anti-joker</p> */}
      {/* <div className="badge anti-joker grey">
        🚫
        <p className="tooltip">
          When Jokers and Anti-Jokers collide, they obliterate each other. Use
          wisely to avoid the chaotic effects of flipping a Joker.
        </p>
      </div> */}
    </main>
  );
};
