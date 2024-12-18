import { motion } from 'framer-motion'
import { TrashIcon } from '@heroicons/react/24/solid'

interface Task {
  id: string
  text: string
  completed: boolean
}

interface TaskItemProps {
  task: Task
  onToggle: () => void
  onDelete: () => void
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <motion.div
      className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggle}
          className="form-checkbox h-5 w-5 text-blue-500 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
        />
        <span className={`ml-3 ${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-white'}`}>
          {task.text}
        </span>
      </div>
      <button
        onClick={onDelete}
        className="text-red-500 hover:text-red-700 focus:outline-none transition-colors duration-300"
      >
        <TrashIcon className="h-5 w-5" />
      </button>
    </motion.div>
  )
}

