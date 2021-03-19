import React, { useState } from "react";
import "./SignUp.css";
import { Formik } from "formik";
import { FaCheck, FaExclamationTriangle, FaSpinner } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import * as Yup from "yup";
import { Button } from "../../components/Button";
import axios from "axios";
import server from "../../configs/Urls";

export default function StepOne({
  username,
  setUsername,
  onNext,
  error,
  setError,
}) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  let history = useHistory();

  const handleGoBack = () => {
    history.push("/login");
  };

  const validateUsername = ({ target }) => {
    setLoading(true);
    setSuccess("");
    setError("");
    axios
      .post(`${server.url}/validateUsername`, { username: target.value })
      .then((response) => {
        if (response.data.success) {
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
    <div className="container has-text-centered is-vcentered">
      <IconContext.Provider value={{ color: "#b7a6d6" }}>
        <div className="__heading-box">
          <h2 className="__reduceMarginBottom">
            First, what should we call you?
          </h2>
          <h3>
            Your username is how you will be seen by others on the leaderboard
          </h3>
        </div>
        <Formik
          initialValues={{
            username,
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string()
              .max(255)
              .required(() => {
                setError("username is required");
              }),
            // .test(
            //   "len",
            //   "Sorry not more than 12 characters",
            //   (val) => val.length <= 12
            // ),
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
              if (error || !success) {
                return;
              }
              setUsername(values.username);
              onNext();
            } catch (error) {}
          }}
        >
          {({ handleBlur, handleChange, handleSubmit, values }) => (
            <form noValidate onSubmit={handleSubmit}>
              <div className="columns is-desktop __column-padding is-vcentered">
                {/* first column */}
                <div className="column is-three-fifths">
                  <div className="__label">
                    <h4>USERNAME</h4>
                  </div>
                  <div className="field">
                    <div className="control has-icons-right">
                      <input
                        className="input is-primary is-medium"
                        placeholder=""
                        onBlur={validateUsername}
                        onChange={handleChange}
                        type="text"
                        name="username"
                        value={values.username}
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
                  <div className="__label">
                    <p>{error}</p>
                  </div>
                  <div className="__label __label-success">
                    <p>{success}</p>
                  </div>
                </div>
                {/* second column */}
                <div className="column is-two-fifths">
                  <img
                    src="https://topset.ng/wp-content/uploads/2021/03/onboarding1.svg"
                    alt="topset illustration"
                    width="293px"
                  />
                </div>
              </div>
              <div className="columns is-desktop is-vcentered __btn-padding __reverse-columns">
                <div className="column">
                  <Button
                    buttonStyle="btn--back"
                    buttonSize="btn--mobile"
                    onClick={handleGoBack}
                  >
                    Back
                  </Button>
                </div>
                <div className="column is-three-quarters">
                  <Button
                    type="submit"
                    buttonStyle="btn--continue"
                    buttonSize="btn--primary-hover"
                    disabled={loading}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </IconContext.Provider>
    </div>
  );
}
