import React from "react";
import "../styles/Global.css";
import loader from "../assets/loader.gif";

export default function SplashScreen() {
  return (
    <div className="column is-desktop is-vcentered __splashscreen">
      <img src={loader} alt="loader" />
    </div>
  );
}
