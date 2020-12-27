import firebase from "./";

const db = firebase.default.firestore();

const addTask = (task) => {
  const { nombre, descripcion } = task;
  return db.collection("tasks").add({
    nombre,
    descripcion,
  });
};

const updateTasks = async (task) => {
  const tasksToUpdate = await db.collection("tasks").doc(task.id);
  return tasksToUpdate.update({
    nombre: task.nombre,
    descripcion: task.descripcion,
  });
};

const fetchTasks = () => {
  return db
    .collection("tasks")
    .get()
    .then(({ docs }) => {
      return docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;

        return { ...data, id };
      });
    });
};

const removeTask = async (taskId) => {
  return db.collection("tasks").doc(taskId).delete();
};

export default {
  addTask,
  updateTasks,
  fetchTasks,
  removeTask,
};
