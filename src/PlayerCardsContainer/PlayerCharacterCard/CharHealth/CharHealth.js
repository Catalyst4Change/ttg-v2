import React, { useState, useEffect } from "react";
import "./CharHealth.scss";

export const CharHealth = ({
  maxHealth,
  health,
  setHealth,
  buildHealthBar,
  healthBar,
  setHealthBar,
}) => {
  const [condition, setCondition] = useState("Healthy");
  const healthRatio = (health / maxHealth).toFixed(2);

  useEffect(() => {
    buildHealthBar();
  }, []);

  const subtractHealth = (e) => {
    if (health > 1) {
      setHealth(health - 1);
      setHealthBar(healthBar.slice(0, -1));
    } else if (health === 1) {
      setHealth(0);
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

    if (health < maxHealth) {
      setHealth(health + 1);
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
          value={health}
          onClick={(e) => subtractHealth(e)}
        >
          -
        </button>
        <h3 className="section-title">Health</h3>
        <button
          type="button"
          name="presence"
          value={health}
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
