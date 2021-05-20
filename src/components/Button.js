import React from "react";
import "../styles/Button.css";

const STYLES = [
  "btn--primary",
  "btn--outline",
  "btn--continue",
  "btn--back",
  "btn--question-back",
  "btn--question-next",
  "btn--hint",
];

const SIZES = [
  "btn--medium",
  "btn--large",
  "btn-mobile",
  "btn--wide",
  "btn--primary-hover",
  "btn--question-next-center",
];

const COLOR = ["primary", "blue", "red", "green"];

const DISABLED = [true, false];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
  disabled,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;
  const checkDisabled = DISABLED.includes(disabled) ? disabled : false;

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
      disabled={checkDisabled}
    >
      {children}
    </button>
  );
};
