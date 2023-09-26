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
  
  // Verify that you are initially on the landing page
  expect(screen.getByText('Spy')).toBeInTheDocument();

  // Find and click the 'landingPageButton' on the landing page
  const landingPageButton = screen.getByText('Start!');
  fireEvent.click(landingPageButton);

  // Find and click the 'questionsButton' on the landing page
  const questionsButton = screen.getByText('Next Question')
  fireEvent.click(questionsButton);

  // After clicking the button, check that the page content changes
  expect(screen.getByText('Question 2')).toBeInTheDocument();
});