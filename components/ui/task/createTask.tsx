import Styles from "./task.module.css";

import Button from "../buttons";

import { useContext } from "react";

import { GlobalContext } from "../../../services/context";

import db from "../../../services/firebase/firestore";

export default function CreateTask() {
  const { addTasksFromFirebase, user } = useContext(GlobalContext);

  const handleCreateTask = (event) => {
    event.preventDefault();

    const task = {
      nombre: event.target.name.value,
      descripcion: event.target.description.value,
      creator: user.id,
    };

    db.addTask(task).then(() =>
      db.fetchTasks().then((data) => addTasksFromFirebase(data))
    );

    event.target.name.value = "";
    event.target.description.value = "";
  };

  return (
    <form className={Styles.container} onSubmit={handleCreateTask}>
      <input
        type="text"
        className={Styles.name}
        placeholder="Añade el nombre de la tarea"
        name="name"
      />
      <textarea
        placeholder="Añade una descripción para la tarea"
        className={Styles.description}
        name="description"
      ></textarea>
      <Button onClick={() => {}}>Crear tarea</Button>
    </form>
  );
}
