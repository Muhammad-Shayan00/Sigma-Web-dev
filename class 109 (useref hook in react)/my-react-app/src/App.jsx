import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // use case 1 
  //we use this when we have to presist the value of any variablr that don't change when the rendring happen
  const a=useRef(0)
  useEffect(() => {
    a.current=a.current + 1;
    console.log(`the curretn value of a is ${a.current}`)
   
  },)

  // use case 2

  const btnref = useRef()
  useEffect(() => {
    
    console.log(`button color has been changed`)
    btnref.current.style.backgroundColor = "red"
   
  },[])

  return (
    <div>
      shayan
      <div>{count}</div>
      <button onClick={()=>{setCount(count+2)}}>click me</button>
      <button ref={btnref}>i am a red button</button>
      
    </div>
  )
}

export default App
