import React, { useState, useEffect } from "react";
import "./CharHealth.scss";
import chevDown from "../../../Assets/Images/icons8-chevron-down-white.png";
import chevUp from "../../../Assets/Images/icons8-chevron-up-white.png";
import greenDot from "../../../Assets/Images/icons8-green-circle-96.png";
import yellowDot from "../../../Assets/Images/icons8-yellow-circle-96.png";
import redDot from "../../../Assets/Images/icons8-red-circle-96.png";

export const CharHealth = ({
  maxHealth,
  currentHealth,
  subtractHealth,
  addHealth,
  healthRatio,
}) => {
  const [condition, setCondition] = useState("Healthy (+1)");

  const generateHealthBar = () => {
    console.log("maxHealth", maxHealth);
    let red = [];
    let yellow = [];
    let green = [];
    let bar = [];
    const translation = 21;
    const healthDots = maxHealth / 3;
    for (let i = 0; i < healthDots; i++) {
      red.push(
        <circle
          key={Math.random()}
          transform={`translate(${i * translation}, ${11})`}
          r="10.5"
          strokeWidth={1}
          stroke="darkred"
          fill="red"
        ></circle>
      );
      yellow.push(
        <circle
          key={Math.random()}
          transform={`translate(${
            translation * healthDots + i * translation
          }, ${11})`}
          r="10.5"
          strokeWidth={1}
          stroke="gold"
          fill="yellow"
        ></circle>
      );
      green.push(
        <circle
          key={Math.random()}
          transform={`translate(${
            translation * healthDots * 2 + i * translation
          }, ${11})`}
          r="10.5"
          strokeWidth={1}
          stroke="green"
          fill="limegreen"
        ></circle>
      );
    }
    bar = red.concat(yellow, green);
    console.log(bar);
    return bar;
  };

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
        <img
          key={Math.random()}
          className="health-bar-background-dot"
          src={greenDot}
        />
      );
      dots.push(dot);
    }
    return dots;
  };

  const centerX = 10;
  const centerY = 0;

  return (
    <section id="char-health">
      <h3 className="section-title">Health</h3>

      <div id="health-display">
        <div id="health-total">
          <div id="max-health">{maxHealth}</div>
          <img className="health-total-background" src={greenDot} alt="dot" />
        </div>
        <svg height="22px" width="250px" className="health-bar">
          <g transform={`translate(${centerX}, ${centerY})`}>
            {generateHealthBar()}
          </g>
        </svg>
        <div className="health-bar-background">{healthBarBackground()}</div>
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
        <article
          className={
            (condition === "Healthy (+1)" ? "green" : "") ||
            (condition === "Injured" ? "yellow" : "") ||
            (condition === "Unconscious" ? "red" : "")
          }
        >
          <b>{condition}</b>
        </article>
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
