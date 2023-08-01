import { useState } from 'react';
import './App.css';

const questions = [
  {
    question: 'Which animal is this?',
    hint: "I'm in gallery 1",
    answer: 'a',
    imageUrl: '/public/919e7cc0-fad4-4f82-bce9-50a4c4a54717.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "I'm in gallery 1",
    answer: 'a',
    imageUrl: '/public/6e708d3b-ac1e-438e-ba06-a8b5ef6bf25b.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "I'm in gallery 1",
    answer: 'a',
    imageUrl: '/public/08814994-3549-4e8a-b3ce-3f846512437c.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "I'm in gallery 1",
    answer: 'a',
    imageUrl: '/public/8f4c0fce-6886-4fe1-bcda-72ef56048df6.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "I'm in gallery 1",
    answer: 'a',
    imageUrl: '/public/1167c4a1-9420-44d8-a1ff-129449586cf3.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "I'm in gallery 1",
    answer: 'a',
    imageUrl: '/public/4d5c937c-d17b-4cb3-884c-38a5dbdd5b01.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "I'm in gallery 1",
    answer: 'a',
    imageUrl: '/public/fcdf4e33-2172-4022-b449-294f5edbc372.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "I'm in gallery 1",
    answer: 'a',
    imageUrl: '/public/5b5189fc-434b-4fc5-9e87-04d056f9e7d7.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "I'm in gallery 1",
    answer: 'a',
    imageUrl: '/public/3303b74f-7caf-4548-bbe4-9f51df1b01ff.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "I'm in gallery 1",
    answer: 'a',
    imageUrl: '/public/22072546-18a4-4f25-93fc-4c8761163483.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "I'm in gallery 3",
    answer: 'a',
    imageUrl: '/public/8ab89718-d7a7-4cb5-a913-742451af35c8.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "I'm in gallery 3",
    answer: 'a',
    imageUrl: '/public/e5ba157b-bc2d-4b2b-90af-bf9fe592cce9.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "I'm in gallery 3",
    answer: 'a',
    imageUrl: '/public/a4bf2360-d294-458f-a571-0770b78e4cc3.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "I'm in gallery 4",
    answer: 'a',
    imageUrl: '/public/d3fa0ed3-ad15-4e21-9765-c81e3aa20f14.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "I'm in gallery 5",
    answer: 'a',
    imageUrl: '/public/60801dce-61e2-42a9-bc60-777bc9400dc1.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "I'm in gallery 5",
    answer: 'a',
    imageUrl: '/public/bfa7a676-8885-463f-83ce-17687175b459.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "I'm in gallery 5",
    answer: 'a',
    imageUrl: '/public/16196189-61ed-439c-8074-e02d88975f7f.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "I'm in gallery 5",
    answer: 'a',
    imageUrl: '/public/8a2f18cf-2bc2-49cc-8e1f-bfd123a94a06.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "I'm in gallery 6",
    answer: 'a',
    imageUrl: '/public/c812d806-4be5-48e0-981a-4f119f63c8f4.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "I'm in gallery 6",
    answer: 'a',
    imageUrl: '/public/b1b0e122-8421-4811-9067-35e9fa13228d.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "I'm in gallery 6",
    answer: 'a',
    imageUrl: '/public/fd3f6eef-50df-4cd5-a2da-6459821a2978.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "I'm in gallery 6",
    answer: 'a',
    imageUrl: '/public/69a85c34-d980-4171-ab9b-15ab38fc0bc9.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "I'm in gallery 6",
    answer: 'a',
    imageUrl: '/public/1321cf79-b8ca-470c-97fa-febf211bb9bd.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "I'm in gallery 6",
    answer: 'a',
    imageUrl: '/public/1a619ccc-6dc8-426f-ac70-1075a4a66eb7.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "I'm in gallery 6",
    answer: 'a',
    imageUrl: '/public/7f1d307a-4bb8-41a3-a39c-ffd259f54c23.jpeg'
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
          <p>Hint: {questions[currentQuestion].hint}!</p>
          <img src={questions[currentQuestion].imageUrl} />
          
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
