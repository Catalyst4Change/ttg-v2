import React, { useState } from "react";
import "../App.scss";

export const MasteriesForm = ({
  chosenMasteries,
  setChosenMasteries,
  skills,
  setSkills,
  advanceFormPage,
  setDeployNewCharacterForm,
}) => {
  const addMastery = (e) => {
    const { value } = e.target;
    setChosenMasteries([...chosenMasteries, value]);
  };

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
      return (
        <div className="mastery" key={i}>
          <input
            type="checkbox"
            id={skill}
            value={skill}
            onChange={(event) => addMastery(event)}
            disabled={disableCheckbox()}
          />
          <label htmlFor={skill}>{skill}</label>
        </div>
      );
    });
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
