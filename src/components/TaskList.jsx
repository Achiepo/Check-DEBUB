import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

const TaskList = ({ tasks, onToggleTask }) => {
  // État de chargement
  if (!tasks) {
    return <div className="text-center p-4 text-primary">Chargement...</div>;
  }

  if (tasks.length === 0) {
    return <div className="text-center p-4 text-muted">Aucune tâche pour le moment</div>;
  }

  return (
    <div className="card bg-light shadow-sm rounded">
      <div className="card-body">
        <ul className="list-group list-group-flush">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div className="d-flex align-items-center">
                <button
                  onClick={() => onToggleTask(task.id)}
                  className="btn btn-link text-decoration-none p-0 me-3"
                >
                  {task.completed ? (
                    <CheckCircle className="text-success" />
                  ) : (
                    <Circle className="text-secondary" />
                  )}
                </button>
                <span
                  className={`${
                    task.completed ? 'text-decoration-line-through text-muted' : ''
                  }`}
                >
                  {task.title}
                </span>
              </div>
              <span className="text-muted small">
                {task.createdAt ? new Date(task.createdAt).toLocaleDateString() : ''}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
