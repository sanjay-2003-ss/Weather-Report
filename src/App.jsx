import { useState } from 'react'
import Weather from './component/Weather'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Weather/>
    </>
  )
}

export default App
