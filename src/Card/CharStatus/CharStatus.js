import React from "react";
import "./CharStatus.scss";
import "../../App.css";
import { useState } from "react";

export const CharStatus = ({ attributes }) => {
  const [statuses, setStatuses] = useState({
    initiative: attributes.presence + attributes.agility,
    dodge: attributes.agility + attributes.wit - 2,
    drive: attributes.wit + attributes.presence,
    crit: attributes.charm,
  });

  const statusStepUp = (e) => {
    console.log(e);
    const { name, value } = e.target;
    const numValue = parseInt(value);
    if (statuses[name]) {
      setStatuses({ ...statuses, [name]: numValue + 1 });
    }
  };

  const statusStepDown = (e) => {
    const { name, value } = e.target;
    const numValue = parseInt(value);
    if (statuses[name] > 0) {
      setStatuses({ ...statuses, [name]: numValue - 1 });
    }
  };

  return (
    <main id="char-status">
      <div className="initiative badge column center">
        ❗️= {statuses.initiative}
        <div className="tooltip">
          Initiative determines your turn order in battle.
        </div>
      </div>

      <div className="badge crit column center">
        💥 + {statuses.crit}
        <div className="tooltip">
          On flipping the Queen of Hearts, Crit gives you successes equal to
          your crit stat.
        </div>
      </div>

      <div className="dodge row distribute">
        <button
          type="button"
          name="dodge"
          value={statuses.dodge}
          onClick={(event) => statusStepDown(event)}
        >
          -
        </button>

        <div className="badge">
          👟 = {statuses.dodge}
          <div className="tooltip">
            dodge determines your turn order in battle.
          </div>
        </div>

        <button
          type="button"
          name="dodge"
          value={statuses.dodge}
          onClick={(event) => statusStepUp(event)}
        >
          +
        </button>
      </div>

      <div className="drive row distribute">
        <button
          type="button"
          name="drive"
          value={statuses.drive}
          onClick={(event) => statusStepDown(event)}
        >
          -
        </button>

        <div className="badge drive">
          ⏩ = {statuses.drive}
          <div className="tooltip">
            Drive gives you an extra card to flip per point spent.
          </div>
        </div>

        <button
          type="button"
          name="drive"
          value={statuses.drive}
          onClick={(event) => statusStepUp(event)}
        >
          +
        </button>
      </div>

      {/* <div className="badge anti-joker grey">
        🚫
        <div className="tooltip">
          When Jokers and Anti-Jokers meet, they obliterate each other. Use
          wisely to avoid the chaotic effects of flipping a Joker.
        </div>
      </div> */}
    </main>
  );
};
