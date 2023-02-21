import React from "react";

export const ProficienciesForm = ({
  skills,
  setSkills,
  chosenProficiencies,
  setChosenProficiencies,
  intelligence,
  submitNewCharacter,
}) => {
  const availableProficiencies = intelligence + 2;

  const disableCheckbox = () => {
    if (chosenProficiencies.length >= availableProficiencies) {
      return true;
    } else {
      return false;
    }
  };

  const addProficiency = (e) => {
    const { value } = e.target;
    setChosenProficiencies([...chosenProficiencies, value]);
  };

  const displayProficienciesSelection = () => {
    return skills.map((skill, i) => {
      return (
        <div className="mastery" key={i}>
          <input
            type="checkbox"
            id={skill}
            value={skill}
            onChange={(event) => addProficiency(event)}
            disabled={disableCheckbox()}
          />
          <label htmlFor={skill}>{skill}</label>
        </div>
      );
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (chosenProficiencies.length >= availableProficiencies) {
      submitNewCharacter();
    }
  };

  return (
    <div className="column">
      <h3>Choose {intelligence + 2} Skill Proficiencies</h3>
      <p className="center">
        Proficiencies are skills you dabble in. They give you <b>two</b> points
        toward a related action.
      </p>
      <div className="choose-skills">{displayProficienciesSelection()}</div>
      <div className="row distribute">
        <button className="form-button" type="button" onClick={handleSubmit}>
          NEXT
        </button>

        <button
          className="form-button"
          type="button"
          onClick={(event) => handleSubmit(event)}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};
