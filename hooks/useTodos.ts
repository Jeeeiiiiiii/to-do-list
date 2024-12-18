import { useState, useEffect } from 'react'
import { Task, Priority } from '../types/todo'

export function useTodos() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (text: string, priority: Priority) => {
    setTasks([...tasks, { id: Date.now().toString(), text, completed: false, priority }])
  }

  const toggleTask = (id: string) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return { tasks, addTask, toggleTask, deleteTask }
}

