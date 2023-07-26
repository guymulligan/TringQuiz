import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Sneaky Specimens</h1>
        <p>
          A quiz game for the Natural History Museum Tring
        </p>
        <button>Play!</button>
    </>
  )
}

export default App
