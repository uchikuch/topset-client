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
    questionText: "What was the name of your first dog",
    type: "multiple_choice",
    answerOptions: [
      { answerText: "Jadie", isCorrect: false, index: "A" },
      { answerText: "Maxwell", isCorrect: false, index: "B" },
      { answerText: "Sheeva", isCorrect: false, index: "C" },
      { answerText: "Brandy", isCorrect: true, index: "D" },
    ],
  },
  {
    questionText: "Who is CEO of Mobimedia?",
    type: "multiple_choice",
    answerOptions: [
      { answerText: "Rotimi Thomas", isCorrect: true, index: "A" },
      { answerText: "Uche Azinge", isCorrect: false, index: "B" },
      { answerText: "Femi Thomas", isCorrect: false, index: "C" },
      { answerText: "Olusola Dosekun", isCorrect: false, index: "D" },
    ],
  },
  {
    questionText: "Which of these is a back-end framework",
    type: "multiple_choice",
    answerOptions: [
      { answerText: "ReactJS", isCorrect: false, index: "A" },
      { answerText: "VueJS", isCorrect: false, index: "B" },
      { answerText: "AngularJS", isCorrect: false, index: "C" },
      { answerText: "NodeJS", isCorrect: true, index: "D" },
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
