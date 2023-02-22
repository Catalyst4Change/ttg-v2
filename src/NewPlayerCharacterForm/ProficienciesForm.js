import React, { useEffect, useState } from "react";

export const ProficienciesForm = ({
  skills,
  skillCheckboxes,
  setSkillCheckboxes,
  chosenProficiencies,
  setChosenProficiencies,
  intelligence,
  submitNewCharacter,
}) => {
  const availableProficiencies = intelligence + 4;
  const [unavailableSkills] = useState(skillCheckboxes);

  const displayProficienciesSelection = () => {
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

    if (chosenProficiencies.length < availableProficiencies) {
      updatedSkillCheckboxes = skillCheckboxes.map((trait, index) =>
        index === position ? !trait : trait
      );
    } else if (chosenProficiencies.length >= availableProficiencies) {
      updatedSkillCheckboxes = skillCheckboxes.map((trait, index) =>
        index === position ? false : trait
      );
    }
    setSkillCheckboxes(updatedSkillCheckboxes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (chosenProficiencies.length >= availableProficiencies) {
      submitNewCharacter();
    }
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
    setChosenProficiencies(selectedSkill);
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
