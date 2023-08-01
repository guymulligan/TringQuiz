import { useState } from 'react';
import './App.css';

const questions = [
  {
    question: 'Which animal is this?',
    answer: 'a',
    imageUrl: '/public/919e7cc0-fad4-4f82-bce9-50a4c4a54717.jpeg'
  },

  {
    question: 'Which animal is this?',
    answer: 'a',
    imageUrl:
  },

  {
    question: 'Which animal is this?',
    answer: 'a',
    imageUrl:
  },

  {
    question: 'Which animal is this?',
    answer: 'a',
    imageUrl:
  },

  {
    question: 'Which animal is this?',
    answer: 'a',
    imageUrl:
  },

  {
    question: 'Which animal is this?',
    answer: 'a',
    imageUrl:
  },

  {
    question: 'Which animal is this?',
    answer: 'a',
    imageUrl:
  },

  {
    question: 'Which animal is this?',
    answer: 'a',
    imageUrl:
  },

  {
    question: 'Which animal is this?',
    answer: 'a',
    imageUrl:
  },

  {
    question: 'Which animal is this?',
    answer: 'a',
    imageUrl:
  },

  {
    question: 'Which animal is this?',
    answer: 'a',
    imageUrl:
  },

  {
    question: 'Which animal is this?',
    answer: 'a',
    imageUrl:
  },

  {
    question: 'Which animal is this?',
    answer: 'a',
    imageUrl:
  },

  {
    question: 'Which animal is this?',
    answer: 'a',
    imageUrl:
  },

  {
    question: 'Which animal is this?',
    answer: 'a',
    imageUrl:
  },

  {
    question: 'Which animal is this?',
    answer: 'a',
    imageUrl:
  },

  {
    question: 'Which animal is this?',
    answer: 'a',
    imageUrl:
  },

  {
    question: 'Which animal is this?',
    answer: 'a',
    imageUrl:
  },

  {
    question: 'Which animal is this?',
    answer: 'a',
    imageUrl:
  },

  {
    question: 'Which animal is this?',
    answer: 'a',
    imageUrl:
  },

  {
    question: 'Which animal is this?',
    answer: 'a',
    imageUrl:
  },

  {
    question: 'Which animal is this?',
    answer: 'a',
    imageUrl:
  },

  {
    question: 'Which animal is this?',
    answer: 'a',
    imageUrl:
  },

  {
    question: 'Which animal is this?',
    answer: 'a',
    imageUrl:
  },

  {
    question: 'Which animal is this?',
    answer: 'a',
    imageUrl:
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // useState for current question. Starts at 0.
  const [userAnswer, setUserAnswer] = useState('');
  // useState for answer of questions. Initial state is empty string
  const [showResult, setShowResult] = useState(false);
  // useState for showing results? Come back to this
  const [score, setScore] = useState(0)

  function handleAnswerChange(event) {
    setUserAnswer(event.target.value);
  }
  // Updates when user types/changes input field.
  // event = user's interaction with input field.
  // event.target.value = user's interaction with input field / DOM element on which the event was triggered (input) / current value of input field
  // setUserAnswer(event.target.value) = changes value of userAnswer to the new value in the input field

  function handleNextQuestion() {
    if (currentQuestion === questions.length - 1) {
      setShowResult(true);
    } else {
      const userAnswerTrimmed = userAnswer.toLowerCase().trim();
      const correctAnswerTrimmed = questions[currentQuestion].answer.toLowerCase().trim();

      if (userAnswerTrimmed === correctAnswerTrimmed) {
        setScore(score+1);
        setCurrentQuestion((prev) => prev + 1);
        setUserAnswer('');
      } else {
        setCurrentQuestion((prev) => prev + 1);
        setUserAnswer('');
      }
    }
  }
  // if (currentQuestion ===..... = checks if current question is the last Q. If it is, show results. If not, progress to next Q.
  // userAnswerTrimmed = user's answer to current question, coverted to lowercase, removed leading/trailing spaces (removes case sensitivity)
  // if (userAnswerTrimmed ===..... = checks if real answer and input answer are equal. Increase score by one. 
  // setCurrentQuestion((prev) => prev + a) = progress to next Q.
  // setUserAnswer('') = returns userAnswer to an empty string, ready for next Q.

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
          <img src={questions.imageUrl} />
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
          <h1>Quiz complete!</h1>
          <p>Your correctly spied {score}/10 specimens!</p>
          <button onClick={handleRestartQuiz}>Play Again?</button>
        </>
      )}
    </div>
  );
}

export default App;
