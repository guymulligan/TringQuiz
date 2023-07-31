import { useState } from 'react';
import './App.css';

const questions = [
  {
    question: 'Which animal is this?',
    answer: '1',
  },

  {
    question: 'Which animal is this?',
    answer: '1',
  },

  {
    question: 'Which animal is this?',
    answer: '1',
  },

  {
    question: 'Which animal is this?',
    answer: '1',
  },

  {
    question: 'Which animal is this?',
    answer: '1',
  },

  {
    question: 'Which animal is this?',
    answer: '1',
  },

  {
    question: 'Which animal is this?',
    answer: '1',
  },

  {
    question: 'Which animal is this?',
    answer: '1',
  },

  {
    question: 'Which animal is this?',
    answer: '1',
  },

  {
    question: 'Which animal is this?',
    answer: '1',
  },

  {
    question: 'Which animal is this?',
    answer: '1',
  },

  {
    question: 'Which animal is this?',
    answer: '1',
  },

  {
    question: 'Which animal is this?',
    answer: '1',
  },

  {
    question: 'Which animal is this?',
    answer: '1',
  },

  {
    question: 'Which animal is this?',
    answer: '1',
  },

  {
    question: 'Which animal is this?',
    answer: '1',
  },

  {
    question: 'Which animal is this?',
    answer: '1',
  },

  {
    question: 'Which animal is this?',
    answer: '1',
  },

  {
    question: 'Which animal is this?',
    answer: '1',
  },

  {
    question: 'Which animal is this?',
    answer: '1',
  },

  {
    question: 'Which animal is this?',
    answer: '1',
  },

  {
    question: 'Which animal is this?',
    answer: '1',
  },

  {
    question: 'Which animal is this?',
    answer: '1',
  },

  {
    question: 'Which animal is this?',
    answer: '1',
  },

  {
    question: 'Which animal is this?',
    answer: '1',
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
