import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1><span className='text-teal-500'>Vite</span> + <span className="text-blue-500">React</span></h1>
    </div>
  )
}

export default App
