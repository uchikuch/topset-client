import React from "react";
import "./IconSelect.css";

const STYLES = ["", "selected"];

export default function IconSelect({ subject, selectorStyle }) {
  const checkStyle = STYLES.includes(selectorStyle) ? selectorStyle : STYLES[0];

  return (
    <div>
      <div id={subject.id} className={`${checkStyle}__main-border`}>
        <div
          className={`${checkStyle}__icon-container`}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={subject.iconSrc}
            alt="subject icon"
            height="37px"
            width="37px"
          />
        </div>
        <div className="__text-and-checkmark" style={{ pointerEvents: "none" }}>
          <div className="__text">
            <h1>{subject.label}</h1>
          </div>
          <div
            className="__checkmark-container"
            style={{ pointerEvents: "none" }}
          >
            <div
              className={`${checkStyle}__checkmark`}
              style={{ pointerEvents: "none" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
