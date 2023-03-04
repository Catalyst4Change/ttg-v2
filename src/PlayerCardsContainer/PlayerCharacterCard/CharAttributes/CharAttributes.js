import React from "react";
import "./CharAttributes.scss";
import "../../../App.scss";

export const CharAttributes = ({ attributes }) => {
  const showAttributeEmojis = (att, emoji) => {
    let display = "";
    for (let i = 0; i < att; i++) {
      display += emoji;
    }
    return display;
  };

  return (
    <main className="char-attributes">
      <h3 className="section-title row center">Attributes</h3>
      <section className="attributes-grid">
        <span className="tooltip grid-item">
          Brawn:
          <span className="tooltip-text">
            Brawn describes a character's raw physical strength, size, and
            resilience.
          </span>
        </span>
        <div className="grid-item">
          {showAttributeEmojis(attributes.brawn, "💪")}
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
          {showAttributeEmojis(attributes.agility, "👟")}
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
          {showAttributeEmojis(attributes.intelligence, "🧠")}
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
          {showAttributeEmojis(attributes.wit, "⚡️")}
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
          {showAttributeEmojis(attributes.charm, "✨")}
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
          {showAttributeEmojis(attributes.presence, "👤")}
        </div>
      </section>
    </main>
  );
};
