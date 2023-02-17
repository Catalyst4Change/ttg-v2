import React, { useEffect, useState } from "react";
import "../App.css";

export const Attributes = ({ attributes, setAttributes }) => {
  const [attributesPoints, setAttributesPoints] = useState(7);

  const attributeStepUp = (e) => {
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

  return (
    <div className="column center">
      <h3>Add {attributesPoints} Points to Attributes:</h3>

      <div className="form-attribute-stepper ">
        <button
          type="button"
          name="brawn"
          value={attributes.brawn}
          onClick={(e) => attributeStepDown(e)}
        >
          -
        </button>
        <span> Brawn: {attributes.brawn} </span>
        <button
          type="button"
          name="brawn"
          value={attributes.brawn}
          onClick={(e) => attributeStepUp(e)}
        >
          +
        </button>
      </div>

      <div className="form-attribute-stepper">
        <button
          type="button"
          name="agility"
          value={attributes.agility}
          onClick={(e) => attributeStepDown(e)}
        >
          -
        </button>
        <span> Agility: {attributes.agility} </span>
        <button
          type="button"
          name="agility"
          value={attributes.agility}
          onClick={(e) => attributeStepUp(e)}
        >
          +
        </button>
      </div>

      <div className="form-attribute-stepper">
        <button
          type="button"
          name="wit"
          value={attributes.wit}
          onClick={(e) => attributeStepDown(e)}
        >
          -
        </button>
        <span> Wit: {attributes.wit} </span>
        <button
          type="button"
          name="wit"
          value={attributes.wit}
          onClick={(e) => attributeStepUp(e)}
        >
          +
        </button>
      </div>

      <div className="form-attribute-stepper">
        <button
          type="button"
          name="intelligence"
          value={attributes.intelligence}
          onClick={(e) => attributeStepDown(e)}
        >
          -
        </button>
        <span> Intelligence: {attributes.intelligence} </span>
        <button
          type="button"
          name="intelligence"
          value={attributes.intelligence}
          onClick={(e) => attributeStepUp(e)}
        >
          +
        </button>
      </div>

      <div className="form-attribute-stepper">
        <button
          type="button"
          name="charm"
          value={attributes.charm}
          onClick={(e) => attributeStepDown(e)}
        >
          -
        </button>
        <span> Charm: {attributes.charm} </span>
        <button
          type="button"
          name="charm"
          value={attributes.charm}
          onClick={(e) => attributeStepUp(e)}
        >
          +
        </button>
      </div>

      <div className="form-attribute-stepper">
        <button
          type="button"
          name="presence"
          value={attributes.presence}
          onClick={(e) => attributeStepDown(e)}
        >
          -
        </button>
        <span> Presence: {attributes.presence} </span>
        <button
          type="button"
          name="presence"
          value={attributes.presence}
          onClick={(e) => attributeStepUp(e)}
        >
          +
        </button>
      </div>
    </div>
  );
};