import React from "react";

export const ProficienciesForm = ({
  skills,
  setSkills,
  chosenProficiencies,
  setChosenProficiencies,
  intelligence,
}) => {
  const chooseProficiency = (e) => {
    const { value } = e.target;
    setChosenProficiencies([...chosenProficiencies, value]);
    setSkills((skills) => skills.filter((skill) => skill !== value));
  };

  const generateProficiencySelections = () => {
    let selectors = [];
    for (let index = 0; index < intelligence + 2; index++) {
      selectors.push(
        <div key={index}>
          {chosenProficiencies[index] || (
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
      );
    }
    return selectors;
  };

  const disableCheckbox = () => {
    if (chosenProficiencies.length >= intelligence + 2) {
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

  return (
    <div className="column">
      <h3>Choose {intelligence + 2} Skill Proficiencies</h3>
      <p className="center">
        Proficiencies are skills you dabble in. They give you <b>two</b> points
        toward a related action.
      </p>
      <div className="choose-skills">{displayProficienciesSelection()}</div>
    </div>
  );
};
