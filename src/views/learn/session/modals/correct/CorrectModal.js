import React from "react";
import ReactDom from "react-dom";
import correct from "../../../../../assets/correct.gif";
import "./correct.css";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import * as animationData from "./check-mark.json";

export default function HintModal({ correctIsOpen, onCloseCorrect }) {
  if (!correctIsOpen) return null;

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return ReactDom.createPortal(
    <motion.div className="hint_modal_container" animate={{ height: "auto" }}>
      {/* <img src={correct} alt="" width="150px" /> */}
      <Lottie options={defaultOptions} width={150} />
    </motion.div>,
    document.getElementById("portal")
  );
}
