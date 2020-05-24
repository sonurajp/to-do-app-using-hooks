import React, { useEffect, createContext, useState } from "react";
import { v1 as uuid } from "uuid";
export const TaskListContext = React.createContext();

const TaskListContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("saved")) || [];
  const [tasks, settask] = useState(initialState);
  const [edit, setEdit] = useState(null);
  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(tasks));
  }, [tasks]);
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
