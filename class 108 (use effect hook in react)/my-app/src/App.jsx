import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div>
      <Navbar countvariable={count} />
      shayan
      <div>
        {count}

      </div>
      <button onClick={() => {
        setCount(count + 1)
      }}>click me</button>
    </div>
  )
}

export default App
