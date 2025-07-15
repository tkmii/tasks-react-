import { useState, useCallback } from 'react'
import './Input.css'

function Input({ taskList, setTaskList }) {
  const [inputValue, setInputValue] = useState('');

  const addTask = useCallback(() => {
    inputValue.trim()
    validation()
  }, [inputValue])

  const validation = () => {
    if (inputValue == '') {
      alert('Введите задачу')
    } else {
      setTaskList([...taskList, { text: inputValue, isChecked: false }]);
      setInputValue('');
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask()
    }
  };

  return (
    <>
      <div className="input">
        <label htmlFor="task">Введите задачу</label>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={handleKeyPress} type="text" id="task" />
        <button type="submit" onClick={addTask}>Отправить</button>
      </div>
    </>
  )
}

export default Input
