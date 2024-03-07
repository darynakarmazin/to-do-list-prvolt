import { useSelector } from 'react-redux'
import { getTasks } from '../../redux/selectors'
import React from 'react'

export const TaskCounter: React.FC = () => {
  const tasks = useSelector(getTasks)

  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1
      } else {
        acc.active += 1
      }
      return acc
    },
    { 'active': 0, 'completed': 0 },
  )

  return (
    <div>
      <p>Completed: {count.completed}</p>
      <p>Uncompleted: {count.active}</p>
    </div>
  )
}
