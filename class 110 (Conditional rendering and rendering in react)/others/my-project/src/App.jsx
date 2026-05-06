import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      title: "Hey",
      desc: "I am a good todo"
    },
    {
      title: "Hey Another todo",
      desc: "I am a good todo too"
    },
    {
      title: "Hey I am grocery todo",
      desc: "I am a good todo but I am grocery todo"
    },

  ])



  return (
    <div>
    <h1 class="text-3xl font-bold underline text-amber-900">
    Hello world!
  </h1>
  {/* show when value is true */}
  {/* {showbtn && <button>show button is true</button>} */}

  {/* or when has to apply condition */}
  {showbtn ? <button>show button is true</button> : <button>show button is false</button>} 

  <div>
    {todos.map(elementt=>{
      return <div className="m-4 border border-1 border-purple-400">
        <div>{elementt.title}</div>
        <div>{elementt.desc}</div>
      </div>
    })}
  </div>
    </div>
  )
}

export default App
