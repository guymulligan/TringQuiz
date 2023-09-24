import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App.jsx';

test('checks all useStates are at 0, false and empty string', async () => {
  // ARRANGE
  render(<App />);
  const currentQuestion = document.querySelector('currentQuestion')
  
    // ASSERT
  expect(currentQuestion).toBe(0)
  });


  // function App() {
  //   const [currentQuestion, setCurrentQuestion] = useState(0);
  //   const [userAnswer, setUserAnswer] = useState('');
  //   const [showResult, setShowResult] = useState(false);
  //   const [score, setScore] = useState(0);
  //   const [shuffledQuestions, setShuffledQuestions] = useState([]);
  //   const [started, setStarted] = useState(0);