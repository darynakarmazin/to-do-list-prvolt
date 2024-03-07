import { RootState, Task } from '../types/types'

export const getTasks = (state:RootState): Task[] => state.tasks

export const getStatusFilter = (state:RootState): string => state.filters.status
