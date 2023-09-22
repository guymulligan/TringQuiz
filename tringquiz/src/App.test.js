import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App.jsx'

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<App/>)

  // ASSERT
  expect(screen.getByRole('Spy')).toHaveTextContent('Spy')
})