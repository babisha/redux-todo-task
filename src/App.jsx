import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import { increment } from './features/todo/todo-slice'

function App() {
  const[value, setValue] = useState()
  
  const dispatch = useDispatch()
  const handleSubmit=(e) => {
      e.preventDefault()
      dispatch(increment({name:value}))

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Type your name' value={value} onChange={(e)=>setValue(e.target.value)}/>
      <button type="submit">SUBMIT</button>
      </form>
    </>
  )
}

export default App
