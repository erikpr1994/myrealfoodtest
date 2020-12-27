import { useEffect, useContext } from "react";

import Styles from "../styles/Main.module.css";

import { Task, CreateTask } from "../components/ui/task";

import { GlobalContext } from "../services/context";

import db from "../services/firebase/firestore";

export default function Main() {
  const { addTasksFromFirebase } = useContext(GlobalContext);
  useEffect(() => {
    db.fetchTasks().then((data) => addTasksFromFirebase(data));
  }, []);

  return (
    <div className={Styles.container}>
      <CreateTask />

      <GlobalContext.Consumer>
        {(value) => {
          return value.tasks?.map((task) => {
            return <Task task={task} key={task.id}></Task>;
          });
        }}
      </GlobalContext.Consumer>
    </div>
  );
}
