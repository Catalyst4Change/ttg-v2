import React, { useState, useEffect } from "react";
import "./NPCHealth.scss";

export const NPCHealth = ({
  maxHealth,
  currentHealth,
  setCurrentHealth,
  healthBar,
  setHealthBar,
}) => {
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
    if (currentHealth < maxHealth) {
      setCurrentHealth(currentHealth + 1);
      setHealthBar((healthBar) => [...healthBar, "⚫️"]);
    }
  };

  return (
    <section id="health" className="column center">
      <div className="vitals-health row center">
        <button
          type="button"
          name="health"
          value={currentHealth}
          onClick={(e) => subtractHealth(e)}
        >
          -
        </button>
        <div className="health-total">
          <div>Total Health: {maxHealth}</div>{" "}
        </div>{" "}
        <button
          type="button"
          name="presence"
          value={currentHealth}
          onClick={(e) => addHealth(e)}
        >
          +
        </button>
      </div>
      <div className="NPC-health-bar">
        {healthBar}
        {!healthBar.length && <div className="dead">DEAD!</div>}
      </div>
    </section>
  );
};
