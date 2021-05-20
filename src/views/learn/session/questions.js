const questions = [
  {
    questionText: "What is the capital of France?",
    type: "multiple_choice",
    answerOptions: [
      {
        answerText: "New York",
        isCorrect: false,
        index: "A",
      },
      { answerText: "London", isCorrect: false, index: "B" },
      { answerText: "Paris", isCorrect: true, index: "C" },
      { answerText: "Dublin", isCorrect: false, index: "D" },
    ],
    hint: "They have a football team whose kit colored red, blue and white. Also Jay Jay Okocha once played for the said football team.",
  },
  {
    questionText: "Who is CEO of Tesla?",
    type: "multiple_choice",
    answerOptions: [
      { answerText: "Jeff Bezos", isCorrect: false, index: "A" },
      { answerText: "Elon Musk", isCorrect: true, index: "B" },
      { answerText: "Bill Gates", isCorrect: false, index: "C" },
      { answerText: "Tony Stark", isCorrect: false, index: "D" },
    ],
  },
  {
    questionText: "The iPhone was created by which company?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "How many Harry Potter books are there?",
    answerOptions: [
      { answerText: "1", isCorrect: false },
      { answerText: "4", isCorrect: false },
      { answerText: "6", isCorrect: false },
      { answerText: "7", isCorrect: true },
    ],
  },
];

module.exports = questions;
