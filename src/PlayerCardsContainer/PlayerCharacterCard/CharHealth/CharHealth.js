import React, { useState, useEffect } from "react";
import "./CharHealth.scss";
import greenDot from "../../../Assets/Images/icons8-green-circle-96.png";
import chevDown from "../../../Assets/Images/icons8-chevron-down-white.png";
import chevUp from "../../../Assets/Images/icons8-chevron-up-white.png";

export const CharHealth = ({
  maxHealth,
  currentHealth,
  healthBar,
  subtractHealth,
  addHealth,
  healthRatio,
}) => {
  const [condition, setCondition] = useState("Healthy");

  const displayCondition = () => {
    if (healthRatio == 0.0) {
      setCondition("DEAD");
    } else if (healthRatio > 0.0 && healthRatio <= 0.33) {
      setCondition("Unconscious");
    } else if (healthRatio >= 0.34 && healthRatio <= 0.67) {
      setCondition("Injured");
    } else if (healthRatio >= 0.68 || healthRatio === 1.0) {
      setCondition("Healthy (+1)");
    }
  };

  useEffect(() => {
    displayCondition();
  }, [healthRatio]);

  const healthBarBackground = () => {
    const dots = [];
    for (let index = 0; index < 12; index++) {
      const dot = (
        <img key={index} className="health-bar-background-dot" src={greenDot} />
      );
      dots.push(dot);
    }
    return dots;
  };

  return (
    <section id="char-health">
      <div id="health-title">
        <h3 className="section-title">Health</h3>
      </div>

      <div id="health-container">
        <div id="health-display">
          <div id="health-total">
            <span>{maxHealth}</span>
            <img className="health-total-background" src={greenDot} />
          </div>
          <div id="health-bar">{healthBar}</div>
          <div className="health-bar-background">{healthBarBackground()}</div>
        </div>
      </div>

      <div id="health-condition">
        <img
          className="health-stepper"
          src={chevDown}
          name="health"
          value={currentHealth}
          onClick={(e) => subtractHealth(e)}
        />

        <span>Condition:</span>
        <div
          className={
            (condition === "Healthy (+1)" ? "green" : "") ||
            (condition === "Injured" ? "yellow" : "") ||
            (condition === "Unconscious" ? "red" : "")
          }
        >
          <b>{condition}</b>
        </div>
        <img
          className="health-stepper"
          src={chevUp}
          name="health"
          value={currentHealth}
          onClick={(e) => addHealth(e)}
        />
      </div>
    </section>
  );
};
