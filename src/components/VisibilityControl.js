export const VisibilityControl = ({
  setShowCompleted,
  cleanTasks,
  isChecked,
}) => {
  function handleClick() {
    if (window.confirm("¿Quieres borrar las tareas realizadas?")) {
      cleanTasks();
    }
  }

  return (
    <div className="ver-completadas">
      <div>
        <input
          checked={isChecked}
          type="checkbox"
          onChange={(e) => setShowCompleted(e.target.checked)}
          id="ver-check"
        />
      </div>
      <label for="ver-check">Mostrar tareas completadas</label>
      <button onClick={handleClick} className="eliminar">
        Eliminar
      </button>
    </div>
  );
};
