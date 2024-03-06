import React from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
import { BiCircle, BiChevronDownCircle } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { deleteTask, toggleCompleted } from '../../redux/tasksSlice'
import { Task } from '../../types/types'

export const Todo: React.FC<{ task: Task }> = ({ task }) => {
  const dispatch = useDispatch()

  const handleDelete = (): void => {
    dispatch(deleteTask(task.id))
  }

  const handleToggle = (): void => {
    dispatch(toggleCompleted(task.id))
  }

  return (
    <div className="relative size-full rounded-lg bg-gray-200 p-6 text-gray-600 shadow-md transition-transform duration-200 hover:scale-105 focus:scale-105">
      <p className="mb-2.5 text-center text-lg font-bold">TODO #</p>
      <div className="flex items-center" style={{ overflowWrap: 'anywhere' }}>
        {task.completed ? 
          <button
            className="p-2 transition-transform duration-200 hover:scale-105 focus:scale-105"
            type="button"
            onClick={handleToggle}
          >
            <BiChevronDownCircle size={32} />
          </button> : 
          <button
            className="p-2 transition-transform duration-200 hover:scale-105 focus:scale-105"
            type="button"
            onClick={handleToggle}
          >
            <BiCircle size={32} />
          </button>
        }
        <p
          className={
            task.completed
              ? 'cursor-pointer text-center text-lg line-through'
              : 'cursor-pointer text-center text-lg'
          }
          onClick={handleToggle}
        >
          {task.text}
        </p>
      </div>

      <button
        className="absolute right-0 top-0 p-2 transition-transform duration-200 ease-in-out hover:scale-105 focus:scale-105"
        type="button"
        aria-label={`Delete ${task.text}`}
        onClick={(): void => handleDelete()}
      >
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  )
}
