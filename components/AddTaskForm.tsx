import { useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'

interface AddTaskFormProps {
  onAddTask: (text: string) => void
}

export function AddTaskForm({ onAddTask }: AddTaskFormProps) {
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      onAddTask(text)
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        className="flex-grow p-2 border-b-2 border-gray-300 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:border-blue-400 outline-none transition-colors duration-300"
      />
      <button
        type="submit"
        className="ml-2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
      >
        <PlusIcon className="h-6 w-6" />
      </button>
    </form>
  )
}

