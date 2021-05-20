import React, { useState } from "react";
import "./MultipleChoice.css";
import Option from "./option/Option";

export default function MultipleChoice({
  currentQuestion,
  setNextButtonDisabledPropoerty,
}) {
  const [selectedOption, setSelectedOption] = useState("");
  const [wrongOptionSelected, setWrongOptionSelected] = useState("");

  const correctAnswer = currentQuestion.answerOptions.find((answer) => {
    return answer.isCorrect === true;
  });

  const optionSelected = (option) => {
    // disallow multi select
    if (selectedOption) {
      return;
    }
    // set selected option
    setSelectedOption(option);
    // check if selected option is wrong
    if (option !== correctAnswer) {
      setWrongOptionSelected(option);
    }
    // enable next button
    setNextButtonDisabledPropoerty(false);
  };

  return (
    <div>
      {/* HINT: replace "false" with logic to display the 
          score when the user has answered all the questions */}
      {false ? (
        <div className="mc-score-section">
          You scored 1 out of {currentQuestion.length}
        </div>
      ) : (
        <>
          <div className="mc-question-section">
            <div className="mc-question-count">
              {/* <span>{currentQuestion.length}</span>/{currentQuestion.length} */}
            </div>
            <div className="mc-question-text">
              <h2>{currentQuestion.questionText}</h2>
            </div>
          </div>
          <div className="mc-answer-section">
            {currentQuestion.answerOptions.map((option) => (
              <div
                id={currentQuestion.answerOptions.indexOf(option)}
                key={currentQuestion.answerOptions.indexOf(option)}
                onClick={() => optionSelected(option)}
              >
                <Option
                  option={option}
                  // selectorStyle={
                  //   selectedSubjects.includes(option._id) ? "selected" : ""
                  // }
                  selectorStyle={
                    option === selectedOption
                      ? option === correctAnswer
                        ? "correct"
                        : "wrong"
                      : selectedOption
                      ? option === correctAnswer
                        ? "correct"
                        : ""
                      : ""
                  }
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
