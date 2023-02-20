import React, { useState, useEffect } from "react";
import "./CharHealth.scss";
import { GenerateHealthBar } from "./GenerateHealthBar";

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
    } else if (healthRatio <= 0.33) {
      setCondition("Unconscious");
    } else if (healthRatio >= 0.34 && healthRatio <= 0.67) {
      setCondition("Injured");
    } else if (healthRatio >= 0.68 || healthRatio === 1.0) {
      setCondition("Healthy");
    }
  };

  useEffect(() => {
    displayCondition();
  }, [healthRatio]);

  return (
    <section id="health" className="column center">
      <div className="row distribute">
        <button
          type="button"
          name="health"
          value={currentHealth}
          onClick={(e) => subtractHealth(e)}
        >
          -
        </button>
        <h3 className="section-title">Health</h3>
        <button
          type="button"
          name="presence"
          value={currentHealth}
          onClick={(e) => addHealth(e)}
        >
          +
        </button>
      </div>
      <div className="vitals-health column center">
        <div className="health-total">
          <span>Total Health: {maxHealth}</span>
        </div>
        <div>{healthBar}</div>
      </div>
      <div className="row distribute">
        <span
          className={
            (condition === "Healthy" && "green") ||
            (condition === "Injured" && "yellow") ||
            (condition === "Unconscious" && "red") ||
            (condition === "DEAD" && "")
          }
        >
          <b>{condition}</b>
        </span>
      </div>
    </section>
  );
};
