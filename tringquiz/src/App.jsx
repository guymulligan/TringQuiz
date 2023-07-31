import { useState } from 'react';
import './App.css';

const questions = [
  {
    question: 'What is 2 + 2?',
    answer: '4',
  },
  {
    question: 'What is the capital of France?',
    answer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answer: 'Mars',
  },
  {
    question: 'What is the tallest mountain in the world?',
    answer: 'Mount Everest',
  },
  {
    question: 'Who painted the Mona Lisa?',
    answer: 'Leonardo da Vinci',
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);

  function handleAnswerChange(event) {
    setUserAnswer(event.target.value);
  }

  function handleNextQuestion() {
    if (currentQuestion === questions.length - 1) {
      setShowResult(true);
    } else {
      const userAnswerTrimmed = userAnswer.toLowerCase().trim();
      const correctAnswerTrimmed = questions[currentQuestion].answer.toLowerCase().trim();

      if (userAnswerTrimmed === correctAnswerTrimmed) {
        setCurrentQuestion((prev) => prev + 1);
        setUserAnswer('');
      } else {
        alert('Incorrect answer. Please try again.');
      }
    }
  }

  function handleRestartQuiz() {
    setCurrentQuestion(0);
    setUserAnswer('');
    setShowResult(false);
  }

  return (
    <div className="App">
      {!showResult ? (
        <>
          <h1>Question {currentQuestion + 1}</h1>
          <p>{questions[currentQuestion].question}</p>
          <input
            type="text"
            value={userAnswer}
            onChange={handleAnswerChange}
            placeholder="Your answer..."
          />
          <button onClick={handleNextQuestion}>Next Question</button>
        </>
      ) : (
        <>
          <h1>Quiz Completed!</h1>
          <p>Your Results:</p>
          {questions.map((q, index) => (
            <p key={index}>
              {q.question}: {userAnswer.toLowerCase().trim() === q.answer.toLowerCase().trim() ? 'Correct' : 'Incorrect'}
            </p>
          ))}
          <button onClick={handleRestartQuiz}>Restart Quiz</button>
        </>
      )}
    </div>
  );
}

export default App;
