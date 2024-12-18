import TodoList from '../components/TodoList'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">Cool Todo List</h1>
        <TodoList />
      </div>
    </main>
  )
}

