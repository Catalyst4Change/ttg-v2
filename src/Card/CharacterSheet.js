import React, { useEffect, useState } from "react";
import "../App.css";
import "./CharacterSheet.scss";
import { CharAttributes } from "./CharAttributes/CharAttributes";
import { CharHealth } from "./CharHealth/CharHealth";
import { CharStatus } from "./CharStatus/CharStatus";

// form presents sections one at a time while filling out
// { formID === formIndex ? ...section... }

export const CharacterSheet = ({ addPlayerCharacter }) => {
  const [formPage, setFormPage] = useState(0);
  console.log(formPage);

  const [playerName, setPlayerName] = useState("");
  const [charName, setCharName] = useState("");
  const [charConcept, setCharConcept] = useState("");
  const [charImage, setCharImage] = useState("");

  const [attributesPoints, setAttributesPoints] = useState(7);
  const [attributes, setAttributes] = useState({
    brawn: 1,
    agility: 1,
    intelligence: 1,
    wit: 1,
    charm: 1,
    presence: 1,
  });

  const attributeStepUp = (e) => {
    const { name, value } = e.target;
    const numValue = parseInt(value);
    if (attributesPoints > 0 && attributes[name] < 4) {
      setAttributes({ ...attributes, [name]: numValue + 1 });
      setAttributesPoints((attributesPoints) => attributesPoints - 1);
    }
  };

  const attributeStepDown = (e) => {
    const { name, value } = e.target;
    const numValue = parseInt(value);
    if (attributes[name] > 1) {
      setAttributes({ ...attributes, [name]: numValue - 1 });
      setAttributesPoints((attributesPoints) => attributesPoints + 1);
    }
  };

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

  const chooseMastery = (e) => {
    const { value } = e.target;
    console.log(value);
    setChosenMasteries([...chosenMasteries, value]);
    setSkills((skills) => skills.filter((skill) => skill !== value));
  };

  const chooseProficiency = (e) => {
    const { value } = e.target;
    console.log(value);
    setChosenProficiencies([...chosenProficiencies, value]);
    setSkills((skills) => skills.filter((skill) => skill !== value));
  };

  const advanceFormPage = () => {
    setFormPage((formPage) => formPage + 1);
  };

  return (
    <section id="char-sheet">
      {/* create character */}
      <form id="0" className="form column">
        {formPage === 0 && (
          <div className="form-basics column">
            <span>Character Basics:</span>
            <input
              className="form-input"
              type="text"
              placeholder="Player's Name"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
            <input
              className="form-input"
              type="text"
              placeholder="Character's Name"
              value={charName}
              onChange={(e) => setCharName(e.target.value)}
            />
            <input
              className="form-input"
              type="text"
              placeholder="Character Concept"
              value={charConcept}
              onChange={(e) => setCharConcept(e.target.value)}
            />
            <input
              className="form-input"
              type="text"
              placeholder="Character Image URL"
              value={charImage}
              onChange={(e) => setCharImage(e.target.value)}
            />
          </div>
        )}
        {formPage === 1 && (
          <div className="column">
            <span>Add {attributesPoints} Points to Attributes:</span>

            <div className="form-attribute-stepper">
              <button
                type="button"
                name="brawn"
                value={attributes.brawn}
                onClick={(e) => attributeStepDown(e)}
              >
                -
              </button>
              <span> Brawn: {attributes.brawn} </span>
              <button
                type="button"
                name="brawn"
                value={attributes.brawn}
                onClick={(e) => attributeStepUp(e)}
              >
                +
              </button>
            </div>

            <div className="form-attribute-stepper">
              <button
                type="button"
                name="agility"
                value={attributes.agility}
                onClick={(e) => attributeStepDown(e)}
              >
                -
              </button>
              <span> Agility: {attributes.agility} </span>
              <button
                type="button"
                name="agility"
                value={attributes.agility}
                onClick={(e) => attributeStepUp(e)}
              >
                +
              </button>
            </div>

            <div className="form-attribute-stepper">
              <button
                type="button"
                name="wit"
                value={attributes.wit}
                onClick={(e) => attributeStepDown(e)}
              >
                -
              </button>
              <span> Wit: {attributes.wit} </span>
              <button
                type="button"
                name="wit"
                value={attributes.wit}
                onClick={(e) => attributeStepUp(e)}
              >
                +
              </button>
            </div>

            <div className="form-attribute-stepper">
              <button
                type="button"
                name="intelligence"
                value={attributes.intelligence}
                onClick={(e) => attributeStepDown(e)}
              >
                -
              </button>
              <span> Intelligence: {attributes.intelligence} </span>
              <button
                type="button"
                name="intelligence"
                value={attributes.intelligence}
                onClick={(e) => attributeStepUp(e)}
              >
                +
              </button>
            </div>

            <div className="form-attribute-stepper">
              <button
                type="button"
                name="charm"
                value={attributes.charm}
                onClick={(e) => attributeStepDown(e)}
              >
                -
              </button>
              <span> Charm: {attributes.charm} </span>
              <button
                type="button"
                name="charm"
                value={attributes.charm}
                onClick={(e) => attributeStepUp(e)}
              >
                +
              </button>
            </div>

            <div className="form-attribute-stepper">
              <button
                type="button"
                name="presence"
                value={attributes.presence}
                onClick={(e) => attributeStepDown(e)}
              >
                -
              </button>
              <span> Presence: {attributes.presence} </span>
              <button
                type="button"
                name="presence"
                value={attributes.presence}
                onClick={(e) => attributeStepUp(e)}
              >
                +
              </button>
            </div>
          </div>
        )}
        {formPage === 2 && (
          <div className="column">
            <span> Choose 2</span>
            <span>Skill Masteries</span>
            {chosenMasteries[0] || (
              <select
                className="form-select"
                onChange={(e) => chooseMastery(e)}
              >
                <option value="">Choose one</option>
                {skills.map((skill, i) => {
                  return (
                    <option key={i} value={skill}>
                      {skill}
                    </option>
                  );
                })}
              </select>
            )}
            {chosenMasteries[1] || (
              <select
                className="form-select"
                onChange={(e) => chooseMastery(e)}
              >
                <option value="">Choose one</option>
                {skills.map((skill, i) => {
                  return (
                    <option key={i} value={skill}>
                      {skill}
                    </option>
                  );
                })}
              </select>
            )}
          </div>
        )}
        {formPage === 3 && (
          <div className="column">
            <span> Choose 2</span>
            <span>Skill Proficiencies</span>
            {chosenProficiencies[0] || (
              <select
                className="form-select"
                onChange={(e) => chooseProficiency(e)}
              >
                <option value="">Choose one</option>
                {skills.map((skill, i) => {
                  return (
                    <option key={i} value={skill}>
                      {skill}
                    </option>
                  );
                })}
              </select>
            )}
            {chosenProficiencies[1] || (
              <select
                className="form-select"
                onChange={(e) => chooseProficiency(e)}
              >
                <option value="">Choose one</option>
                {skills.map((skill, i) => {
                  return (
                    <option key={i} value={skill}>
                      {skill}
                    </option>
                  );
                })}
              </select>
            )}
          </div>
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
            onClick={advanceFormPage}
          >
            DONE
          </button>
        )}

        {/* display character */}

        {formPage === 4 && (
          <section className="character-info column">
            {/* info */}
            <span>{playerName}</span>
            <div className="char-image-container column center">
              {!charImage ? (
                <span>No Image Available</span>
              ) : (
                <img src={charImage} />
              )}
            </div>
            <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>
              {charName}
            </span>
            <span>{charConcept}</span>

            <CharHealth attributes={attributes} />

            <CharAttributes attributes={attributes} />

            <CharStatus attributes={attributes} />
          </section>
        )}
      </form>
      reset button
      <div className="badge anti-joker grey">
        🚫
        <div className="tooltip">
          When Jokers and Anti-Jokers collide, they obliterate each other. Use
          wisely to avoid the chaotic effects of flipping a Joker.
        </div>
      </div>
    </section>
  );
};
