import React, { useState, useEffect } from "react";
import "./NPCHealth.scss";

export const NPCHealth = ({
  maxHealth,
  currentHealth,
  healthBar,
  subtractHealth,
  addHealth,
}) => {
  return (
    <section id="npc-health" className="column center">
      <div className="vitals-health row center">
        <button
          className="stepper-button"
          type="button"
          name="health"
          value={currentHealth}
          onClick={subtractHealth}
        >
          🔽
        </button>
        <div className="health-total">
          <div>Total Health: {maxHealth}</div>
        </div>{" "}
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
      <div className="NPC-health-bar">
        {healthBar}
        {!healthBar.length && <div className="dead">DEAD!</div>}
      </div>
    </section>
  );
};
