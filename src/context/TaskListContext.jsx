import React, { createContext, useState } from "react";
import { v1 as uuid } from "uuid";
export const TaskListContext = React.createContext();
const TaskListContextProvider = (props) => {
  const [tasks, settask] = useState([
    { title: "Watch the tutorial", id: 1 },
    { title: "learn it", id: 2 },
    { title: "create the app", id: 3 },
  ]);
  const [edit, setEdit] = useState(null);
  const addTask = (adtitle) => {
    settask([...tasks, { title: adtitle, id: uuid() }]);
  };
  const delTask = (id) => {
    settask(tasks.filter((ta) => ta.id !== id));
  };
  const clear = () => {
    settask([]);
  };
  const findItem = (ItemId) => {
    const oldTask = tasks.find((task) => task.id === ItemId);
    setEdit(oldTask); //1
  };
  const EditItem = (title, id) => {
    const newTask = tasks.map((t) => (t.id === id ? { title, id } : t));
    settask(newTask);
    setEdit(null);
  };
  return (
    <TaskListContext.Provider
      value={{ tasks, addTask, delTask, clear, findItem, EditItem, edit }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
