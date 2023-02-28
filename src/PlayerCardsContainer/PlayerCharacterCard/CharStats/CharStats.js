import React, { useState } from "react";
import "./CharStats.scss";

export const CharStats = ({ stats, statStepUp, statStepDown }) => {
  const [antiJoker, setAntiJoker] = useState(false);
  const toggleAntiJoker = () => {
    setAntiJoker(!antiJoker);
  };
  return (
    <main id="char-stats">
      <h3 className="stats-title">Stats</h3>
      <div className="badge initiative tooltip">
        ⏩ = {stats.initiative}
        <div className="tooltip-text">
          Initiative determines your turn order in battle.
        </div>
      </div>
      <div className="badge crit tooltip">
        ❤️ + {stats.crit}
        <div className="tooltip-text">
          On flipping the Queen of Hearts, Crit gives you successes equal to
          your crit stat.
        </div>
      </div>

      <div className="dodge row space-between">
        <button
          className="stepper-button"
          type="button"
          name="dodge"
          value={stats.dodge}
          onClick={(event) => statStepDown(event)}
        >
          🔽
        </button>

        <div className="badge tooltip">
          🥷 = {stats.dodge}
          <div className="tooltip-text">
            Dodge determines your turn order in battle.
          </div>
        </div>

        <button
          className="stepper-button"
          type="button"
          name="dodge"
          value={stats.dodge}
          onClick={(event) => statStepUp(event)}
        >
          🔼
        </button>
      </div>

      <div className="drive row space-evenly">
        <button
          className="stepper-button"
          type="button"
          name="drive"
          value={stats.drive}
          onClick={(event) => statStepDown(event)}
        >
          🔽
        </button>

        <div className="badge drive tooltip">
          🛞 = {stats.drive}
          <div className="tooltip-text">
            Drive gives you an extra card to flip per point spent.
          </div>
        </div>

        <button
          className="stepper-button"
          type="button"
          name="drive"
          value={stats.drive}
          onClick={(event) => statStepUp(event)}
        >
          🔼
        </button>
      </div>

      <div className="hero-points row space-evenly">
        <button
          className="stepper-button"
          type="button"
          name="heroPoints"
          value={stats.heroPoints}
          onClick={(event) => statStepDown(event)}
        >
          🔽
        </button>

        <div className="badge hero-points tooltip">
          ⭐️ = {stats.heroPoints}
          <div className="tooltip-text">
            Spending Hero Points gives you TWO extra cards to flip per point
            spent. You may only spend one Hero Point per action.
          </div>
        </div>

        <button
          className="stepper-button"
          type="button"
          name="heroPoints"
          value={stats.heroPoints}
          onClick={(event) => statStepUp(event)}
        >
          🔼
        </button>
      </div>

      <label id="anti-joker" className="tooltip">
        <input type="checkbox" checked={antiJoker} onChange={toggleAntiJoker} />
        Anti-Joker
        <span className="tooltip-text">
          When Jokers and Anti-Jokers collide, they obliterate each other. Use
          wisely to avoid the chaotic effects of flipping a Joker.
        </span>
      </label>
    </main>
  );
};
