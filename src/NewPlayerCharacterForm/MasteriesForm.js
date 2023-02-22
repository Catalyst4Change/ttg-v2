import React, { useState, useEffect } from "react";
import "../App.scss";

export const MasteriesForm = ({
  skillCheckboxes,
  setSkillCheckboxes,
  chosenMasteries,
  setChosenMasteries,
  skills,
  setSkills,
  advanceFormPage,
  setDeployNewCharacterForm,
}) => {
  const disableCheckbox = () => {
    if (chosenMasteries.length >= 2) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (chosenMasteries.length >= 2) {
      let newSkills = skills.filter(
        (skill) => !chosenMasteries.includes(skill)
      );
      setSkills(newSkills);
      advanceFormPage();
    }
  };

  const displayMasterySelection = () => {
    return skills.map((skill, i) => {
      console.log(skill, i);
      return (
        <div className="mastery" key={i}>
          <label className="tooltip">
            <input
              type="checkbox"
              id={i}
              value={skill}
              checked={skillCheckboxes[i]}
              onChange={(event) => checkSkill(event)}
            />
            {skill.name}
            <span className="tooltip-text">{skill.text}</span>
          </label>
        </div>
      );
    });
  };

  const checkSkill = (event) => {
    const position = parseInt(event.target.id);
    let updatedSkillCheckboxes = [];

    if (chosenMasteries.length < 2) {
      updatedSkillCheckboxes = skillCheckboxes.map((trait, index) =>
        index === position ? !trait : trait
      );
    } else if (chosenMasteries.length >= 2) {
      updatedSkillCheckboxes = skillCheckboxes.map((trait, index) =>
        index === position ? false : trait
      );
    }
    setSkillCheckboxes(updatedSkillCheckboxes);
  };

  useEffect(() => {
    addCheckedSkill();
  }, [skillCheckboxes]);

  const addCheckedSkill = () => {
    const selectedSkill = [];
    skillCheckboxes.forEach((checkbox, checkboxIndex) => {
      if (skillCheckboxes[checkboxIndex]) {
        selectedSkill.push(skills[checkboxIndex]);
      }
    });
    setChosenMasteries(selectedSkill);
  };

  return (
    <main className="column center">
      <h3>Choose 2 Skill Masteries:</h3>
      <p className="center">
        Masteries are skills you have perfected and give you <b>four</b> points
        toward a related action.
      </p>

      <div className="choose-skills">{displayMasterySelection()}</div>

      <div className="row distribute">
        <button className="form-button" type="button" onClick={handleSubmit}>
          NEXT
        </button>

        <button
          className="form-button"
          type="button"
          onClick={() => setDeployNewCharacterForm(false)}
        >
          CANCEL
        </button>
      </div>
    </main>
  );
};
