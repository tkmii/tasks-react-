import { useState } from "react"
import { allTasks, filteredTaskName } from '../const.js'
import './Filtres.css'

function Filter({ taskList, onFilterChange, onResetFilter }) {
  const [isFiltred, setisFiltred] = useState(allTasks)

  const filterTasks = (filterCondition) => {
    const filteredTasks = taskList.filter(filterCondition)
    onFilterChange(filteredTasks)
    setisFiltred(filteredTaskName)
  }

  const showAll = () => {
    onResetFilter()
    setisFiltred('allTasks')
  }

  const filtredActive = (task) => !task.isChecked
  const filtredCompleted = (task) => task.isChecked

  return (
    <div className="filtres">
      <button
        className="filter"
        onClick={showAll}
        disabled={isFiltred === allTasks}
      >
        Все
      </button>
      <button
        className="filter"
        onClick={() => filterTasks(filtredActive)}
        disabled={isFiltred === filteredTaskName}
      >
        Активные
      </button>
      <button
        className="filter"
        onClick={() => filterTasks(filtredCompleted)}
        disabled={isFiltred === filteredTaskName}
      >
        Выполненные
      </button>
    </div>
  )
}

export default Filter