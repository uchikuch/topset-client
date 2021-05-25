const questions = [
  {
    questionText:
      "What is the capital of France? They have a football team whose kit colored red, blue and white",
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
    feedback:
      "A flat in Paris was left unoccupied under lock and key for 70 years, but the rent was paid every month; when the renter passed away, a painting by Boldini valued at more than $2 million was found inside.",
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
    questionText: "How many Harry Potter books are there?",
    type: "multiple_choice",
    answerOptions: [
      { answerText: "1", isCorrect: false, index: "A" },
      { answerText: "4", isCorrect: false, index: "B" },
      { answerText: "6", isCorrect: false, index: "C" },
      { answerText: "7", isCorrect: true, index: "D" },
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
    type: "multiple_choice",
    answerOptions: [
      { answerText: "Apple", isCorrect: true, index: "A" },
      { answerText: "Intel", isCorrect: false, index: "B" },
      { answerText: "Amazon", isCorrect: false, index: "C" },
      { answerText: "Microsoft", isCorrect: false, index: "D" },
    ],
  },
];

module.exports = questions;
