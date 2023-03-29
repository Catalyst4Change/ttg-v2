import React, { useState, useEffect } from "react";
import "./CharBasics.scss";
import "../../../App.scss";

export const CharBasics = ({
  playerName,
  charName,
  charConcept,
  charImage,
}) => {
  const [imageLinkValid, setImageLinkValid] = useState(true);

  const testImage = () =>
    new Promise((resolve) => {
      const img = new Image();

      img.src = charImage;
      img.onload = () => resolve(true);
      img.onerror = () => setImageLinkValid(false);
    });

  useEffect(() => {
    testImage();
  }, []);

  return (
    <main id="basics">
      <div id="char-image-container">
        {imageLinkValid ? (
          <img src={charImage} alt="character" />
        ) : (
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="placeholder"
          />
        )}
      </div>
      <div id="char-info">
        <span>{playerName}</span>
        <h3 className="row">{charName}</h3>
        <span>{charConcept}</span>
      </div>
    </main>
  );
};
