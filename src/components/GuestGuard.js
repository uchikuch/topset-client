import React from "react";
import { useStateValue } from "../StateProvider";
import { Redirect } from "react-router-dom";
import propTypes from "prop-types";

export const GuestGuard = ({ children }) => {
  const [{ user }] = useStateValue();

  if (user) {
    return <Redirect to="/" />;
  }

  return children;
};

GuestGuard.propTypes = {
  children: propTypes.any,
};
