import React from "react";
import "./CharStats.scss";

export const CharStats = ({ stats, statStepUp, statStepDown }) => {
  return (
    <main id="char-stats">
      <h3 className="section-title">Stats</h3>
      <div className="badge initiative column center tooltip">
        ⏩ = {stats.initiative}
        <div className="tooltip-text">
          Initiative determines your turn order in battle.
        </div>
      </div>
      <div className="badge crit column center tooltip">
        ❤️ + {stats.crit}
        <div className="tooltip-text">
          On flipping the Queen of Hearts, Crit gives you successes equal to
          your crit stat.
        </div>
      </div>
      <div className="dodge row distribute">
        <button
          type="button"
          name="dodge"
          value={stats.dodge}
          onClick={(event) => statStepDown(event)}
        >
          -
        </button>

        <div className="badge tooltip">
          🥷 = {stats.dodge}
          <div className="tooltip-text">
            Dodge determines your turn order in battle.
          </div>
        </div>

        <button
          type="button"
          name="dodge"
          value={stats.dodge}
          onClick={(event) => statStepUp(event)}
        >
          +
        </button>
      </div>
      <div className="drive row distribute">
        <button
          type="button"
          name="drive"
          value={stats.drive}
          onClick={(event) => statStepDown(event)}
        >
          -
        </button>

        <div className="badge drive tooltip">
          🛞 = {stats.drive}
          <div className="tooltip-text">
            Drive gives you an extra card to flip per point spent.
          </div>
        </div>

        <button
          type="button"
          name="drive"
          value={stats.drive}
          onClick={(event) => statStepUp(event)}
        >
          +
        </button>
      </div>
    </main>
  );
};
