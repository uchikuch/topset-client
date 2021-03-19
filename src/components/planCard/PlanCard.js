import React from "react";
import "./PlanCard.css";

const STYLES = ["", "selected"];

export default function PlanCard({ plan, selectorStyle }) {
  const checkStyle = STYLES.includes(selectorStyle) ? selectorStyle : STYLES[0];

  return (
    <div>
      <div id={plan.id} className={`${checkStyle}__card-container`}>
        <div
          className={`${checkStyle}__card-header is-desktop is-vcentered`}
          style={{ pointerEvents: "none" }}
        >
          {plan.cardHeading}
        </div>
        <div
          className={`__card-body is-desktop is-vcentered`}
          style={{ pointerEvents: "none" }}
        >
          <div
            className={`__card-body-price`}
            style={{ pointerEvents: "none" }}
          >
            {plan.price}
          </div>
          <div
            className={`__card-body-image`}
            style={{ pointerEvents: "none" }}
          >
            <img src={plan.iconSrc} alt="plan img" width="180px" />
          </div>
          <div
            className={`__card-desc-heading`}
            style={{ pointerEvents: "none" }}
          >
            {plan.descHeading}
          </div>
          <div className={`__card-desc-body`} style={{ pointerEvents: "none" }}>
            {plan.descBody}
          </div>
        </div>
      </div>
    </div>
  );
}
