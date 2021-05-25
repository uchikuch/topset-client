import React from "react";
import { useHistory } from "react-router-dom";
import "./header.css";
import { FiXCircle } from "react-icons/fi";
import Swal from "sweetalert2";

import Lottie from "react-lottie";
import * as starIcon from "./star.json";

export default function Header({ lessonProgress, questionLength }) {
  const history = useHistory();

  const starIconOptions = {
    loop: true,
    autoplay: true,
    animationData: starIcon.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCloseBtnClick = () => {
    Swal.fire({
      title: "Close this lesson?",
      text: "You will lose progress if you quit.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d23479",
      cancelButtonColor: "#341a64",
      confirmButtonText: "Yes, quit lesson!",
    }).then((result) => {
      if (result.isConfirmed) {
        history.goBack();
      }
    });
  };

  return (
    <div className="session-header-container">
      <div className="session-progress-div">
        <progress
          className="session-progress"
          value={lessonProgress}
          max={questionLength}
        ></progress>
      </div>
      <div className="session-close-and-rewards-div">
        <div className="session-close" onClick={handleCloseBtnClick}>
          <FiXCircle color={"#b7a6d6"} size={"2em"} />
        </div>
        <div className="completion-reward">
          <div className="completion-reward-text">
            100XP
            <br />
            Reward
          </div>
          <div className="completion-reward-icon">
            <Lottie options={starIconOptions} width={40} />
          </div>
        </div>
      </div>
    </div>
  );
}
