import React, { useState } from "react";
import "./CharStats.scss";
import initiativeArrow from "../../../Assets/Images/icons8-arrow-67.png";
import queenOfHearts from "../../../Assets/Images/love_heart_02-512.webp";
import dodge from "../../../Assets/Images/icons8-unavailable-64.png";
import drive from "../../../Assets/Images/icons8-lightning-bolt-96.png";
import heroPoint from "../../../Assets/Images/icons8-army-star-100.png";

export const CharStats = ({
  stats,
  statStepUp,
  statStepDown,
  antiJoker,
  toggleAntiJoker,
}) => {
  return (
    <main className="char-stats">
      <h3 className="stats-title">Stats</h3>
      <div className="badge initiative tooltip ">
        <img
          className="initiative stat-icon"
          src={initiativeArrow}
          alt="initiative Arrow"
        />
        = {stats.initiative}
        <div className="tooltip-text">
          Initiative determines your turn order in battle.
        </div>
      </div>
      <div className="badge tooltip">
        <img
          className="crit stat-icon"
          src={queenOfHearts}
          alt="queen of hearts"
        />
        + {stats.crit}
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
          <img
            className="initiative-arrow stat-icon"
            src={dodge}
            alt="person running"
          />
          = {stats.dodge}
          <div className="tooltip-text">
            Dodge one incoming damage point per point spent.
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

      <div className="drive row space-between">
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
          <img
            className="initiative-arrow stat-icon"
            src={drive}
            alt="lightning"
          />
          = {stats.drive}
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

      <div className="hero-points row space-between">
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
          <img
            className="initiative-arrow stat-icon"
            src={heroPoint}
            alt="star in circle"
          />
          = {stats.heroPoints}
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

      <label className="row space-evenly">
        <input type="checkbox" checked={antiJoker} onChange={toggleAntiJoker} />
        <span className="tooltip">
          Anti-Joker
          <span className="tooltip-text">
            When Jokers and Anti-Jokers collide, they obliterate each other. Use
            wisely to avoid the chaotic effects of flipping a Joker.
          </span>
        </span>
      </label>
    </main>
  );
};
