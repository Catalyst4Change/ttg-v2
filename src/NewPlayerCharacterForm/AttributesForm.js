import React, { useEffect, useState } from "react";
import "../App.scss";

export const AttributesForm = ({
  attributes,
  setAttributes,
  advanceFormPage,
  retardFormPage,
  setDeployNewCharacterForm,
}) => {
  const [submissionError, setSubmissionError] = useState(false);
  const [temporaryPoints, setTemporaryPoints] = useState({
    agility: 1,
    brawn: 1,
    charm: 1,
    intelligence: 1,
    presence: 1,
    wit: 1,
  });
  console.log(temporaryPoints);

  /* 
  create copy of attributes 
  each stepper adds to relevant attribute
  track points as applied
  setAttributes(temporary)
  */

  const currentAttributePoints = () => {
    return Object.values(temporaryPoints).reduce((acc, cur) => {
      acc += cur;
      return acc;
    }, 0);
  };

  const [attributesPoints, setAttributesPoints] = useState(
    13 - currentAttributePoints()
  );

  const attributeStepUp = (e) => {
    console.log(e);
    const { name, value } = e.target;
    const numValue = parseInt(value);
    if (attributesPoints > 0 && attributes[name] < 4) {
      setAttributes({ ...attributes, [name]: numValue + 1 });
      setAttributesPoints((attributesPoints) => attributesPoints - 1);
    }
  };

  const attributeStepDown = (e) => {
    const { name, value } = e.target;
    const numValue = parseInt(value);
    if (attributes[name] > 1) {
      setAttributes({ ...attributes, [name]: numValue - 1 });
      setAttributesPoints((attributesPoints) => attributesPoints + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (attributesPoints === 0) {
      advanceFormPage();
    } else {
      setSubmissionError(true);
      // error handling
    }
  };

  return (
    <main className="column center">
      <h3>Add {attributesPoints} Points to Attributes:</h3>

      <div className="form-attribute-stepper ">
        <button
          className="stepper-button"
          type="button"
          name="brawn"
          value={attributes.brawn}
          onClick={(e) => attributeStepDown(e)}
        >
          🔽
        </button>
        <div>
          <span className="tooltip">
            Brawn:
            <span className="tooltip-text">
              Brawn describes a character's raw physical strength, size, and
              resilience. <br />A character's Health stat is determined by their
              Brawn, as is the amount of damage they can take before becoming
              Injured, Unconscious, or Dead.
            </span>
          </span>{" "}
          {attributes.brawn}
        </div>
        <button
          className="stepper-button"
          type="button"
          name="brawn"
          value={attributes.brawn}
          onClick={(e) => attributeStepUp(e)}
        >
          🔼
        </button>
      </div>

      <div className="form-attribute-stepper">
        <button
          className="stepper-button"
          type="button"
          name="agility"
          value={attributes.agility}
          onClick={(e) => attributeStepDown(e)}
        >
          🔽
        </button>
        <div>
          <span className="tooltip">
            Agility:
            <span className="tooltip-text">
              Agility describes a character's speed, precision, coordination,
              and reaction time. <br />
              Initiative and Max Dodge are both influenced by a character's
              Agility.
            </span>
          </span>{" "}
          {attributes.agility}
        </div>
        <button
          className="stepper-button"
          type="button"
          name="agility"
          value={attributes.agility}
          onClick={(e) => attributeStepUp(e)}
        >
          🔼
        </button>
      </div>

      <div className="form-attribute-stepper">
        <button
          className="stepper-button"
          type="button"
          name="wit"
          value={attributes.wit}
          onClick={(e) => attributeStepDown(e)}
        >
          🔽
        </button>
        <div>
          <span className="tooltip">
            Wit:
            <span className="tooltip-text">
              Wit describes a character's creativity and powers of observation.
              <br />
              Max Dodge and Max Drive stats are both influenced by Wit.
            </span>
          </span>{" "}
          {attributes.wit}
        </div>
        <button
          className="stepper-button"
          type="button"
          name="wit"
          value={attributes.wit}
          onClick={(e) => attributeStepUp(e)}
        >
          🔼
        </button>
      </div>

      <div className="form-attribute-stepper">
        <button
          className="stepper-button"
          type="button"
          name="intelligence"
          value={attributes.intelligence}
          onClick={(e) => attributeStepDown(e)}
        >
          🔽
        </button>
        <div>
          <span className="tooltip">
            Intelligence:
            <span className="tooltip-text">
              Intelligence describes a character's information retention and
              logical reasoning ability. <br />
              The number of Skill Practices a character has is determined by
              their Intelligence.
            </span>
          </span>{" "}
          {attributes.intelligence}
        </div>
        <button
          className="stepper-button"
          type="button"
          name="intelligence"
          value={attributes.intelligence}
          onClick={(e) => attributeStepUp(e)}
        >
          🔼
        </button>
      </div>

      <div className="form-attribute-stepper">
        <button
          className="stepper-button"
          type="button"
          name="charm"
          value={attributes.charm}
          onClick={(e) => attributeStepDown(e)}
        >
          🔽
        </button>
        <div>
          <span className="tooltip">
            Charm:
            <span className="tooltip-text">
              Charm describes a character's likeability and force of
              personality. <br />
              Charm also influences how much the Universe likes your character,
              as displayed by Charm's connection to the Crit stat.
            </span>
          </span>{" "}
          {attributes.charm}
        </div>
        <button
          className="stepper-button"
          type="button"
          name="charm"
          value={attributes.charm}
          onClick={(e) => attributeStepUp(e)}
        >
          🔼
        </button>
      </div>

      <div className="form-attribute-stepper">
        <button
          className="stepper-button"
          type="button"
          name="presence"
          value={attributes.presence}
          onClick={(e) => attributeStepDown(e)}
        >
          🔽
        </button>
        <div>
          <span className="tooltip">
            Presence:
            <span className="tooltip-text">
              Presence describes a character's composure, willpower, and
              confidence. <br />A character's Max Drive and Initiative stats are
              both influenced by Presence.
            </span>
          </span>{" "}
          {attributes.presence}
        </div>
        <button
          className="stepper-button"
          type="button"
          name="presence"
          value={attributes.presence}
          onClick={(e) => attributeStepUp(e)}
        >
          🔼
        </button>
      </div>
      <div className="row space-evenly">
        <button className="form-button" type="button" onClick={retardFormPage}>
          BACK
        </button>

        <button
          className="form-button"
          type="button"
          onClick={() => setDeployNewCharacterForm(false)}
        >
          CANCEL
        </button>

        <button className="form-button" type="button" onClick={handleSubmit}>
          NEXT
        </button>
      </div>
      {submissionError && (
        <p>You must spend {attributesPoints} more Attribute Points.</p>
      )}
    </main>
  );
};
