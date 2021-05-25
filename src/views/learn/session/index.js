import React, { useState } from "react";
import { Button } from "../../../components/Button";
import Header from "./header/Header";
import Content from "./content/content";
import questions from "./questions";
import HintModal from "./modals/hint/HintModal";
import IncorrectModal from "./modals/incorrect/IncorrectModal";
import CorrectModal from "./modals/correct/CorrectModal";
import Lottie from "react-lottie";
import * as animationData from "../../../assets/topset-bubbles.json";
import "./class.css";

export default function ClassRoom() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lessonProgress, setLessonProgress] = useState(0.2);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentIndex]
  );
  const [nextButtonDisabledPropoerty, setNextButtonDisabledPropoerty] =
    useState(true);
  const [hintButtonDisabledPropoerty, setHintButtonDisabledPropoerty] =
    useState(true);
  const [lessonComplete, setLessonComplete] = useState(false);
  const [hintIsOpen, setHintIsOpen] = useState(false);
  const [incorrectIsOpen, setIncorrectIsOpen] = useState(false);
  const [correctIsOpen, setCorrectIsOpen] = useState(false);

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const onBack = () => {
    const nextIndex = currentIndex - 1;
    console.log("back clicked", nextIndex);
    if (nextIndex < 0) {
      // do nothing
    } else {
      setCurrentIndex(nextIndex);
      setCurrentQuestion(questions[nextIndex]);
    }
  };

  const onNext = () => {
    const nextIndex = currentIndex + 1;

    if (nextIndex > lessonProgress) {
      setLessonProgress(nextIndex);
    }

    setIncorrectIsOpen(false);

    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
      console.log("currentIndex", currentIndex);
      setCurrentQuestion(questions[nextIndex]);
    } else {
      setLessonComplete(true);
    }
  };

  const onHint = () => {
    // open hint modal
    setHintIsOpen(!hintIsOpen);
  };

  const onCloseHint = () => {
    setHintIsOpen(false);
  };

  const onIncorrect = (value) => {
    // open hint modal
    setIncorrectIsOpen(value);
  };

  const onCloseIncorrect = () => {
    onNext();
  };

  const onCorrect = (value) => {
    // open hint modal
    setCorrectIsOpen(value);
  };

  const onCloseCorrect = () => {
    setCorrectIsOpen(false);
    onNext();
  };

  return (
    <div>
      {lessonComplete ? (
        <div>Lesson Complete</div>
      ) : (
        <div className="main-session-container">
          <Header
            lessonProgress={lessonProgress}
            questionLength={questions.length}
          />
          <div className="question-and-navs">
            <div>
              <Content
                currentQuestion={currentQuestion}
                onCorrect={onCorrect}
                onCloseCorrect={onCloseCorrect}
                onIncorrect={onIncorrect}
                onCloseHint={onCloseHint}
                setHintButtonDisabledPropoerty={setHintButtonDisabledPropoerty}
                setNextButtonDisabledPropoerty={setNextButtonDisabledPropoerty}
              />
            </div>
          </div>
          <div className="question-nav-buttons">
            <div className="session-question-back-btn">
              <Button
                type="submit"
                buttonStyle="btn--question-back"
                buttonSize="btn--mobile"
                onClick={onBack}
              >
                Back
              </Button>
            </div>
            <div className="session-question-continue-btn">
              <Button
                type="button"
                buttonStyle="btn--question-next"
                buttonSize="btn--question-next-center"
                onClick={onNext}
                disabled={nextButtonDisabledPropoerty}
              >
                Continue
              </Button>
            </div>
            <div className="session-question-hint-btn">
              <Button
                type="submit"
                buttonStyle="btn--hint"
                buttonSize="btn--mobile"
                onClick={onHint}
                disabled={hintButtonDisabledPropoerty}
              >
                Hint
              </Button>
              <div
                className="hint-bubbles"
                style={{
                  display: hintButtonDisabledPropoerty ? "none" : "block",
                  pointerEvents: "none",
                }}
              >
                <Lottie options={lottieOptions} width={150} />
              </div>
            </div>
          </div>
          <HintModal hintIsOpen={hintIsOpen} onCloseHint={onCloseHint}>
            {currentQuestion.hint}
          </HintModal>
          <IncorrectModal
            incorrectIsOpen={incorrectIsOpen}
            onCloseIncorrect={onCloseIncorrect}
          >
            {currentQuestion.feedback}
          </IncorrectModal>
          <CorrectModal
            correctIsOpen={correctIsOpen}
            onCloseCorrect={onCloseCorrect}
          />
        </div>
      )}
    </div>
  );
}
