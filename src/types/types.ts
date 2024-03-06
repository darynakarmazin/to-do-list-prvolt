export interface Task {
  id: string
  text: string
  completed: boolean
}

export interface Filters {
  status: string
}

export interface RootState {
  tasks: Task[]
  filters: Filters
}
