import React, { useState } from "react";
import { Button } from "../../../components/Button";
import Content from "./content/content";
import questions from "./questions";
import "./class.css";

export default function ClassRoom() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentIndex]
  );
  const [nextButtonDisabledPropoerty, setNextButtonDisabledPropoerty] =
    useState(true);
  const [lessonComplete, setLessonComplete] = useState(false);

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
    console.log("next clicked", nextIndex);
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
      setCurrentQuestion(questions[nextIndex]);
    } else {
      setLessonComplete(true);
    }
  };

  const onHint = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestion(questions[nextIndex]);
    } else {
      setLessonComplete(true);
    }
  };

  return (
    <div>
      {lessonComplete ? (
        <div>Lesson Complete</div>
      ) : (
        <div className="main-session-container">
          <div className="question-and-navs">
            <div>
              <Content
                currentQuestion={currentQuestion}
                setNextButtonDisabledPropoerty={setNextButtonDisabledPropoerty}
              />
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
                >
                  Hint
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
