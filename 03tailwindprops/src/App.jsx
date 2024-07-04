import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {username: "Micheal", age:21}

  let newArr = [1,2,3,4,5,6]

  return (
    <>
     <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
    <Card username="chai_aur_code" btnText="Fight Me"/>
    <Card username="Leena Bass" btnText="Lets Go"/>
    <Card username="Anjali"/>
    </>
  )
}

export default App
