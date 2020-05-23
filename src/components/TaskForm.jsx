import React, { useEffect, useContext, useState } from "react";

import { TaskListContext } from "../context/TaskListContext";

const TaskForm = () => {
  const { addTask, clear, EditItem, edit } = useContext(TaskListContext);
  const [state, setstate] = useState("");
  const handelChange = (e) => {
    setstate(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    addTask(state);
    edit ? EditItem(state, edit.id) : setstate("");
  };

  useEffect(() => {
    edit ? setstate(edit.title) : setstate(""); //2
  }, [edit]);

  return (
    <form onSubmit={handelSubmit} className="form">
      <input
        onChange={handelChange}
        value={state}
        type="text"
        className="task-input"
        placeholder="Add task.."
        required
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {edit ? "Edit" : "Add Task"}
        </button>
        <button onClick={() => clear()} className="btn clear-btn">
          clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
