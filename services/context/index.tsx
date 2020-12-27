import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

type Context = {
  user?: User;
  tasks?: Task[];
  setUser?: (user: User) => any;
  createTask?: (task: any) => any;
  updateTask?: (task: any) => any;
  deleteTask?: (task: any) => any;
  addTasksFromFirebase?: (task: any) => any;
};

type User = {
  nombre?: string;
  imagen?: string;
  id?: number;
};

type Task = {
  id?: string;
  nombre?: string;
  descripcion?: string;
};

const initialState: Context = {
  user: {},
  tasks: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setUser = (user: User) => {
    dispatch({ type: "LOGIN_USER", payload: user });
  };

  const createTask = (task: Task) => {
    dispatch({ type: "CREATE_TASK", payload: task });
  };

  const addTasksFromFirebase = (tasks: Task[]) => {
    console.log(tasks);
    dispatch({ type: "ADD_FROM_FIREBASE", payload: tasks });
  };

  const updateTask = (newTask: Task) => {
    const newTasks = state.tasks.map((task) => {
      return task.id === newTask.id ? newTask : task;
    });
    console.log(state.tasks);
    dispatch({ type: "UPDATE_TASK", payload: newTasks });
  };

  const deleteTask = (deleteTask: Task) => {
    const tasks = state.tasks.filter((task: Task) => {
      if (task.id !== deleteTask.id) return task;
    });

    dispatch({ type: "DELETE_TASK", payload: tasks });
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setUser,
        createTask,
        updateTask,
        deleteTask,
        addTasksFromFirebase,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
