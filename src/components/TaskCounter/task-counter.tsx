import { useSelector } from 'react-redux'
import { getTasks } from '../../redux/selectors'
import React from 'react'

export const TaskCounter: React.FC = () => {
  const tasks = useSelector(getTasks)

  let completedCount = 0
  let activeCount = 0

  for (const task of tasks) {
    if (task.completed) {
      completedCount += 1
    } else {
      activeCount += 1
    }
  }

  return (
    <div>
      <p>Completed: {completedCount}</p>
      <p>Uncompleted: {activeCount}</p>
    </div>
  )
}
