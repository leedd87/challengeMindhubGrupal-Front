
import React, { useState } from "react";
import "../styles/superF.css";

function SuperF() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState([]);
  const questions = [
    {
      text: "Con que estilo te sentis mas identificado?",
      options: [
        { id: "62d81e84db36588e63203de7", text: "Urban", isCorrect: false },
        { id: "62d827534fca1cb3de1808b1", text: "Sport", isCorrect: false },
        { id: "62d828964fca1cb3de1808bd", text: "Fancy", isCorrect: false },
        //{ id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "Tenes preferencia en alguna marca?",
      options: [
        { id: "62d836532f6e1f16ca3df337", text: "Nike", isCorrect: true },
        { id: "62d838004fca1cb3de1808cb", text: "Adidas", isCorrect: false },
        { id: "62d8392a4fca1cb3de1808cd", text: "Jordan", isCorrect: false },
        { id: "62d839d04fca1cb3de1808ce", text: "New", isCorrect: false },
        { id: "62d83a704fca1cb3de1808cf", text: "Asics", isCorrect: true },
        { id: "62d83b334fca1cb3de1808d1", text: "Balenciaga", isCorrect: false },
        { id: "62d83c814fca1cb3de1808d6", text: "Dior", isCorrect: false },
        { id: "62d83e2d4fca1cb3de1808da", text: "Louis", isCorrect: false },
      ],
    },
    {
      text: "Cuanta plata gastarias?",
      options: [
        { id: 0, text: "No me importa la plata", isCorrect: true },
        { id: 1, text: "cuida mi bolsillo", isCorrect: false },
      
      ],
    },
    {
      text: "Que color te gusta mas?",
      options: [
        { id: 0, text: "Blanco", isCorrect: false },
        { id: 1, text: "Negro", isCorrect: true },
        { id: 2, text: "Naranja", isCorrect: false },
        { id: 3, text: "Verde", isCorrect: false },
      ],
    },
    
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const resultados = [];
  const optionClicked = (isCorrect) => {
  //console.log("🚀 ~ file: superF.JSX ~ line 58 ~ optionClicked ~ isCorrect", isCorrect)
    // Increment the score
    // if (isCorrect) {
    //   setScore(score + 1);
    // }

    //console.log("🚀 ~ file: superF.JSX ~ line 64 ~ optionClicked ~ currentQuestion", currentQuestion)
    setAnswer(isCorrect)
    console.log(answer)
    
    
    if (currentQuestion + 1 < questions.length) {
      //resultados.push(isCorrect)
      //console.log(resultados)
      setCurrentQuestion(currentQuestion + 1);

    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="containerSuperF">
      {/* 1. Header  */}
      <h1>USA Quiz 🇺🇸</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul className="ulSuperF">
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SuperF;