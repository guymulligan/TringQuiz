import { useState, useEffect } from 'react';
import './App.css';

const questions = [
  {
    question: 'Which animal is this?',
    hint: "1",
    answer: 'Black mangabey',
    answer2: 'Black mangabey',
    imageUrl: '/919e7cc0-fad4-4f82-bce9-50a4c4a54717.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "1",
    answer: 'Black cheeked monkey',
    answer2: 'Black-cheeked monkey',
    imageUrl: '/6e708d3b-ac1e-438e-ba06-a8b5ef6bf25b.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "1",
    answer: 'Raccoon dog',
    answer2: 'Raccoon dog',
    imageUrl: '/08814994-3549-4e8a-b3ce-3f846512437c.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "1",
    answer: 'Aye aye',
    answer2: 'Aye-aye',
    imageUrl: '/8f4c0fce-6886-4fe1-bcda-72ef56048df6.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "1",
    answer: 'Golden lion tamarin',
    answer2: 'Golden lion tamarin',
    imageUrl: '/1167c4a1-9420-44d8-a1ff-129449586cf3.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "1",
    answer: 'Bohemian waxwing',
    answer2: 'Bohemian waxwing',
    imageUrl: '/4d5c937c-d17b-4cb3-884c-38a5dbdd5b01.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "1",
    answer: 'Egyptian vulture',
    answer2: 'Egyptian vulture',
    imageUrl: '/fcdf4e33-2172-4022-b449-294f5edbc372.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "1",
    answer: 'Pygmy owl',
    answer2: 'Pygmy owl',
    imageUrl: '/5b5189fc-434b-4fc5-9e87-04d056f9e7d7.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "1",
    answer: 'Black skimmer',
    answer2: 'Black skimmer',
    imageUrl: '/3303b74f-7caf-4548-bbe4-9f51df1b01ff.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "1",
    answer: 'Red bird of paradise',
    answer2: 'Red bird of paradise',
    imageUrl: '/22072546-18a4-4f25-93fc-4c8761163483.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "3",
    answer: 'Titanacris albipes',
    answer2: 'Titanacris albipes',
    imageUrl: '/8ab89718-d7a7-4cb5-a913-742451af35c8.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "3",
    answer: 'Bramble shark',
    answer2: 'Bramble shark',
    imageUrl: '/e5ba157b-bc2d-4b2b-90af-bf9fe592cce9.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "3",
    answer: 'Macrodontia cervicornis',
    answer2: 'Macrodontia cervicornis',
    imageUrl: '/a4bf2360-d294-458f-a571-0770b78e4cc3.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "4",
    answer: "Chapman's Zebra",
    answer2: 'Chapmans zebra',
    imageUrl: '/d3fa0ed3-ad15-4e21-9765-c81e3aa20f14.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "5",
    answer: 'Mule deer',
    answer2: 'Mule deer',
    imageUrl: '/60801dce-61e2-42a9-bc60-777bc9400dc1.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "5",
    answer: 'Northern Fur Seal',
    answer2: 'Fur seal',
    imageUrl: '/bfa7a676-8885-463f-83ce-17687175b459.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "5",
    answer: 'Siberian Ibex',
    answer2: 'Siberian Ibex',
    imageUrl: '/16196189-61ed-439c-8074-e02d88975f7f.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "5",
    answer: 'Four horned antelope',
    answer2: 'Four-horned antelope',
    imageUrl: '/8a2f18cf-2bc2-49cc-8e1f-bfd123a94a06.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "6",
    answer: 'Numbat',
    answer2: 'Numbat',
    imageUrl: '/c812d806-4be5-48e0-981a-4f119f63c8f4.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "6",
    answer: 'Masai Ostrich',
    answer2: 'Ostrich',
    imageUrl: '/b1b0e122-8421-4811-9067-35e9fa13228d.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "6",
    answer: 'African Civet',
    answer2: 'African Civet',
    imageUrl: '/fd3f6eef-50df-4cd5-a2da-6459821a2978.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "6",
    answer: 'Palawan tree shrew',
    answer2: 'Palawan treeshrew',
    imageUrl: '/69a85c34-d980-4171-ab9b-15ab38fc0bc9.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "6",
    answer: 'Rhinoceros viper',
    answer2: 'Rhinoceros viper',
    imageUrl: '/1321cf79-b8ca-470c-97fa-febf211bb9bd.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "6",
    answer: 'Blotched blue-tongued skink',
    answer2: 'Blotched blue tongued skink',
    imageUrl: '/1a619ccc-6dc8-426f-ac70-1075a4a66eb7.jpeg'
  },

  {
    question: 'Which animal is this?',
    hint: "6",
    answer: 'star tortoise',
    answer2: 'star tortoise',
    imageUrl: '/7f1d307a-4bb8-41a3-a39c-ffd259f54c23.jpeg'
  },
];
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    // Shuffle the questions array when the component mounts
    const shuffledArray = [...questions];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    setShuffledQuestions(shuffledArray.slice(0, 10));
  }, []);

  function handleAnswerChange(event) {
    setUserAnswer(event.target.value);
  }

  function handleNextQuestion() {
    if (currentQuestion === 9) {
      setShowResult(true);
    } else {
      const userAnswerTrimmed = userAnswer.toLowerCase().trim();
      const correctAnswerTrimmed = shuffledQuestions[currentQuestion].answer.toLowerCase().trim();
      const correctAnswerTrimmed2 = shuffledQuestions[currentQuestion].answer2.toLowerCase().trim();

      if (userAnswerTrimmed === correctAnswerTrimmed || userAnswerTrimmed === correctAnswerTrimmed2) {
        setScore((prevScore) => prevScore + 1);
      }

      setCurrentQuestion((prev) => prev + 1);
      setUserAnswer('');
    }
  }

  function handleRestartQuiz() {
    setCurrentQuestion(0);
    setUserAnswer('');
    setShowResult(false);

    // Shuffle the questions array for a new quiz
    const shuffledArray = [...questions];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    setShuffledQuestions(shuffledArray.slice(0, 10));
  }

  let content;
  if (!showResult && shuffledQuestions.length > 0) {
    content = (
      <>
        <h1>Question {currentQuestion + 1}</h1>
        <h2>{shuffledQuestions[currentQuestion].question}</h2>
        <p>Hint: I'm in <b>Gallery {shuffledQuestions[currentQuestion].hint}!</b></p>
        <img src={shuffledQuestions[currentQuestion].imageUrl} alt="Animal" />
        <input
          type="text"
          value={userAnswer}
          onChange={handleAnswerChange}
          placeholder="Your answer..."
        />
        <button onClick={handleNextQuestion}>Next Question</button>
      </>
    );
  } else if (!showResult && shuffledQuestions.length === 0) {
    content = (
      <>
        <p>Loading questions...</p>
      </>
    );
  } else {
    content = (
      <>
        <h1>Quiz complete!</h1>
        <p>Your correctly spied {score}/10 specimens!</p>
        <button onClick={handleRestartQuiz}>Play Again?</button>
      </>
    );
  }

  return (
    <div className="App">
      {content}
    </div>
  );
}


export default App;