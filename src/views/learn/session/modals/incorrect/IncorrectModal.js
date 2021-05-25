import React from "react";
import ReactDom from "react-dom";
import { Button } from "../../../../../components/Button";
import "./incorrect.css";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import * as animationData from "./wrong.json";

export default function HintModal({
  incorrectIsOpen,
  children,
  onCloseIncorrect,
}) {
  if (!incorrectIsOpen) return null;

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
      className="incorrect_modal_container"
      animate={{ height: "auto" }}
    >
      <div incorrect_modal_heading_text_button>
        <div className="incorrect_modal_width">
          <div>
            <div className="incorrect_modal_heading">Incorrect</div>
          </div>
          <div className="incorrect_modal_text">{children}</div>
          <div className="incorrect_modal_button_div">
            <Button
              type="button"
              buttonStyle="btn--question-next"
              buttonSize="btn--question-next-center"
              onClick={onCloseIncorrect}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </motion.div>,
    document.getElementById("portal")
  );
}
