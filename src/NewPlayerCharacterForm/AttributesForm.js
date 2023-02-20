import React, { useEffect, useState } from "react";
import "../App.scss";

export const AttributesForm = ({ attributes, setAttributes }) => {
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
        <div> Brawn: {attributes.brawn} </div>
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
        <div> Agility: {attributes.agility} </div>
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
        <div> Wit: {attributes.wit} </div>
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
        <div> Intelligence: {attributes.intelligence} </div>
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
        <div> Charm: {attributes.charm} </div>
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
        <div> Presence: {attributes.presence} </div>
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
