import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Username from "./Username";
import Avatar from "./Avatar";
import Subjects from "./Subjects";
import Account from "./Account";
import ChoosePlan from "./ChoosePlan";
import CreditCard from "./creditCard/index";

import server from "../../configs/Urls";

export default function SignUp() {
  let history = useHistory();
  const [activeStep, setActiveStep] = useState(0);
  const [username, setUsername] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState({
    label: "default",
    src: "https://topset.ng/wp-content/uploads/2021/03/default-user.png",
  });
  const [chosenPlan, setChosenPlan] = useState("");
  const [number, setNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  useEffect(() => {
    setActiveStep(0);
  }, []);

  const handleNext = () => {
    if (activeStep === 2 && selectedSubjects.length === 0) {
      setError("Select at least one subject");
      return;
    }
    if (activeStep === 4 && !chosenPlan) {
      setError("Select a plan to get started");
      return;
    }
    if (activeStep === 4) {
      console.log("Get to work: ", chosenPlan);
      const user_data = {
        username,
        firstname: userDetails.firstName,
        lastname: userDetails.lastName,
        email: userDetails.email,
        password: userDetails.password,
        avatar,
        subjects: selectedSubjects,
        plan: chosenPlan,
        payment_card: {
          number,
          name: cardName,
          expiry,
          cvc,
          flw_token: "",
        },
        updateddAt: new Date(),
      };

      // Process free plan
      if (chosenPlan === "1") {
        try {
          console.log("post values: ", user_data, server.url);
          axios.post(`${server.url}/signup`, user_data).then(
            (response) => {
              console.log("response: ", response);
              window.localStorage.setItem("topset_jwt", response.data.jwt);
              window.location.reload();
            },
            (error) => {
              console.log(error);
            }
          );
        } catch (error) {
          console.log("here we are", error);
        }

        return;
      }
      console.log("process payment");
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setError("");
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      {activeStep === 0 && (
        <Username
          username={username}
          setUsername={setUsername}
          onNext={handleNext}
          error={error}
          setError={setError}
        />
      )}
      {activeStep === 1 && (
        <Avatar
          onBack={handleBack}
          onNext={handleNext}
          username={username}
          defaultAvatar={avatar}
          setAvatar={setAvatar}
        />
      )}
      {activeStep === 2 && (
        <Subjects
          onBack={handleBack}
          onNext={handleNext}
          selectedSubjects={selectedSubjects}
          error={error}
          setError={setError}
          setSelectedSubjects={setSelectedSubjects}
        />
      )}
      {activeStep === 3 && (
        <Account
          onBack={handleBack}
          onNext={handleNext}
          error={error}
          setError={setError}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
        />
      )}
      {activeStep === 4 && (
        <ChoosePlan
          onBack={handleBack}
          onNext={handleNext}
          setChosenPlan={setChosenPlan}
          chosenPlan={chosenPlan}
          error={error}
          setError={setError}
        />
      )}
      {activeStep === 5 && (
        <CreditCard
          onBack={handleBack}
          onNext={handleNext}
          setChosenPlan={setChosenPlan}
          chosenPlan={chosenPlan}
          error={error}
          setError={setError}
          number={number}
          setNumber={setNumber}
          expiry={expiry}
          setExpiry={setExpiry}
          cvc={cvc}
          setCvc={setCvc}
          cardName={cardName}
          setCardName={setCardName}
        />
      )}
    </div>
  );
}
