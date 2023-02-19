import React from "react";
import "./CharStats.scss";

export const CharStats = ({ stats, statStepUp, statStepDown }) => {
  return (
    <main id="char-stats">
      <h3 className="section-title">Stats</h3>
      <div className="initiative badge column center">
        ⏩ = {stats.initiative}
        <div className="tooltip">
          Initiative determines your turn order in battle.
        </div>
      </div>
      <div className="badge crit column center">
        ❤️ + {stats.crit}
        <div className="tooltip">
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

        <div className="badge">
          👟 = {stats.dodge}
          <div className="tooltip">
            dodge determines your turn order in battle.
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

        <div className="badge drive">
          🛞 = {stats.drive}
          <div className="tooltip">
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
