import { useState } from "react";

export function TaskCreator({ createNewTask }) {
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    createNewTask(newTaskName, newTaskDescription);
    setNewTaskName("");
    setNewTaskDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Crear las tareas</p>
      <input
        type="text"
        placeholder="Ingresar titulo..."
        onChange={(e) => setNewTaskName(e.target.value)}
        value={newTaskName}
        required
      />
      <input
        type="text"
        placeholder="Ingresar descripción..."
        onChange={(e) => setNewTaskDescription(e.target.value)}
        value={newTaskDescription}
        required
      />
      <button>Guardar tarea</button>
    </form>
  );
}
