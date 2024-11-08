import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setcounter] = useState(0)

  const addValue = () => {
    setcounter(counter + 1)
  }

  const removeValue = () => {
    if(counter > 0) {
    setcounter(counter - 1)
    }
  }

  return (
    <>
     <h2>Counter value: {counter}</h2>

     <button
     onClick={addValue}
     >Add value: {counter}</button>
     <br />
     <button
     onClick={removeValue}
     >Remove value: {counter}</button>
    </>
  )
}

export default App
