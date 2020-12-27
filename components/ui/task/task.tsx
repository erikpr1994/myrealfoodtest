import Styles from "./task.module.css";

import { useState } from "react";

import Button from "../buttons";

import { useContext } from "react";

import { GlobalContext } from "../../../services/context";

import db from "../../../services/firebase/firestore";

export default function Task({ task }) {
  const [isEditing, setEditing] = useState(false);

  const { updateTask, deleteTask } = useContext(GlobalContext);

  const handleDelete = (e) => {
    e.preventDefault();
    deleteTask(task);
    db.removeTask(task.id);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    if (isEditing) {
      const updatedTask = {
        nombre: event.target.name.value ? event.target.name.value : task.nombre,
        descripcion: event.target.description.value
          ? event.target.description.value
          : task.descripcion,
        id: task.id,
      };

      db.updateTasks(updatedTask).then(updateTask(updatedTask));

      event.target.name.value = "";
      event.target.description.value = "";

      setEditing(false);
    }
  };

  return (
    <>
      {!isEditing ? (
        <div className={Styles.container}>
          <h2>{task.nombre}</h2>
          <p className={Styles.description}>{task.descripcion}</p>
          <div className={Styles.buttons}>
            <Button
              onClick={() => {
                setEditing(true);
              }}
            >
              Editar
            </Button>
            <Button onClick={handleDelete}>Eliminar</Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleUpdate} className={Styles.container}>
          <input
            type="text"
            className={Styles.name}
            placeholder={task.nombre}
            name="name"
          />
          <textarea
            className={Styles.description}
            placeholder={task.descripcion}
            name="description"
          ></textarea>
          <div className={Styles.buttons}>
            <Button onClick={() => {}}>Guardar</Button>
            <Button
              onClick={() => {
                setEditing(false);
              }}
            >
              Cancelar
            </Button>
          </div>
        </form>
      )}
    </>
  );
}
