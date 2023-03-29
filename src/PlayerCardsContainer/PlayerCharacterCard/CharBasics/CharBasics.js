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
  let response;

  useEffect(() => {
    checkImage();
    isValidUrl();
  }, []);

  const checkImage = async () => {
    try {
      response = await fetch(charImage);
    } catch (error) {
      console.log("There was an error", error);
    }

    // Uses the 'optional chaining' operator
    if (!response?.ok) {
      console.log(
        `${playerName} image load error - HTTP Response Code: ${response?.status}`
      );
      setImageLinkValid(false);
    }
  };

  const isValidUrl = () => {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // validate fragment locator
    if (!!urlPattern.test(charImage) === false) {
      setImageLinkValid(false);
    }
  };

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
        <h3>{charName}</h3>
        <span>{charConcept}</span>
      </div>
    </main>
  );
};
