import React from "react";
import "./CharAttributes.scss";

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
        <span>Brawn:</span>
        <span> {showAttributeEmojis(attributes.brawn, "💪")}</span>
        <span>Agility:</span>
        <span> {showAttributeEmojis(attributes.agility, "👟")}</span>
        <span>Intelligence:</span>
        <span> {showAttributeEmojis(attributes.intelligence, "🧠")}</span>
        <span>Wit:</span>
        <span> {showAttributeEmojis(attributes.wit, "⚡️")}</span>
        <span>Charm:</span>
        <span> {showAttributeEmojis(attributes.charm, "✨")}</span>
        <span>Presence:</span>
        <span> {showAttributeEmojis(attributes.presence, "👤")}</span>
      </div>
    </main>
  );
};
