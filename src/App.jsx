import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskStats from './components/TaskStats';
import { ClipboardList } from 'lucide-react';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskCounter, setTaskCounter] = useState(0);

  useEffect(() => {
    setTaskCounter(tasks.length);
  }, [tasks]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
      createdAt: new Date(),
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="min-vh-100 bg-light py-5">
      <div className="container">
        <header className="d-flex align-items-center gap-3 mb-4">
          <ClipboardList className="text-primary" size={32} />
          <h1 className="h3 text-dark">Gestionnaire de Tâches (Debug)</h1>
        </header>

        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <TaskForm onAddTask={addTask} />
          </div>
        </div>

        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <TaskStats
              totalTasks={taskCounter}
              completedTasks={tasks.filter((task) => task.completed).length}
            />
          </div>
        </div>

        <div className="card shadow-sm">
          <div className="card-body">
            <TaskList tasks={tasks} onToggleTask={toggleTask} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
