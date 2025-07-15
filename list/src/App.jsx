import { useState, useEffect, useCallback } from 'react'
import Input from './components/Input'
import List from './components/List'
import Filter from './components/Filter'
import useLocalStorage from './hooks/useLocalStorage'
import './App.css'

function App() {
  const [taskList, setTaskList] = useLocalStorage("tasks", [])
  const [displayedTasks, setDisplayedTasks] = useState(taskList)

  const updateDisplayedTasks = useCallback((tasks) => {
    setDisplayedTasks(tasks)
  }, [])

  useEffect(() => {
    updateDisplayedTasks(taskList)
  }, [taskList, updateDisplayedTasks])

  const handleFilterChange = useCallback((filteredTasks) => {
    setDisplayedTasks(filteredTasks)
  }, [])

  const resetFilter = useCallback(() => {
    setDisplayedTasks(taskList)
  }, [taskList])

  return (
    <>
      <Input taskList={taskList} setTaskList={setTaskList} />
      <Filter
        taskList={taskList}
        onFilterChange={handleFilterChange}
        onResetFilter={resetFilter}
      />
      <List
        taskList={taskList}
        displayedTasks={displayedTasks}
        setTaskList={setTaskList}
      />
    </>
  )
}

export default App