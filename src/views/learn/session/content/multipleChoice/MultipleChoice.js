import React, { useEffect } from "react";
import "./MultipleChoice.css";
import Option from "./option/Option";

export default function MultipleChoice({
  currentQuestion,
  selectedOption,
  setSelectedOption,
  onCorrect,
  onCloseCorrect,
  onIncorrect,
  onCloseHint,
  answeredQuestions,
  setHintButtonDisabledPropoerty,
  setNextButtonDisabledPropoerty,
  setAnsweredQuestions,
  currentQuestionProps,
  setCurrentQuestionProps,
  questionAnsweredStatus,
  setQuestionAnsweredStatus,
}) {
  const CurrentQuestionAnswer = currentQuestion.answerOptions.find((answer) => {
    return answer.isCorrect === true;
  });
  /* The CurrentQuestionAnswer variable stores the correct answer for the current 
        question, to be used later to compare with the user's selected option */

  useEffect(async () => {
    // Disable continue button then initaite checks
    setNextButtonDisabledPropoerty(true);

    // Disable hint button then initaite checks
    setHintButtonDisabledPropoerty(true);

    // set incorrect answer to false then initaite checks
    // onIncorrect(false);

    // Reset questionAnsweredStatus to false then initaite check
    await setQuestionAnsweredStatus(false);

    // Reset selectedOption to nothing then initiate check
    await setSelectedOption("");

    /* Determine whether the current question has been answered by the user 
        Do this by comparing the currentQuestion with elements in the 
        answeredQuestions array*/
    const questionAnswered = await answeredQuestions.find((question) => {
      return question.questionText === currentQuestion.questionText;
    });

    // check if unanswered question has available hint
    if (!questionAnswered) {
      if (currentQuestion.hint) {
        setTimeout(function () {
          setHintButtonDisabledPropoerty(false);
        }, 10000);
      }
    }

    /* Update questionAnsweredStatus & currentQuestionProps if question has
        already been answred */
    if (questionAnswered) {
      setQuestionAnsweredStatus(true);
      setCurrentQuestionProps(questionAnswered);
      setNextButtonDisabledPropoerty(false);
      // if (questionAnswered.wrongOptionSelected) {
      //   onIncorrect(true);
      // }
    }
  }, [answeredQuestions, currentQuestion]);

  const handleOptionSelected = (option) => {
    // disallow multi select
    if (selectedOption) {
      return;
    }

    let questionProps = {
      questionText: currentQuestion.questionText,
      correctAnswer: CurrentQuestionAnswer,
      selectedOption: option,
    };

    // set user's option as selected option
    setSelectedOption(option);

    // check if selected option is wrong
    if (option !== CurrentQuestionAnswer) {
      questionProps.wrongOptionSelected = option;
      onCloseHint();
      onIncorrect(true);
    } else {
      console.log("correct");
      onCloseHint();
      onCorrect(true);
      setTimeout(function () {
        onCloseCorrect();
      }, 3000);
    }

    setQuestionAnsweredStatus(true);
    setAnsweredQuestions([...answeredQuestions, questionProps]);

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
                onClick={() => handleOptionSelected(option)}
              >
                {/* OPTION COMPONENT STYLING: if the question has been answered, use the 
                saved response to style the options accordingly. Otherwise use default 
                options style  */}
                {questionAnsweredStatus ? (
                  <Option
                    option={option}
                    selectorStyle={
                      option === currentQuestionProps.selectedOption
                        ? currentQuestionProps.selectedOption ===
                          CurrentQuestionAnswer
                          ? "correct"
                          : "wrong"
                        : option === CurrentQuestionAnswer
                        ? "correct"
                        : ""
                    }
                  />
                ) : (
                  <Option option={option} selectorStyle={""} />
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
