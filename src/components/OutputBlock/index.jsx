import React from "react";

export const OutputBlock = ({ title, value, currency }) => {
  return (
    <div className="output-block">
      <p className="output-block__title">{title}</p>
      <div className="output-block__result">
        <h2>{value}</h2>
        <span className="result__currency">{currency}</span>
      </div>
    </div>
  );
};