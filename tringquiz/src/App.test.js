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
  const landingPageButton = screen.getByText('Start!');
  fireEvent.click(landingPageButton);

  // After clicking the button, check that the page content changes
  expect(screen.getByText('Question 1')).toBeInTheDocument();
});

test('clicking questionsButton takes us to the next question', () => {
  const { container } = render(<App />);
  
  expect(screen.getByText('Spy')).toBeInTheDocument();

  const landingPageButton = screen.getByText('Start!');
  fireEvent.click(landingPageButton);

  // Find and click the 'questionsButton' on the landing page
  const questionsButton = screen.getByText('Next Question')
  fireEvent.click(questionsButton);

  // After clicking the button, check that the page content changes
  expect(screen.getByText('Question 2')).toBeInTheDocument();
});

test('clicking questionsButton 5 times takes us to the end screen', () => {
  const { container } = render(<App />);
  
  expect(screen.getByText('Spy')).toBeInTheDocument();

  const landingPageButton = screen.getByText('Start!');
  fireEvent.click(landingPageButton);

  // Find and click the 'questionsButton' 5 times on the landing page
  const questionsButton = screen.getByText('Next Question')
  for (let i=0; i < 5; i++) {
  fireEvent.click(questionsButton);
  }

  // After clicking the button, check that the page content changes
  expect(screen.getByText('Quiz complete!')).toBeInTheDocument();
});

test('endScreenButton returns us to the questions', () => {
  const { container } = render(<App />);
  
  expect(screen.getByText('Spy')).toBeInTheDocument();

  const landingPageButton = screen.getByText('Start!');
  fireEvent.click(landingPageButton);

  const questionsButton = screen.getByText('Next Question')
  for (let i=0; i < 5; i++) {
  fireEvent.click(questionsButton);
  }

  const endScreenButton = screen.getByText('Play Again?')
  fireEvent.click(endScreenButton);

  // After clicking the button, check that the page content changes and takes us back to Q1
  expect(screen.getByText('Question 1')).toBeInTheDocument();
});

