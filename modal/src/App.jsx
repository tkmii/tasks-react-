import { useState } from 'react'
import { AnimatePresence } from "framer-motion";
import Button from './components/Button'
import Modal from './components/Modal'
import './App.css'

function App() {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <>
      <Button setIsOpened={setIsOpened} />
      <AnimatePresence>
        {isOpened && <Modal setIsOpened={setIsOpened} />}
      </AnimatePresence>
    </>
  )
}

export default App