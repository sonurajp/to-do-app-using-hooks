import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";

import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);

  return (
    <div>
      {tasks.length ? (
        <ul>
          {tasks.map((maptask) => {
            return <Task task={maptask} id={maptask.id} />;
          })}
        </ul>
      ) : (
        <div className="no-tasks">No Task</div>
      )}
    </div>
  );
};

export default TaskList;
