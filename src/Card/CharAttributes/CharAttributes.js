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
    <main>
      <span>Brawn: {showAttributeEmojis(attributes.brawn, "💪")}</span>
      <span>Agility: {showAttributeEmojis(attributes.agility, "👟")}</span>
      <span>
        Intelligence: {showAttributeEmojis(attributes.intelligence, "🧠")}
      </span>
      <span>Wit: {showAttributeEmojis(attributes.wit, "⚡️")}</span>
      <span>Charm: {showAttributeEmojis(attributes.charm, "✨")}</span>
      <span>Presence: {showAttributeEmojis(attributes.presence, "👤")}</span>
    </main>
  );
};
