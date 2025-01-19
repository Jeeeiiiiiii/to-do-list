import { useTodos } from '../hooks/useTodos';
import { AddTaskForm } from './AddTaskForm';
import { TaskItem } from './TaskItem';
import { DarkModeToggle } from './DarkModeToggle';
import { motion, AnimatePresence } from 'framer-motion';

export default function TodoList() {
  const { tasks, addTask, toggleTask, removeTask } = useTodos();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-md mx-auto">
      <DarkModeToggle />
      <AddTaskForm onAddTask={addTask} />
      <AnimatePresence>
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <TaskItem
              task={task}
              onToggle={() => toggleTask(task.id)}
              onDelete={() => removeTask(task.id)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
