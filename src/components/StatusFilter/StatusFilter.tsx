import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button/Button'
import { statusFilters } from '../../redux/constants'
import { getStatusFilter } from '../../redux/selectors'
import { setStatusFilter } from '../../redux/filtersSlice'


export const StatusFilter = (): JSX.Element => {
  const dispatch = useDispatch()
  const filter = useSelector(getStatusFilter)

  const handleFilterChange = (filter: string): void => {
    dispatch(setStatusFilter(filter))
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
