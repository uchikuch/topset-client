import React from "react";
// import "../MultipleChoice.css";

const STYLES = ["", "selected", "correct", "wrong"];

export default function IconSelect({ option, selectorStyle }) {
  const checkStyle = STYLES.includes(selectorStyle) ? selectorStyle : STYLES[0];
  return (
    <div>
      <div id={option.answerText} className={`${checkStyle}__mc-border`}>
        <div
          className={`${checkStyle}__index-container`}
          style={{ pointerEvents: "none" }}
        >
          {option.index}
        </div>
        <div
          className="__text-and-checkmark-container"
          style={{ pointerEvents: "none" }}
        >
          <div className="__mc-option-text">{option.answerText}</div>
          <div
            className="__checkmark-container"
            style={{ pointerEvents: "none" }}
          >
            <div
              className={`${checkStyle}__checkmark-item`}
              style={{ pointerEvents: "none" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
