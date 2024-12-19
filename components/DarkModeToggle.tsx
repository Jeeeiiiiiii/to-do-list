'use client'

import { useState, useEffect } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

export function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Only run in the browser, as `localStorage` is not available during SSR
    if (typeof window !== 'undefined') {
      const isDarkMode = localStorage.getItem('darkMode') === 'true'
      setDarkMode(isDarkMode)
      document.documentElement.classList.toggle('dark', isDarkMode)
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', newDarkMode.toString())
      document.documentElement.classList.toggle('dark', newDarkMode)
    }
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors duration-300"
    >
      {darkMode ? (
        <SunIcon className="h-6 w-6" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
    </button>
  )
}
