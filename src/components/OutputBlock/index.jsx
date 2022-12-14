import React from "react";
import { formatingNumber } from "../../scripts/formatingNumber";

export const OutputBlock = ({ title, value = 0, currency }) => {
  return (
    <div className="output-block">
      <p className="output-block__title">{title}</p>
      <div className="output-block__result">
        <h2>{formatingNumber(value)}</h2>
        <span className="result__currency">{currency}</span>
      </div>
    </div>
  );
};
