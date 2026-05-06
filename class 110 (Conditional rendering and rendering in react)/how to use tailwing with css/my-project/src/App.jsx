import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


//   //methord to use 
//  1.run this command one by one in terminal
//   npm create vite@latest my-project
//   cd my-project

// 2. now this
//  npm install tailwindcss @tailwindcss/vite

// 3. add this in vite.config.js 
//  import tailwindcss from '@tailwindcss/vite'    and
//  plugins: [
//      tailwindcss(),
//     ],

// 4.replace index.css with this
//    @import "tailwindcss";

//  5. finally run in terminal
//    npm run dev

  return (
    <div>
      <h1 class="text-3xl font-bold underline bg-amber-500 text-amber-600">
    Hello world!
  </h1>
    </div>
  )
}

export default App
