import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App.jsx';

test('checks Spy text content', () => {
  // ARRANGE
  render(<App />);
  
  // ACT
  const Spy = screen.getByText('Spy');
  
  // ASSERT
  expect(Spy).toBeInTheDocument();
});


  // function App() {
  //   const [currentQuestion, setCurrentQuestion] = useState(0);
  //   const [userAnswer, setUserAnswer] = useState('');
  //   const [showResult, setShowResult] = useState(false);
  //   const [score, setScore] = useState(0);
  //   const [shuffledQuestions, setShuffledQuestions] = useState([]);
  //   const [started, setStarted] = useState(0);