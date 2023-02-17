import React from "react";
import "./CharAttributes.scss";
import "../../App.css";

export const CharAttributes = ({ attributes }) => {
  const showAttributeEmojis = (att, emoji) => {
    let display = "";
    for (let i = 0; i < att; i++) {
      display += emoji;
    }
    return display;
  };

  return (
    <main id="char-attributes">
      <h2 className="section-title">Attributes</h2>
      <div className="attributes-grid">
        <div className="grid-item">Brawn:</div>
        <div className="grid-item">
          {showAttributeEmojis(attributes.brawn, "💪")}
        </div>
        <div className="grid-item">Agility:</div>
        <div className="grid-item">
          {showAttributeEmojis(attributes.agility, "👟")}
        </div>
        <div className="grid-item">Intelligence:</div>
        <div className="grid-item">
          {showAttributeEmojis(attributes.intelligence, "🧠")}
        </div>
        <div className="grid-item">Wit:</div>
        <div className="grid-item">
          {showAttributeEmojis(attributes.wit, "⚡️")}
        </div>
        <div className="grid-item">Charm:</div>
        <div className="grid-item">
          {showAttributeEmojis(attributes.charm, "✨")}
        </div>
        <div className="grid-item">Presence:</div>
        <div className="grid-item">
          {showAttributeEmojis(attributes.presence, "👤")}
        </div>
      </div>
    </main>
  );
};
