import React from "react";
import "../App.css";

export const MasteriesForm = ({
  chosenMasteries,
  setChosenMasteries,
  skills,
  setSkills,
}) => {
  const chooseMastery = (e) => {
    const { value } = e.target;
    setChosenMasteries([...chosenMasteries, value]);
    setSkills((skills) => skills.filter((skill) => skill !== value));
  };

  return (
    <div className="column center">
      <h3>Choose 2 Skill Masteries:</h3>
      <p className="center">
        Masteries are skills you have perfected and give you <b>four</b> points
        toward a related action.
      </p>
      <div className="column center">
        {chosenMasteries[0] || (
          <select className="form-select" onChange={(e) => chooseMastery(e)}>
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
      <div>
        {chosenMasteries[1] || (
          <select className="form-select" onChange={(e) => chooseMastery(e)}>
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
    </div>
  );
};
