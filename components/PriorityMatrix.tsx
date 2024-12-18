import { Task, Priority } from '../types/todo'

interface PriorityMatrixProps {
  tasks: Task[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function PriorityMatrix({ tasks, onToggle, onDelete }: PriorityMatrixProps) {
  const getTasksByPriority = (priority: Priority) => {
    return tasks.filter((task) => task.priority === priority)
  }

  const renderQuadrant = (title: string, priority: Priority, bgColor: string) => (
    <div className={`p-4 ${bgColor}`}>
      <h3 className="font-bold mb-2">{title}</h3>
      <ul>
        {getTasksByPriority(priority).map((task) => (
          <li key={task.id} className="flex items-center justify-between mb-2">
            <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
            <div>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
                className="mr-2"
              />
              <button onClick={() => onDelete(task.id)} className="text-red-500">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <div className="grid grid-cols-2 gap-4">
      {renderQuadrant('Important & Urgent', Priority.IMPORTANT_URGENT, 'bg-red-100')}
      {renderQuadrant('Important & Not Urgent', Priority.IMPORTANT_NOT_URGENT, 'bg-blue-100')}
      {renderQuadrant('Not Important & Urgent', Priority.NOT_IMPORTANT_URGENT, 'bg-yellow-100')}
      {renderQuadrant('Not Important & Not Urgent', Priority.NOT_IMPORTANT_NOT_URGENT, 'bg-green-100')}
    </div>
  )
}

