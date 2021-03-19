import React from "react";
import { Button } from "../../components/Button";
import PlanCard from "../../components/planCard/PlanCard";

const plans = [
  {
    id: "1",
    cardHeading: "Starter",
    price: "FREE",
    iconSrc: "https://topset.ng/wp-content/uploads/2021/03/free-students.svg",
    descHeading: "Start small",
    descBody: "Get limited access to all sections and topics",
    btnText: "Get Started",
  },
  {
    id: "2",
    cardHeading: "7 Day Free Trial",
    price: "₦9,000/m",
    iconSrc: "https://topset.ng/wp-content/uploads/2021/03/pro-students.svg",
    descHeading: "Go further",
    descBody: "Get unlimited access to all sections and topics",
    btnText: "Start free trial",
  },
];

export default function ChoosePlan({
  chosenPlan,
  setChosenPlan,
  onNext,
  onBack,
  setError,
  error,
}) {
  const handleSelect = (e) => {
    setError("");
    setChosenPlan(e.target.id);
  };

  return (
    <div className="container has-text-centered">
      {/* Intro text */}
      <div className="__heading-box">
        <h2 className="__reduceMarginBottom">Choose a plan</h2>
      </div>
      {/* Plans */}
      <div className="columns is-desktop __card-column-padding is-vcentered __top-margin80">
        {plans.map((plan) => (
          <div className="column is-half" key={plan.id} onClick={handleSelect}>
            <PlanCard
              plan={plan}
              selectorStyle={chosenPlan === plan.id ? "selected" : ""}
            />
          </div>
        ))}
      </div>
      <div className="__label mt-3 has-text-centered">
        <p>{error}</p>
      </div>

      {/* Buttons */}
      <div className="columns is-desktop is-vcentered __btn-padding __btn-margin100 __reverse-columns">
        <div className="column">
          <Button
            type="submit"
            buttonStyle="btn--back"
            buttonSize="btn--mobile"
            onClick={onBack}
          >
            Back
          </Button>
        </div>
        <div className="column is-three-quarters">
          <Button
            type="button"
            buttonStyle="btn--continue"
            buttonSize="btn--primary-hover"
            onClick={onNext}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
