import React, { useState } from "react";
import "../App.scss";
import { AttributesForm } from "./AttributesForm";
import { BasicsForm } from "./BasicsForm";
import { MasteriesForm } from "./MasteriesForm";
import { PracticesForm } from "./PracticesForm";
import { skillList } from "./SkillsList";
import "./NewPlayerCharacterForm.scss";

export const NewPlayerCharacterForm = ({
  addPlayerCharacter,
  setDeployNewCharacterForm,
  playerCharacters,
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
      id: playerCharacters.length + 1,
      playerName: playerName,
      charName: charName,
      charConcept: charConcept,
      charImage: charImage,
      maxHealth: 0,
      currentHealth: 0,
      healthBar: ["❗️"],
      currentStatus: "Healthy",
      notes: "",
      antiJoker: false,
      attributes: attributes,
      stats: {
        initiative: 0,
        dodge: 0,
        drive: 0,
        crit: 0,
        heroPoints: 0,
      },
      chosenMasteries: chosenMasteries,
      chosenPractices: chosenPractices,
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
  const [chosenPractices, setChosenPractices] = useState([]);

  return (
    <main className="new-form-container">
      <section id="0" className="new-form column center">
        <h2>New Player Character</h2>
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
          <PracticesForm
            chosenMasteries={chosenMasteries}
            chosenPractices={chosenPractices}
            setChosenPractices={setChosenPractices}
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
    </main>
  );
};
