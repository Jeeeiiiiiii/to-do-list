'use client'

import { useState, useEffect } from 'react'
import { AddTaskForm } from './AddTaskForm'
import { TaskItem } from './TaskItem'
import { DarkModeToggle } from './DarkModeToggle'
import { motion, AnimatePresence } from 'framer-motion'

interface Task {
  id: string
  text: string
  completed: boolean
}

export default function TodoList() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (text: string) => {
    setTasks([...tasks, { id: Date.now().toString(), text, completed: false }])
  }

  const toggleTask = (id: string) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

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
              onDelete={() => deleteTask(task.id)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

