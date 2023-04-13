import React, { useEffect, useState } from "react";
import "../App.scss";
import "./NewPlayerCharacterForm.scss";

export const PracticesForm = ({
  chosenMasteries,
  skills,
  skillCheckboxes,
  setSkillCheckboxes,
  chosenPractices,
  setChosenPractices,
  intelligence,
  submitNewCharacter,
  retardFormPage,
  setDeployNewCharacterForm,
}) => {
  const availablePractices = intelligence + 2;
  const remainingPractices = () => {
    return availablePractices - chosenPractices.length;
  };
  const [unavailableSkills] = useState(skillCheckboxes);
  const [submissionError, setSubmissionError] = useState(false);

  const displayPracticesSelection = () => {
    return skills.map((skill, i) => {
      return (
        <div className="checkbox-selection" key={i}>
          <label className="tooltip">
            <input
              type="checkbox"
              id={i}
              value={skill}
              checked={skillCheckboxes[i]}
              disabled={unavailableSkills[i]}
              onChange={(event) => checkSkill(event)}
            />{" "}
            {skill.name}
            <span className="tooltip-text">{skill.text}</span>
          </label>
        </div>
      );
    });
  };

  const cancelNewCharacter = () => {
    setDeployNewCharacterForm(false);
  };

  const checkSkill = (event) => {
    const position = parseInt(event.target.id);
    let updatedSkillCheckboxes = [];

    if (chosenPractices.length < availablePractices) {
      updatedSkillCheckboxes = skillCheckboxes.map((trait, index) =>
        index === position ? !trait : trait
      );
    } else if (chosenPractices.length >= availablePractices) {
      updatedSkillCheckboxes = skillCheckboxes.map((trait, index) =>
        index === position ? false : trait
      );
    }
    setSkillCheckboxes(updatedSkillCheckboxes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (chosenPractices.length >= availablePractices) {
      submitNewCharacter();
    } else {
      setSubmissionError(true);
    }
  };

  useEffect(() => {
    addCheckedSkill();
  }, [skillCheckboxes]);

  const addCheckedSkill = () => {
    const selectedSkills = [];
    skillCheckboxes.forEach((checkbox, checkboxIndex) => {
      if (
        skillCheckboxes[checkboxIndex] &&
        !chosenMasteries.includes(skills[checkboxIndex])
      ) {
        selectedSkills.push(skills[checkboxIndex]);
      }
    });
    setChosenPractices(selectedSkills);
  };

  return (
    <div className="column center">
      <h2>Choose {remainingPractices()} Skill Practices</h2>
      <p className="center">
        Practices are skills you dabble in. They give you <b>two</b> points
        toward a related action.
      </p>
      <div className="choose-skills">{displayPracticesSelection()}</div>
      <div className="row space-evenly">
        <button
          className="option-button neutral"
          type="button"
          onClick={retardFormPage}
        >
          BACK
        </button>

        <button
          className="option-button negative"
          type="button"
          onClick={(event) => cancelNewCharacter(event)}
        >
          CANCEL
        </button>

        <button
          className="option-button positive"
          type="button"
          onClick={handleSubmit}
        >
          DONE
        </button>
        {submissionError && (
          <p>You must select {remainingPractices()} more Practices.</p>
        )}
      </div>
    </div>
  );
};
