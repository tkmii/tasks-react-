import { useState } from 'react'
import './App.css'

function App({ text }) {
  const [isDisabled, setIsDisabled] = useState(false)

  function changeState() {
    setIsDisabled(true)
  }

  return (
    <>
      <button onClick={changeState} disabled={isDisabled}>{text}</button>
    </>
  )
}

export default App
