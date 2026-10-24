import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  //to handle the input 

  // const [myname, setmyname] = useState("shayan")
  const [form, setform] = useState({ phoneno: "", email: "" })


  //function to handle event

  const handleclick = () => {
    alert("button is clicked")
  }
  const handlemouseover = () => {
    alert("mouse over on red div")
  }

  // const handlechange = (e) => {
  //   setmyname(e.target.value)

  // }

  const handlechangeform = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })

  }

  return (
    <>
      <button onClick={handleclick}>click me too see the magic</button>
      <div className="redbox" onMouseOver={handlemouseover}>
        hover me to see the magic
      </div>

      {/* very very important technique to take the input */}


      {/* can't change textfeild as below due to react documentation */}
      {/* <input type="text" value={myname} /> */}


      {/* correct methord */}

      {/* <input type="text" value={myname} onChange={handlechange} /> */}
      <input type="text" name='phoneno' value={form.phoneno} onChange={handlechangeform} />
      <input type="text" name='email' value={form.email} onChange={handlechangeform} />




    </>
  )
}

export default App
