import React, { useState } from "react";
import "../../signup/SignUp.css";
import { Formik } from "formik";
import moment from "moment";
import Card from "./Card";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./cardUtils";
import { Button } from "../../../components/Button";

export default function CreditCard({
  onNext,
  onBack,
  number,
  setNumber,
  expiry,
  setExpiry,
  cvc,
  setCvc,
  cardName,
  setCardName,
}) {
  const [active, setActive] = useState("");

  const handleInputFocus = ({ target }) => {
    setActive(target.id);
  };

  const handleInputChange = ({ target }) => {
    if (target.id === "number") {
      target.value = formatCreditCardNumber(target.value);
      setNumber(target.value);
    } else if (target.id === "expiry") {
      target.value = formatExpirationDate(target.value);
      setExpiry(target.value);
    } else if (target.id === "cvc") {
      target.value = formatCVC(target.value);
      setCvc(target.value);
    } else if (target.id === "name") {
      setCardName(target.value);
    }
  };

  return (
    <div className="container has-text-centered">
      {/* Intro text */}
      <div className="__heading-box">
        <h2 className="__reduceMarginBottom has-text-centered">
          Set up your payment method
        </h2>
        <h3>No commitments, cancel online at any time</h3>
        <div className="has-text-centered __marginTop-15">
          <span>
            Cancel before {moment().add(7, "days").format("DD/MM/YYYY")} to not
            get charged
          </span>
        </div>
      </div>
      {/* Form */}
      <Formik
        initialValues={{
          number: "",
          name: "",
          expiry: "",
          cvc: "",
        }}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
          } catch (error) {}
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form className="__top-margin50" noValidate onSubmit={handleSubmit}>
            <Card
              number={number || ""}
              name={cardName || ""}
              expiry={expiry || ""}
              cvc={cvc || ""}
              focused={active}
            />
            <div className="field first-field">
              <div className="control">
                <input
                  id="number"
                  name="number"
                  className="input"
                  onBlur={handleBlur}
                  onChange={handleInputChange}
                  type="text"
                  pattern="[\d| ]{16,22}"
                  value={number}
                  placeholder="Card Number"
                  onFocus={handleInputFocus}
                />
              </div>
            </div>
            <div className="field">
              <input
                id="name"
                name="name"
                className="input"
                type="text"
                placeholder="Name"
                onBlur={handleBlur}
                onChange={handleInputChange}
                value={cardName}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="field">
              <input
                id="expiry"
                name="expiry"
                className="input __input-half-size __input-left"
                type="text"
                pattern="\d\d/\d\d"
                placeholder="Valid Thru"
                onBlur={handleBlur}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                value={expiry}
                // format={formatExpirationDate}
              />

              <input
                id="cvc"
                name="cvc"
                className="input __input-half-size __input-right __margin-top15"
                type="text"
                pattern="\d{3,4}"
                placeholder="CVC"
                onBlur={handleBlur}
                onChange={handleInputChange}
                value={cvc}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="columns is-desktop is-vcentered __top-margin50 __btn-padding __reverse-columns">
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
                  type="submit"
                  buttonStyle="btn--continue"
                  buttonSize="btn--primary-hover"
                  onClick={onNext}
                >
                  Start free trial
                </Button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
