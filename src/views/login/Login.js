import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { useStateValue } from "../../StateProvider";
import { Button } from "../../components/Button";
import server from "../../configs/Urls";

function Login() {
  const [{}, dispatch] = useStateValue();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const history = useHistory();
  const loginEmail = window.localStorage.getItem("loginEmail")
    ? window.localStorage.getItem("loginEmail")
    : "";

  return (
    <div className="container has-text-centered is-vcentered">
      <div className="__login-box">
        <h2 className="__reduceMarginBottom">👋🏾 Welcome back!</h2>
        <h3>Learn something new today</h3>
        <div className="divider"></div>
        <div className="form-box"></div>
        <Formik
          initialValues={{
            email: loginEmail,
            password: "",
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Must be a valid email")
              .max(255)
              .required("Email is required"),
            password: Yup.string().max(255).required("Password is required"),
          })}
          onSubmit={async (values) => {
            try {
              setEmailError("");
              setPasswordError("");
              const res = await fetch(`${server.url}/login`, {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-Type": "application/json" },
              });
              const data = await res.json();
              console.log(data);
              if (data.errors) {
                if (data.errors.email) {
                  setEmailError(data.errors.email);
                }
                if (data.errors.password) {
                  setPasswordError(data.errors.password);
                }
                console.log(data.errors);
              }
              if (data.user) {
                localStorage.setItem("topset_jwt", data.jwt);
                dispatch({
                  type: "SET_USER",
                  user: data.user,
                });
                history.push("/");
              }
            } catch (error) {
              console.log("caught error: ", error);
            }
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
              <div className="field">
                <input
                  className="input is-primary is-medium"
                  placeholder="email@example.com"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  value={values.email}
                />
                <div className="__label has-text-centered">
                  <p>{emailError}</p>
                </div>
              </div>
              <div className="field">
                <input
                  className="input is-primary is-medium"
                  placeholder="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  name="password"
                  value={values.password}
                />
                <div className="__label has-text-centered">
                  <p>{passwordError}</p>
                </div>
              </div>
              <div className="__login-button">
                <Button
                  type="submit"
                  buttonStyle="btn--primary"
                  buttonSize="btn--mobile"
                >
                  Login
                </Button>
              </div>
            </form>
          )}
        </Formik>
        <div className="__forgot-password">
          <h4>Forgotten your password?</h4>
        </div>
        <div className="__get-started">
          <h4>
            Don’t have account?{" "}
            <Link className="__link" to="/signup">
              Get started now!
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Login;
