import React from "react";
import ReactDom from "react-dom";
import correct from "../../../../../assets/correct.gif";
import "./correct.css";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import * as animationData from "./thumbs-up.json";

export default function HintModal({ correctIsOpen, onCloseCorrect }) {
  if (!correctIsOpen) return null;

  const lottieOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return ReactDom.createPortal(
    <motion.div
      className="correct_modal_container"
      animate={{ height: "auto" }}
    >
      <Lottie options={lottieOptions} width={150} />
    </motion.div>,
    document.getElementById("portal")
  );
}
