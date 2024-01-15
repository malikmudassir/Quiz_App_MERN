const { QuizData } = require("../data/questions");

// questions controller
exports.questions = (req, res) => {
  const arr = [...QuizData];
  const randomQuestions = [];
  // generate 5 random questions
  while (randomQuestions.length < 5 && arr.length > 0) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    randomQuestions.push(arr.splice(randomIndex, 1)[0]);
  }

  res.status(200).json({ randomQuestions });
};
