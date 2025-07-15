import React from 'react';
import './TaskItem.css'

const TaskItem = React.memo(({ task, index, onToggle, onDelete }) => {
  return (
    <li className={`item-task ${task.isChecked ? 'checked' : ''}`}>
      <input
        className="checkbox"
        checked={task.isChecked}
        onChange={() => onToggle(index)}
        type="checkbox"
      />
      <div className="text-task">{task.text}</div>
      <button className="reset" onClick={() => onDelete(index)}>
        Удалить
      </button>
    </li>
  );
});

export default TaskItem;