import React, { useState } from "react";
import MultipleChoice from "./multipleChoice/MultipleChoice";
import { motion, AnimatePresence } from "framer-motion";

export default function QuestionType({
  currentQuestion,
  onCorrect,
  onCloseCorrect,
  onIncorrect,
  onCloseHint,
  setHintButtonDisabledPropoerty,
  setNextButtonDisabledPropoerty,
}) {
  const [selectedOption, setSelectedOption] = useState("");
  /* selectedOption variable holds the option object that the user selects 
      for each question. It is cleared after each question render  */
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  /* answeredQuestions holds an array of the options selected for each question.
      This is used to persist the user's response for the duration of the session */
  const [currentQuestionProps, setCurrentQuestionProps] = useState("");
  /* currentQuestionProps identifies the option selected from the 
      answeredQuestions array depending on the current question */
  const [questionAnsweredStatus, setQuestionAnsweredStatus] = useState(false);
  /* for each question the questionAnseredStatus returns a boolean value
      indicating whether the question has been aswered by the user or not.
      This value is used to determine the styling of the answer options */

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {currentQuestion.type === "multiple_choice" && (
        <MultipleChoice
          currentQuestion={currentQuestion}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          onCorrect={onCorrect}
          onCloseCorrect={onCloseCorrect}
          onIncorrect={onIncorrect}
          onCloseHint={onCloseHint}
          answeredQuestions={answeredQuestions}
          setAnsweredQuestions={setAnsweredQuestions}
          currentQuestionProps={currentQuestionProps}
          setCurrentQuestionProps={setCurrentQuestionProps}
          questionAnsweredStatus={questionAnsweredStatus}
          setQuestionAnsweredStatus={setQuestionAnsweredStatus}
          setHintButtonDisabledPropoerty={setHintButtonDisabledPropoerty}
          setNextButtonDisabledPropoerty={setNextButtonDisabledPropoerty}
        />
      )}
    </motion.div>
  );
}
