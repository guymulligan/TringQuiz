import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App.jsx'
import ReactDOM from 'react-dom';

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<App />)

  // ASSERT
  expect(screen.getByText('Spy')).toHaveTextContent('Spy')
})