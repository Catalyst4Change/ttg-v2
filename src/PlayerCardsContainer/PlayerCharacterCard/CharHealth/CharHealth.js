import React, { useState, useEffect } from "react";
import "./CharHealth.scss";

export const CharHealth = ({
  maxHealth,
  currentHealth,
  setCurrentHealth,
  healthBar,
  setHealthBar,
}) => {
  const [condition, setCondition] = useState("Healthy");
  const healthRatio = (currentHealth / maxHealth).toFixed(2);

  const subtractHealth = (e) => {
    if (currentHealth > 1) {
      setCurrentHealth(currentHealth - 1);
      setHealthBar(healthBar.slice(0, -1));
    } else if (currentHealth === 1) {
      setCurrentHealth(0);
      setHealthBar([]);
    }
  };

  const addHealth = () => {
    let emoji = "";

    if (healthRatio < 0.33) {
      emoji = "🔴";
    } else if (healthRatio >= 0.33 && healthRatio <= 0.66) {
      emoji = "🟡";
    } else if (healthRatio >= 0.67) {
      emoji = "🟢";
    }

    if (currentHealth < maxHealth) {
      setCurrentHealth(currentHealth + 1);
      setHealthBar((healthBar) => [...healthBar, emoji]);
    }
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

  return (
    <section id="char-health">
      <div id="health-title">
        <h3 className="section-title">Health</h3>
      </div>

      <div id="health-container">
        <div id="health-display">
          <div id="health-total">
            <span>{maxHealth}</span>
          </div>
          <div id="health-bar">{healthBar}</div>
        </div>
      </div>

      <div id="health-condition">
        {" "}
        <button
          className="stepper-button"
          type="button"
          name="health"
          value={currentHealth}
          onClick={(e) => subtractHealth(e)}
        >
          🔽
        </button>
        <span>Condition:</span>
        <div
          className={
            (condition === "Healthy (+1)" ? "green" : "") ||
            (condition === "Injured" ? "yellow" : "") ||
            (condition === "Unconscious" ? "red" : "")
          }
        >
          <b>{condition}</b>{" "}
        </div>
        <button
          className="stepper-button"
          type="button"
          name="presence"
          value={currentHealth}
          onClick={(e) => addHealth(e)}
        >
          🔼
        </button>
      </div>
    </section>
  );
};
