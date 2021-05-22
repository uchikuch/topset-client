import React from "react";
import ReactDom from "react-dom";
import { Button } from "../../../../../components/Button";
import "./hint.css";
import { motion } from "framer-motion";

export default function HintModal({ hintIsOpen, children, onCloseHint }) {
  if (!hintIsOpen) return null;

  return ReactDom.createPortal(
    <motion.div className="hint_modal_container" animate={{ height: "auto" }}>
      <div className="hint_modal_width">
        <div>
          <div className="hint_modal_heading">Hint</div>
        </div>
        <div className="hint_modal_text">{children}</div>
        <div className="hint_modal_button_div">
          <Button
            type="button"
            buttonStyle="btn--question-next"
            buttonSize="btn--question-next-center"
            onClick={onCloseHint}
          >
            Close
          </Button>
        </div>
      </div>
    </motion.div>,
    document.getElementById("portal")
  );
}
