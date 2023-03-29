import React from "react";
import "./NPCHealth.scss";
import chevronUp from "../../../Assets/Images/icons8-chevron-up-white.png";
import chevronDown from "../../../Assets/Images/icons8-chevron-down-white.png";

export const NPCHealth = ({
  maxHealth,
  currentHealth,
  healthBar,
  subtractHealth,
  addHealth,
}) => {
  return (
    <section id="npc-health" className="column center">
      <div className="vitals-health row space-between">
        <button
          className="stepper-button"
          type="button"
          name="health"
          value={currentHealth}
          onClick={subtractHealth}
        >
          <img
            src={chevronDown}
            alt="down-facing chevron"
            className="chevron"
          />
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
          <img src={chevronUp} alt="up-facing chevron" className="chevron" />
        </button>
      </div>
      <div className="NPC-health-bar">
        {healthBar}
        {!healthBar.length && <div className="dead">DEAD!</div>}
      </div>
    </section>
  );
};
