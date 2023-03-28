import React from "react";
import "./CharAttributes.scss";
import "../../../App.scss";
import brawn from "../../../Assets/Images/icons8-punch-100.png";
import agility from "../../../Assets/Images/icons8-exercise-96.png";
import intelligence from "../../../Assets/Images/icons8-engineering-100.png";
import wit from "../../../Assets/Images/icons8-light-bulb-64 (2).png";
import charm from "../../../Assets/Images/icons8-fantasy-100.png";
import presence from "../../../Assets/Images/icons8-lotus-64.png";

export const CharAttributes = ({ attributes }) => {
  const showAttributeEmojis = (att, symbol) => {
    let display = [];
    for (let i = 0; i < att; i++) {
      display.push(
        <img
          key={symbol + i}
          className="attribute-symbol"
          src={symbol}
          alt={[symbol]}
        />
      );
    }
    return display;
  };

  return (
    <main className="char-attributes">
      <h3 className="section-title row center">Attributes</h3>
      <section className="attributes-grid">
        <div className="grid-item">
          <span className="tooltip">
            Brawn:
            <span className="tooltip-text">
              Brawn describes a character's raw physical strength, size, and
              resilience.
            </span>
          </span>
        </div>
        <div className="grid-item">
          {showAttributeEmojis(attributes.brawn, brawn)}
        </div>
        <div className="grid-item">
          <span className="tooltip">
            Agility:
            <span className="tooltip-text">
              Agility describes a character's speed, precision, coordination,
              and reaction time.
            </span>
          </span>
        </div>
        <div className="grid-item">
          {showAttributeEmojis(attributes.agility, agility)}
        </div>
        <div className="grid-item">
          <span className="tooltip">
            Intelligence:
            <span className="tooltip-text">
              Intelligence describes a character's information retention and
              logical reasoning ability.
            </span>
          </span>
        </div>
        <div className="grid-item">
          {showAttributeEmojis(attributes.intelligence, intelligence)}
        </div>
        <div className="grid-item">
          <span className="tooltip">
            Wit:
            <span className="tooltip-text">
              Wit describes a character's creativity and powers of observation.
            </span>
          </span>
        </div>
        <div className="grid-item">
          {showAttributeEmojis(attributes.wit, wit)}
        </div>
        <div className="grid-item">
          <span className="tooltip">
            Charm:
            <span className="tooltip-text">
              Charm describes a character's likeability and force of
              personality.
            </span>
          </span>
        </div>
        <div className="grid-item">
          {showAttributeEmojis(attributes.charm, charm)}
        </div>
        <div className="grid-item">
          <span className="tooltip">
            Presence:
            <span className="tooltip-text">
              Presence describes a character's composure, willpower, and
              confidence.
            </span>
          </span>
        </div>
        <div className="grid-item">
          {showAttributeEmojis(attributes.presence, presence)}
        </div>
      </section>
    </main>
  );
};
