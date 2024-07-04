import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if (counter < 20) {
      console.log("Value added", counter);
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
    }
    else {
      console.log("Value cannot be more than 20")
    } 
  }

  const removeValue = () => {
    if( counter > 0 ) {
      counter = counter - 1
      console.log("Value removed", counter);
      setCounter(counter)
    }
    else {
      console.log("Value cannot be less than zero")
    }
  }


  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>+</button>
      <p>Counter value is {counter}</p>
      <br />
      <button onClick={removeValue}>-</button>
    </>
  )
}

export default App
