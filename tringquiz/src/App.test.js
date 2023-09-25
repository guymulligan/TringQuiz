import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App.jsx';

// Renders landing page on initial load
test ('should render landing page on initial load', () => {
  const {asFragment} = render(<App/>); // Renders App component within a test environment, stores in asFragment() as a snapshot
  expect(asFragment()).toMatchSnapshot(); // Compares current output to the stored snapshot. So what is in App matches what is rendered
});

test('clicking landingPageButton changes the page', () => {
  const { container } = render(<App />);
  
  // Verify that you are initially on the landing page
  expect(screen.getByText('Spy')).toBeInTheDocument();

  // Find and click the 'landingPageButton'
  const landingPageButton = screen.getByText('Start!'); // Adjust the text as per your actual button text
  fireEvent.click(landingPageButton);

  // After clicking the button, check that the page content changes
  expect(screen.getByText('Question 1')).toBeInTheDocument();
});


  // function App() {
  //   const [currentQuestion, setCurrentQuestion] = useState(0);
  //   const [userAnswer, setUserAnswer] = useState('');
  //   const [showResult, setShowResult] = useState(false);
  //   const [score, setScore] = useState(0);
  //   const [shuffledQuestions, setShuffledQuestions] = useState([]);
  //   const [started, setStarted] = useState(0);