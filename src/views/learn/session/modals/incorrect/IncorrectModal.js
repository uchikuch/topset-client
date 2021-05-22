import React from "react";
import ReactDom from "react-dom";
import { Button } from "../../../../../components/Button";
import "./incorrect.css";
import { motion } from "framer-motion";

export default function HintModal({
  incorrectIsOpen,
  children,
  onCloseIncorrect,
}) {
  if (!incorrectIsOpen) return null;

  return ReactDom.createPortal(
    <motion.div className="hint_modal_container" animate={{ height: "auto" }}>
      <div className="hint_modal_width">
        <div>
          <div className="hint_modal_heading">Incorrect</div>
        </div>
        <div className="hint_modal_text">{children}</div>
        <div className="hint_modal_button_div">
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
    </motion.div>,
    document.getElementById("portal")
  );
}
