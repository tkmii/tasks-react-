import React from 'react';
import TaskItem from './TaskItem';

function List({ taskList, setTaskList, displayedTasks }) {
  const deleteTask = (indexToDelete) => {
    setTaskList(taskList.filter((_, index) => index !== indexToDelete));
  };

  const toggleChecked = (index) => {
    setTaskList(prevTasks =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };

  return (
    <ul>
      {displayedTasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          onToggle={toggleChecked}
          onDelete={deleteTask}
        />
      ))}
    </ul>
  );
}

export default React.memo(List);