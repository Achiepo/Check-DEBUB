import React from 'react';
import { BarChart2 } from 'lucide-react';

const TaskStats = ({ totalTasks, completedTasks }) => {
  // Calcul du pourcentage de tâches terminées
  const completionPercentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
  const roundedPercentage = completionPercentage.toFixed(1);

  return (
    <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded shadow-sm">
      <div className="d-flex align-items-center gap-3">
        <BarChart2 className="text-primary" size={32} />
        <div>
          <h2 className="h5 mb-1 text-warning">Statistiques</h2>
          <p className="mb-0 text-muted">
            {completedTasks} sur {totalTasks} tâches complétées
          </p>
        </div>
      </div>
      <div className="position-relative" style={{ width: '100px', height: '100px' }}>
        <svg className="w-100 h-100" viewBox="0 0 36 36">
          <path
            d="M18 2.0845
              "
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="3"
          />
          <path
            d="M18 2.0845
              "
            fill="none"
            stroke="#0d6efd"
            strokeWidth="3"
            strokeDasharray={`${completionPercentage}, 100`}
          />
        </svg>
        <div
          className="position-absolute top-50 start-50 translate-middle"
          style={{ textAlign: 'center' }}
        >
          <span className="fw-bold fs-5">{roundedPercentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default TaskStats;
