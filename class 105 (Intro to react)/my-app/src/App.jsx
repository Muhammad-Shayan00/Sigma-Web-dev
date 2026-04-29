import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/navbar'

function App() {
 const [value, setvalue] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <div className="value">
        {value}
      </div>
      <button onClick={()=>{setvalue(value+1)}}>Clickme</button>
    </div>
    
  )
}

export default App
