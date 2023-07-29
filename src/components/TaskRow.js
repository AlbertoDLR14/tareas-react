export const TaskRow = ({ task, toggleTask }) => {
  return (
    <div className="nota-lista">
      <div className="nota-title">
        <p>{task.name}</p>
      </div>
      <div className="nota-desc">
        <p>{task.description}</p>
      </div>

      <div className="nota-check">
        <input
          type="checkbox"
          className="nota-check-input"
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
        <span className="completar-check">COMPLETAR</span>
      </div>
    </div>
  );
};
