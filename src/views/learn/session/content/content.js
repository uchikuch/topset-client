import React from "react";
import MultipleChoice from "./multipleChoice/MultipleChoice";

export default function QuestionType({
  currentQuestion,
  setNextButtonDisabledPropoerty,
}) {
  // class logic takes place here

  return (
    <div>
      {currentQuestion.type === "multiple_choice" && (
        <MultipleChoice
          currentQuestion={currentQuestion}
          setNextButtonDisabledPropoerty={setNextButtonDisabledPropoerty}
        />
      )}
    </div>
  );
}
