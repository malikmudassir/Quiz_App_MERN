import React, { useEffect, useState } from "react";
import QuizResult from "./quizResult";
import { getQuestions } from "../services/apiCalls";

function Quiz() {
  // State variables to manage quiz state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [questions, setQuestions] = useState([{ options: [] }]);

  // Function to handle the "Next" button click
  const changeQuestion = () => {
    if (selectedOptionIndex === 0) {
      alert("Select an Answer");
      return;
    }

    updateScore();

    // Move to the next question or show the result
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOptionIndex(0);
    } else {
      setShowResult(true);
    }
  };

  // Function to update the score based on the selected option
  const updateScore = () => {
    if (selectedOptionIndex === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  // Function to reset the quiz state
  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setSelectedOptionIndex(0);
    setScore(0);
    getQuestions(setQuestions);
  };

  useEffect(() => {
    // Fetch questions data from the API when the component mounts
    getQuestions(setQuestions);
  }, []);

  return (
    <div>
      <p className="heading-txt">Quiz APP</p>
      {!showResult && (
        <p className="heading-txt">Question no {currentQuestion + 1} / 5</p>
      )}

      <div className="container">
        {showResult ? (
          // Render the QuizResult component with the final score
          <QuizResult
            score={score}
            totalScore={questions.length}
            tryAgain={resetAll}
          />
        ) : (
          // Render the quiz questions and options
          <>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}. </span>
              <span id="question-txt">
                {questions[currentQuestion].question}
              </span>
            </div>
            <div className="option-container">
              {/* Map through and render the answer options as buttons */}
              {questions[currentQuestion].options.map((option, i) => (
                <button
                  className={`option-btn ${
                    selectedOptionIndex === i + 1 ? "checked" : ""
                  }`}
                  key={i}
                  onClick={() => setSelectedOptionIndex(i + 1)}
                >
                  {option}
                </button>
              ))}
            </div>
            {/* Button to move to the next question */}
            <input
              type="button"
              value="Next"
              id="next-button"
              onClick={changeQuestion}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
