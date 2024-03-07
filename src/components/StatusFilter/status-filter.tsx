import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button/button'
import { statusFilters } from '../../redux/constants'
import { getStatusFilter } from '../../redux/selectors'
import { setStatusFilter } from '../../redux/filters-slice'
import React from 'react'

export const StatusFilter = (): React.JSX.Element => {
  const dispatch = useDispatch()
  const filter = useSelector(getStatusFilter)

  const handleFilterChange = (filterValue: string): void => {
    dispatch(setStatusFilter(filterValue))
  }

  return (
    <div className="flex gap-4">
      <Button
        selected={filter === statusFilters.all}
        onClick={(): void => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={(): void => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={(): void => handleFilterChange(statusFilters.active)}
      >
        Current
      </Button>
    </div>
  )
}
