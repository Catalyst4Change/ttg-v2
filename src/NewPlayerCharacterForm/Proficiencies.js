import React from "react";

export const Proficiencies = ({
  skills,
  setSkills,
  chosenProficiencies,
  setChosenProficiencies,
  intelligence,
}) => {
  const chooseProficiency = (e) => {
    const { value } = e.target;
    console.log(value);
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
  return (
    <div className="column">
      <h3>Choose {intelligence + 2} Skill Proficiencies</h3>
      <p className="center">
        Proficiencies are skills you dabble in. They give you <b>two</b> points
        toward a related action.
      </p>
      {generateProficiencySelections()}
    </div>
  );
};
