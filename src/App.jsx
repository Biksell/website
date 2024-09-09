import {useState, useEffect} from 'react'
import './App.css'

function App() {
  const [cursor, setCursor] = useState('_');

  useEffect (() => {
    setTimeout(() => {
      const interval = setCursor(cursor === " " ? "_" : " ")
    }, 1000)
  })

  return (
    <>
      <span>biksel.dev</span>
      <span className="cursor">{cursor}</span>
    </>
  )
}

export default App
