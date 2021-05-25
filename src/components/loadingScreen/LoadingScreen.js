import React from "react";
import "./loadingScreen.css";
import Lottie from "react-lottie";
import * as rocketAnimation from "../../assets/rocket-launch.json";

export default function SplashScreen() {
  const rocketAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: rocketAnimation.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="loding-screen-main-contaner">
      <div>
        <Lottie options={rocketAnimationOptions} width={250} />
      </div>
    </div>
  );
}
