import React, { useState } from 'react'
import { BsSave } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/tasks-slice'

const MAX_CHARACTER_LENGTH = 100

export const InputForm: React.FC = () => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.currentTarget.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (
      query.trim().length > 0 &&
      query.trim().length <= MAX_CHARACTER_LENGTH
    ) {
      dispatch(addTask(query))
      setQuery('')
    } else if (query.trim().length === 0) {
      alert('Please enter a non-empty task.')
    } else if (query.trim().length > MAX_CHARACTER_LENGTH) {
      alert(
        `Please enter a task with ${MAX_CHARACTER_LENGTH} characters or less.`,
      )
    }
  }

  return (
    <form className="relative mx-auto mb-10 w-96" onSubmit={handleSubmit}>
      <button
        className="absolute right-0 top-0 h-14 w-12 text-base font-bold text-gray-700"
        type="submit"
        aria-label="Save"
      >
        <BsSave size="20px" />
      </button>

      <input
        className="h-14 w-full border-b border-gray-700 bg-transparent px-4 pr-16 text-lg font-light tracking-wide text-gray-700 outline-none transition duration-300 ease-in-out"
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={query}
        autoFocus
      />
    </form>
  )
}
