import React from "react";
import propTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { useStateValue } from "../StateProvider";

export const AuthGuard = ({ children }) => {
  const [{ user }] = useStateValue();

  if (!user) {
    return <Redirect to="/login" />;
  }

  return children;
};

AuthGuard.propTypes = {
  children: propTypes.any,
};
