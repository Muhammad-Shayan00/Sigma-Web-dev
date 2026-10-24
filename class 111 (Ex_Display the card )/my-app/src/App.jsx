import { useState } from 'react'
import { useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [card, setcard] = useState([])

  const fetchdata = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setcard(data)
    console.log(data)
  }

  useEffect(() => {
    fetchdata()
  }, [])


  return (
    <>
      <div className="maincontainer">
        {card.map((eachcard) => {
          return (
            <div className="box">
              <h2>{eachcard.title}</h2>
              <p>{eachcard.body}</p>
            </div>
          )
        }
        )}
      </div>
    </>
  )
}

export default App
