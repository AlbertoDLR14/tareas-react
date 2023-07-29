import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask, showCompleted, taskTitle }) => {
  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
      ));
  };

  return (
    <div className="notas">
      <div className="notas-titulo">
        <p>{taskTitle}</p>
      </div>
      <div className="notas-listado">{taskTableRows(showCompleted)}</div>
    </div>
  );
};
