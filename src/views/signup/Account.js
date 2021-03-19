import React, { useState } from "react";
import "./SignUp.css";
import { Formik } from "formik";
import { FaCheck, FaExclamationTriangle, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import * as Yup from "yup";
import { Button } from "../../components/Button";
import axios from "axios";
import server from "../../configs/Urls";

export default function StepFour({
  onNext,
  onBack,
  userDetails,
  setUserDetails,
  error,
  setError,
}) {
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [termsError, setTermsError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleAccept = () => {
    setAcceptTerms(!acceptTerms);
    setTermsError("");
  };

  const validateEmail = ({ target }) => {
    console.log("validateEmail: ");
    setLoading(true);
    setSuccess("");
    setError("");
    axios
      .post(`${server.url}/validateEmail`, { email: target.value })
      .then((response) => {
        if (response.data.success) {
          console.log(response);
          setLoading(false);
          setError("");
          setSuccess(response.data.success);
        }
        if (response.data.error) {
          setLoading(false);
          setError(response.data.error);
          setSuccess("");
        }
      });
  };

  return (
    <div className="container has-text-centered">
      {/* Intro text */}
      <div className="__heading-box">
        <h2 className="__reduceMarginBottom has-text-centered">
          Let’s create an account for you
        </h2>
      </div>
      {/* Form */}

      <Formik
        initialValues={{
          firstName: userDetails.firstName ? userDetails.firstName : "",
          lastName: userDetails.lastName ? userDetails.lastName : "",
          email: userDetails.email ? userDetails.email : "",
          password: userDetails.password ? userDetails.password : "",
          passwordConfirm: "",
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string()
            .max(255)
            .required("Please enter your first name"),
          lastName: Yup.string()
            .max(255)
            .required("Please enter your last name"),
          email: Yup.string()
            .email(() => {
              setError("Must be a valid email");
            })
            .max(255)
            .required(() => {
              setError("Please enter an email address");
            }),
          password: Yup.string()
            .min(7, "Must be at least 7 characters")
            .max(255)
            .required("Please enter a password"),
          passwordConfirm: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Required"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            if (!acceptTerms) {
              setTermsError("You need to agree to our terms");
              return;
            }
            if (error || !success) {
              setError("Retype your email address");
              return;
            }
            setUserDetails(values);
            onNext();
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
          <form noValidate onSubmit={handleSubmit}>
            <div className="__top-margin80"></div>
            <div className="__label has-text-centered">
              <p>{touched.firstName && errors.firstName}</p>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="__label has-text-centered">
              <p>{touched.lastName && errors.lastName}</p>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="__label has-text-centered">
              <p>{error}</p>
            </div>
            <div className="columns is-vcentered is-desktop">
              <div className="column">
                <div className="field ">
                  <div className="control has-icons-right">
                    <input
                      className="input is-primary is-medium"
                      onBlur={validateEmail}
                      onChange={handleChange}
                      type="email"
                      name="email"
                      value={values.email}
                      placeholder="email@example.com"
                    />
                    {error && (
                      <div className="icon is-small is-right ">
                        <FaExclamationTriangle />
                      </div>
                    )}
                    {success && (
                      <div className="icon is-small is-right">
                        <FaCheck />
                      </div>
                    )}
                    {loading && (
                      <div className="icon is-small is-right __spinner">
                        <FaSpinner />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="__label has-text-centered">
              <p>{touched.password && errors.password}</p>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="password"
                  onChange={handleChange}
                  name="password"
                  value={values.password}
                  placeholder="Passowrd"
                />
              </div>
            </div>
            <div className="__label has-text-centered">
              <p>{touched.passwordConfirm && errors.passwordConfirm}</p>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="password"
                  onChange={handleChange}
                  name="passwordConfirm"
                  value={values.passwordConfirm}
                  placeholder="Password Confirmation"
                />
              </div>
            </div>
            <div className="__checkbox-container">
              <div
                className={`${acceptTerms ? "selected" : ""}__checkbox`}
                onClick={handleAccept}
              ></div>
              <div className="__checkbox-text">
                By continuing, you agree to our{" "}
                <Link className="__span" to="/terms" target="_blank">
                  terms
                </Link>{" "}
                &{" "}
                <Link className="__span" to="/privacy-policy" target="_blank">
                  privacy policy
                </Link>
              </div>
            </div>
            <div className="__label mt-3 has-text-centered">
              <p>{termsError}</p>
            </div>
            <div className="columns is-desktop is-vcentered __top-margin80 __btn-padding __reverse-columns">
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
                >
                  Continue
                </Button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
