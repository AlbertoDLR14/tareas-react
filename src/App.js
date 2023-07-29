import { useState, useEffect } from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function createNewTask(taskName, taskDescription) {
    console.log(taskName);
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([
        ...taskItems,
        { name: taskName, description: taskDescription, done: false },
      ]);
    }
  }

  useEffect(() => {
    let data = localStorage.getItem("task");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(taskItems));
  }, [taskItems]);

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  const cleanTasks = () => {
    setTaskItems(taskItems.filter((task) => !task.done));
    setShowCompleted(false);
  };

  return (
    <div className="App">
      <div className="tituloApp">
        <h1>TAREAS</h1>
      </div>
      <TaskCreator createNewTask={createNewTask} />

      <TaskTable
        tasks={taskItems}
        toggleTask={toggleTask}
        showCompleted={false}
        taskTitle="Tareas pendientes:"
      />

      <VisibilityControl
        isChecked={showCompleted}
        cleanTasks={cleanTasks}
        setShowCompleted={(checked) => setShowCompleted(checked)}
      />

      {showCompleted === true && (
        <TaskTable
          tasks={taskItems}
          toggleTask={toggleTask}
          showCompleted={true}
          taskTitle="Tareas realizadas:"
        />
      )}
    </div>
  );
}

export default App;
