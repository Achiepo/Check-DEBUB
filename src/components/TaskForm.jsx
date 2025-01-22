import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title);
      setTitle(''); // Réinitialisation du champ
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nouvelle tâche..."
        className="form-control"
      />
      <button type="submit" className="btn btn-info d-flex align-items-center gap-2">
        <Plus size={16} />
        Ajouter
      </button>
    </form>
  );
};

export default TaskForm;
