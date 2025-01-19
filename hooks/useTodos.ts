import { useState, useEffect } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../components/api';
import { Task } from '../types/todo';

export function useTodos() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const fetchedTasks = await fetchTasks();
        setTasks(fetchedTasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    loadTasks();
  }, []);

  const addTask = async (text: string) => {
    try {
      const newTask = await createTask(text);
      setTasks((prev) => [...prev, newTask]);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const toggleTask = async (id: string) => {
    try {
      const taskToUpdate = tasks.find((task) => task.id === id);
      if (!taskToUpdate) return;
      const updatedTask = await updateTask(id, !taskToUpdate.completed);
      setTasks((prev) =>
        prev.map((task) => (task.id === id ? updatedTask : task))
      );
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const removeTask = async (id: string) => {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return { tasks, addTask, toggleTask, removeTask };
}
