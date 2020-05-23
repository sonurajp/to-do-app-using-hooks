import React, { useContext, useState } from "react";
import { TaskListContext } from "../context/TaskListContext";

const Task = ({ task }) => {
  const { delTask, findItem } = useContext(TaskListContext);
  return (
    <li className="list-item">
      <span>{task.title}</span>
      <div>
        <button
          onClick={() => delTask(task.id)}
          className="btn-delete task-btn"
        >
          <i className="fas fa-trash-alt"></i>
        </button>
        <button onClick={() => findItem(task.id)} className="btn-edit task-btn">
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  );
};

export default Task;
