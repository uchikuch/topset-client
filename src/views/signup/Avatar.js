import React, { useState } from "react";
import "./SignUp.css";
import { FaFire } from "react-icons/fa";
import { Button } from "../../components/Button";

const avatars = [
  {
    label: "Yellow",
    src: "https://topset.ng/wp-content/uploads/2021/03/Topset-Avatar-2.png",
  },
  {
    label: "Sky blue",
    src: "https://topset.ng/wp-content/uploads/2021/03/Topset-Avatar-1.png",
  },
  {
    label: "Brown orange",
    src: "https://topset.ng/wp-content/uploads/2021/03/Topset-Avatar-3.png",
  },
  {
    label: "Purple",
    src: "https://topset.ng/wp-content/uploads/2021/03/Topset-Avatar-4.png",
  },
  {
    label: "Light green",
    src: "https://topset.ng/wp-content/uploads/2021/03/Topset-Avatar-5.png",
  },
  {
    label: "Light purple",
    src: "https://topset.ng/wp-content/uploads/2021/03/Topset-Avatar-6.png",
  },
  {
    label: "Bright pink",
    src: "https://topset.ng/wp-content/uploads/2021/03/Topset-Avatar-7.png",
  },
  {
    label: "Golden orange",
    src: "https://topset.ng/wp-content/uploads/2021/03/Topset-Avatar-8.png",
  },
  {
    label: "locked 1",
    src:
      "https://topset.ng/wp-content/uploads/2021/03/Topset-Avatar-Locked.png",
  },
  {
    label: "locked 2",
    src:
      "https://topset.ng/wp-content/uploads/2021/03/Topset-Avatar-Locked.png",
  },
  {
    label: "locked 3",
    src:
      "https://topset.ng/wp-content/uploads/2021/03/Topset-Avatar-Locked.png",
  },
  {
    label: "locked 4",
    src:
      "https://topset.ng/wp-content/uploads/2021/03/Topset-Avatar-Locked.png",
  },
];

export default function StepTwo({
  defaultAvatar,
  setAvatar,
  username,
  onNext,
  onBack,
}) {
  const [activeAvatar, setActiveAvatar] = useState("");

  const handleSelect = (e) => {
    setActiveAvatar(e.target.alt);
    setAvatar({ label: e.target.alt, src: e.target.src });
  };

  return (
    <div className="container has-text-centered is-vcentered">
      {/* Intro text */}
      <div className="__heading-box">
        <h2 className="__reduceMarginBottom">
          Alright <span className="__username">{username}</span>, let's pick an
          avatar
        </h2>
      </div>
      {/* Selected Avatar */}
      <div className="container has-text-centered is-vcentered __avatar-box">
        <img src={defaultAvatar.src} alt="avatar" width="50" height="50" />
        <div className="__card-name">{username}</div>
        <div className="__card-stats">
          <img
            src={"https://topset.ng/wp-content/uploads/2021/03/trophy2.svg"}
            alt="avatar"
            width="12"
            height="12"
          />{" "}
          0 XP <span className="__vertical-divider">|</span>{" "}
          <FaFire color="#FD9F27" /> 0
        </div>
      </div>
      {/* Avatar collection */}
      <div className="container has-text-centered is-vcentered __avatar-collection is-fluid">
        <div className="columns is-multiline has-text-centered is-mobile">
          {avatars.map((avatar) => (
            <div
              className="column is-narrow __avatar-item"
              key={avatar.label}
              onClick={handleSelect}
              style={{
                border:
                  avatar.label === activeAvatar ? "2px solid #341a64" : "none",
              }}
            >
              <img
                src={avatar.src}
                alt={avatar.label}
                height="65px"
                width="65px"
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 style={{ marginTop: 20 }}>
          Unlock exclusive avatars by completing challenges
        </h3>
      </div>
      {/* Buttons */}
      <div className="columns is-desktop is-vcentered __btn-padding __btn-margin __reverse-columns">
        <div className="column">
          <Button
            type="submit"
            buttonStyle="btn--back"
            buttonSize="btn--mobile"
            onClick={onBack}
          >
            Back
          </Button>
        </div>
        <div className="column is-three-quarters">
          <Button
            type="button"
            buttonStyle="btn--continue"
            buttonSize="btn--primary-hover"
            onClick={onNext}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
